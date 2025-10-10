// ==== タブ切替 ====
const tabQuizBtn = document.getElementById("tab-quiz");
const tabAnalBtn = document.getElementById("tab-analytics");
const panelQuiz = document.getElementById("panel-quiz");
const panelAnal = document.getElementById("panel-analytics");

const wrongFixed = document.getElementById("wrongFixed");
const toggleWrongBtn = document.getElementById("toggleWrong");
const wrongPanel = document.getElementById("wrongPanel");
const jumpWrongList = document.getElementById("jumpWrongList");

let wrongIdxes = []; // 不正解の「問題の並び順インデックス」（0始まり）
let wrongCursor = 0; // 現在位置

async function switchTab(to) {
    const toQuiz = to === "quiz";
    // ボタンの状態
    tabQuizBtn.classList.toggle("active", toQuiz);
    tabAnalBtn.classList.toggle("active", !toQuiz);
    tabQuizBtn.setAttribute("aria-selected", String(toQuiz));
    tabAnalBtn.setAttribute("aria-selected", String(!toQuiz));
    // パネルの表示/非表示
    panelQuiz.classList.toggle("hidden", !toQuiz);
    panelAnal.classList.toggle("hidden", toQuiz);
    // スクロールを上に
    window.scrollTo({ top: 0, behavior: "smooth" });

    // 固定UI（経過時間・不正解問題）は「問題を解く」タブのみ表示
    if (timerEl) timerEl.style.display = toQuiz ? "" : "none";
    if (wrongFixed) wrongFixed.style.display = toQuiz ? "" : "none";

    try {
        if (toQuiz) {
            // 問題を解く → セレクトボックス（＋ローカルファイルがあればそちら）で再読込
            if (fileSelect) currentFile = fileSelect.value || currentFile;
            await loadAllQuestions(); // 通常ルート（ローカル優先）
            updateSelectedFileCount?.();
            setStatus?.("出題範囲を再読込しました", 1500);
        } else {
            // 回答結果を分析 → 常に ALL を強制再読込（ローカルファイルは無視）
            await loadAllQuestions("ALL");
            // 分析系の再描画（履歴はそのまま）
            renderHistory?.();
            renderTrendChart?.();
            analyzeHistoryAndRender?.();
            setStatus?.("分析用に全問題（ALL）を再読込しました", 1500);
        }
    } catch (e) {
        console.warn("タブ切替時の再読込でエラー:", e);
        setStatus?.(`エラー: ${e.message || e}`, 4000);
    }
}

// イベント
tabQuizBtn?.addEventListener("click", () => switchTab("quiz"));
tabAnalBtn?.addEventListener("click", () => switchTab("analytics"));

// --- 設定 ---
// const QUESTIONS_URL = './questions.json'; // 同じフォルダに配置

// --- 状態管理 ---
let allQuestions = [];
let currentQuestions = []; // 出題中の問題
let userAnswers = new Map(); // key: q.id, value: choice index
let currentFile = "ALL"; // デフォルト

// --- 要素参照 ---
const fileSelect = document.getElementById("fileSelect");
const fileInput = document.getElementById("fileInput");
const fileCountEl = document.getElementById("fileCount");
const countInput = document.getElementById("questionCount");
const loadBtn = document.getElementById("loadBtn");
const gradeBtn = document.getElementById("gradeBtn");
const resetBtn = document.getElementById("resetBtn");
const statusEl = document.getElementById("status");
const quizArea = document.getElementById("quizArea");
const gradeArea = document.getElementById("gradeArea");
const resultArea = document.getElementById("resultArea");
const scoreText = document.getElementById("scoreText");
const explanationsEl = document.getElementById("explanations");
const randomizeChoicesEl = document.getElementById("randomizeChoices");
const adaptiveModeEl = document.getElementById("adaptiveMode");
const adaptiveStrengthEl = document.getElementById("adaptiveStrength");
const showQuestionIdEl = document.getElementById("showQuestionId");

const orderModeEl = document.getElementById("questionOrderMode");
const randomControls = document.getElementById("randomControls");
const orderedControls = document.getElementById("orderedControls");
const orderFromEl = document.getElementById("orderFrom");
const orderToEl = document.getElementById("orderTo");

const timerEl = document.getElementById("timer"); // ← 追加

// 出題範囲のセレクト
fileSelect?.addEventListener("change", () => {
    localStorage.setItem("opt.fileSelect", fileSelect.value);
    // 既存の処理（件数更新など）はそのまま
});

// 出題数
countInput?.addEventListener("input", () => {
    localStorage.setItem("opt.questionCount", String(countInput.value));
});

// 弱点優先
adaptiveModeEl?.addEventListener("change", () => {
    localStorage.setItem("opt.adaptiveMode", adaptiveModeEl.checked ? "1" : "0");
});

// 重点度
adaptiveStrengthEl?.addEventListener("input", () => {
    localStorage.setItem("opt.adaptiveStrength", String(adaptiveStrengthEl.value));
});

// 選択肢ランダム
randomizeChoicesEl?.addEventListener("change", () => {
    localStorage.setItem("opt.randomizeChoices", randomizeChoicesEl.checked ? "1" : "0");
    // すでに出題済みなら表示順が変わるため再描画
    if (Array.isArray(currentQuestions) && currentQuestions.length > 0) {
        renderQuiz(currentQuestions);
    }
});

// （任意）問題ID表示
showQuestionIdEl?.addEventListener("change", () => {
    localStorage.setItem("opt.showQuestionId", showQuestionIdEl.checked ? "1" : "0");
    if (Array.isArray(currentQuestions) && currentQuestions.length > 0) {
        renderQuiz(currentQuestions);
    }
});

orderModeEl?.addEventListener("change", updateOrderModeUI);
orderFromEl?.addEventListener("input", () => {
    clampOrderInputs();
    localStorage.setItem("opt.orderFrom", orderFromEl.value);
});
orderToEl?.addEventListener("input", () => {
    clampOrderInputs();
    localStorage.setItem("opt.orderTo", orderToEl.value);
});

document.addEventListener("DOMContentLoaded", async () => {
    // 現在の問題インデックスを追跡（出題順に対応）
    let currentQuestionIndex = 0;

    // ▼ 設定の復元
    // 出題範囲
    const savedFileKey = localStorage.getItem("opt.fileSelect");
    if (savedFileKey && fileSelect) {
        fileSelect.value = savedFileKey;
        currentFile = fileSelect.value;
    }

    // 出題数
    const savedCount = localStorage.getItem("opt.questionCount");
    if (savedCount && countInput) {
        countInput.value = savedCount;
    }

    // 弱点優先
    const savedAdaptive = localStorage.getItem("opt.adaptiveMode");
    if (savedAdaptive !== null && adaptiveModeEl) {
        adaptiveModeEl.checked = savedAdaptive === "1";
    }

    // 重点度
    const savedStrength = localStorage.getItem("opt.adaptiveStrength");
    if (savedStrength !== null && adaptiveStrengthEl) {
        adaptiveStrengthEl.value = savedStrength;
    }

    // 選択肢ランダム
    const savedRand = localStorage.getItem("opt.randomizeChoices");
    if (savedRand !== null && randomizeChoicesEl) {
        randomizeChoicesEl.checked = savedRand === "1";
    }

    // （任意）問題ID表示
    const savedShowId = localStorage.getItem("opt.showQuestionId");
    if (savedShowId !== null && showQuestionIdEl) {
        showQuestionIdEl.checked = savedShowId === "1";
    }

    // ▼ 復元（DOMContentLoaded で他オプションと一緒に）
    const savedMode = localStorage.getItem("opt.orderMode");
    if (savedMode && orderModeEl) orderModeEl.value = savedMode;
    const savedFrom = localStorage.getItem("opt.orderFrom");
    const savedTo = localStorage.getItem("opt.orderTo");
    if (savedFrom && orderFromEl) orderFromEl.value = savedFrom;
    if (savedTo && orderToEl) orderToEl.value = savedTo;
    updateOrderModeUI();

    updateSelectedFileCount();
    try {
        await loadAllQuestions(); // ← 初期ロード
        renderHistory(); // 履歴も表示
        renderTrendChart(); // グラフも表示
    } catch (e) {
        console.warn("初期ロードで問題を読み込めませんでした:", e);
    }

    // 初期タブ
    switchTab("quiz");
});

function refreshOrderRangeBounds() {
    if (!orderFromEl || !orderToEl) return;
    const max = Array.isArray(allQuestions) ? allQuestions.length : 0;
    orderFromEl.min = orderToEl.min = "1";
    orderFromEl.max = orderToEl.max = String(max || 1);
    if (!orderFromEl.value) orderFromEl.value = "1";
    if (!orderToEl.value) orderToEl.value = String(Math.min(10, Math.max(1, max)));
    clampOrderInputs();
}
function clampOrderInputs() {
    if (!orderFromEl || !orderToEl) return;
    const max = Array.isArray(allQuestions) ? allQuestions.length : 1;
    let f = Math.max(1, Math.min(max, parseInt(orderFromEl.value || "1", 10)));
    let t = Math.max(1, Math.min(max, parseInt(orderToEl.value || String(max), 10)));
    if (f > t) [f, t] = [t, f];
    orderFromEl.value = String(f);
    orderToEl.value = String(t);
}
function updateOrderModeUI() {
    const isRandom = (orderModeEl?.value || "random") === "random";
    randomControls?.classList.toggle("hidden", !isRandom);
    orderedControls?.classList.toggle("hidden", isRandom);
    localStorage.setItem("opt.orderMode", isRandom ? "random" : "ordered");
    // 入力可能/不可（任意）
    randomControls?.querySelectorAll("input,select").forEach((el) => (el.disabled = !isRandom));
    orderedControls?.querySelectorAll("input,select").forEach((el) => (el.disabled = isRandom));
}

// --- ファイル切り替え ---
fileSelect.addEventListener("change", () => {
    currentFile = fileSelect.value;
    updateSelectedFileCount();
});

// --- ユーティリティ ---
const shuffle = (arr) =>
    arr
        .map((v) => [Math.random(), v])
        .sort((a, b) => a[0] - b[0])
        .map((v) => v[1]);

function ensureNumber(val, fallback = 1) {
    const n = Number(val);
    return Number.isFinite(n) && n > 0 ? Math.floor(n) : fallback;
}

function setStatus(msg, timeoutMs = 2000) {
    statusEl.textContent = msg || "";
    if (timeoutMs > 0) {
        setTimeout(() => {
            if (statusEl.textContent === msg) statusEl.textContent = "";
        }, timeoutMs);
    }
}

function validateAllAnswered() {
    const allAnswered = currentQuestions.every((q) => {
        const a = userAnswers.get(q.id);
        return Array.isArray(a) && a.length > 0; // 1つ以上チェックされていれば回答済み
    });
    gradeBtn.disabled = !allAnswered;
}

// === 画像サポート ===
function sanitizeImageSrc(src) {
    const s = String(src || "").trim();
    // 同一オリジンの相対パス or data:image のみ許可（外部リンクは不可にする場合はここで弾く）
    if (s.startsWith("data:image/")) return s;
    if (s.startsWith("./") || s.startsWith("../") || s.startsWith("/") || /^[\w.\-\/]+$/.test(s)) {
        return s;
    }
    return ""; // 危険なURLは拒否
}
function createImageEl(src, alt = "") {
    const safe = sanitizeImageSrc(src);
    if (!safe) return null;
    const img = document.createElement("img");
    img.loading = "lazy";
    img.decoding = "async";
    img.src = safe;
    img.alt = String(alt || "");
    return img;
}
// テキスト中の Markdown 画像と <img> を順にDOMへ流し込む（コード領域は別処理）
function appendImages(fragment, plainText) {
    const s = String(plainText ?? "");
    let i = 0;
    while (i < s.length) {
        // 直近の画像トークンを探索（Markdown or <img>）
        const mdIdx = s.indexOf("![", i);
        const htmlIdx = s.indexOf("<img", i);
        const hasMd = mdIdx >= 0;
        const hasHtml = htmlIdx >= 0;
        if (!hasMd && !hasHtml) {
            // 画像がなければ残りをテキストとして追加
            if (s.slice(i)) {
                const span = document.createElement("span");
                span.textContent = s.slice(i);
                fragment.appendChild(span);
            }
            break;
        }
        const useHtml = hasHtml && (!hasMd || htmlIdx < mdIdx);
        const idx = useHtml ? htmlIdx : mdIdx;
        // トークン前のテキスト
        if (idx > i) {
            const span = document.createElement("span");
            span.textContent = s.slice(i, idx);
            fragment.appendChild(span);
        }
        if (useHtml) {
            const close = s.indexOf(">", idx);
            if (close < 0) break;
            const tag = s.slice(idx, close + 1);
            const srcM = tag.match(/src\s*=\s*"(.*?)"|src\s*=\s*'(.*?)'/i);
            const altM = tag.match(/alt\s*=\s*"(.*?)"|alt\s*=\s*'(.*?)'/i);
            const src = srcM ? srcM[1] || srcM[2] : "";
            const alt = altM ? altM[1] || altM[2] : "";
            const img = createImageEl(src, alt);
            if (img) fragment.appendChild(img);
            i = close + 1;
        } else {
            // Markdown: ![alt](src)
            const md = s.slice(idx).match(/^!\[([^\]]*)\]\(([^)]+)\)/);
            if (md) {
                const img = createImageEl(md[2], md[1]);
                if (img) fragment.appendChild(img);
                i = idx + md[0].length;
            } else {
                // 形式が崩れていたらそのままテキストとして
                const span = document.createElement("span");
                span.textContent = s.slice(idx, idx + 2);
                fragment.appendChild(span);
                i = idx + 2;
            }
        }
    }
    return fragment;
}

// 選択肢の文字列を安全にDOMへ変換する。
// ・<code>…</code> は改行ありで <pre><code>…</code></pre> に昇格（中身は textContent）
// ・```fenced``` もサポート
// ・画像（![alt](src) / <img ...>）は安全化して表示
function renderChoiceContent(raw) {
    const wrap = document.createElement("span");
    const s = String(raw ?? "");

    // 1) ```fence```（任意）
    const fence = /```(?:\w+)?\n([\s\S]*?)```/m;
    const fm = s.match(fence);
    if (fm) {
        const before = s.slice(0, fm.index);
        const after = s.slice(fm.index + fm[0].length);
        if (before) appendImages(wrap, before);
        const pre = document.createElement("pre");
        const code = document.createElement("code");
        code.textContent = fm[1];
        pre.appendChild(code);
        wrap.appendChild(pre);
        if (after) appendImages(wrap, after);
        return wrap;
    }

    // 2) <code>…</code> をすべて走査（複数可）
    const codeRe = /<code(?:\s+[^>]*)?>([\s\S]*?)<\/code>/gi;
    let last = 0,
        m,
        found = false;
    while ((m = codeRe.exec(s)) !== null) {
        found = true;
        const plain = s.slice(last, m.index);
        if (plain) appendImages(wrap, plain);

        const body = m[1];
        const pre = document.createElement("pre");
        const code = document.createElement("code");
        code.textContent = body;
        pre.appendChild(code);
        wrap.appendChild(pre);
        last = m.index + m[0].length;
    }
    if (found) {
        const tail = s.slice(last);
        if (tail) appendImages(wrap, tail);
        return wrap;
    }

    // 3) <code> も fence も無ければ素のテキストとして
    appendImages(wrap, s);
    return wrap;
}

// --- 描画 ---
function renderQuiz(questions) {
    quizArea.innerHTML = "";
    questions.forEach((q, idx) => {
        const card = document.createElement("article");
        card.className = "card";

        // --- 問題文の描画 ---
        const questionTitle = document.createElement("div");
        questionTitle.className = "question-title";

        const questionId = document.createElement("h3");
        questionId.textContent = `Q${idx + 1}`;

        const questionText = document.createElement("div");
        questionText.className = "question-text";

        // 1) codeプロパティ優先
        if (q.code && q.code.trim() !== "") {
            if (q.question) {
                const p = document.createElement("p");
                p.textContent = q.question;
                questionText.appendChild(p);
            }
            const pre = document.createElement("pre");
            const code = document.createElement("code");
            code.textContent = q.code; // textContentで安全に
            pre.appendChild(code);
            questionText.appendChild(pre);
        } else {
            // 2) question内のフェンス付きコード ```lang ... ``` を検出
            const fence = /```(?:\w+)?\n([\s\S]*?)```/m;
            const m = typeof q.question === "string" ? q.question.match(fence) : null;

            if (m) {
                // フェンスの外側は通常文、内側はコード
                const before = q.question.slice(0, m.index);
                const after = q.question.slice(m.index + m[0].length);
                if (before) {
                    questionText.appendChild(
                        appendImages(document.createDocumentFragment(), before)
                    );
                }
                const pre = document.createElement("pre");
                const code = document.createElement("code");
                code.textContent = m[1];
                pre.appendChild(code);
                questionText.appendChild(pre);
                if (after) {
                    questionText.appendChild(
                        appendImages(document.createDocumentFragment(), after)
                    );
                }
            } else {
                // 通常テキストのみ
                questionText.appendChild(
                    appendImages(document.createDocumentFragment(), q.question || "(問題文なし)")
                );
            }
        }

        const meta = document.createElement("div");
        meta.className = "meta";
        const idPart = showQuestionIdEl?.checked ? `ID: ${q.id}` : "";
        const cat = showQuestionIdEl?.checked && q.category ? ` / カテゴリ: ${q.category}` : "";
        const diff = showQuestionIdEl?.checked && q.difficulty ? ` / 難易度: ${q.difficulty}` : "";
        meta.textContent = `${idPart}`;

        const choicesWrap = document.createElement("div");
        choicesWrap.className = "choices";

        // ★ 選択肢の順序決定（ランダム or 作問順）
        const choicePairs = q.choices.map((c, i) => ({ text: c, index: i }));
        const displayPairs = randomizeChoicesEl?.checked
            ? shuffle(choicePairs) // ← ランダム表示
            : choicePairs; // ← 作問順のまま表示

        // 新しい choices と正解インデックスを計算
        const correctSet = Array.isArray(q.answerIndex) ? q.answerIndex : [q.answerIndex];

        // 表示順にあわせて q.choices と q.answerIndex を“表示用”にそろえる
        q.choices = displayPairs.map((c) => c.text);
        q.answerIndex = displayPairs
            .map((c, newIdx) => (correctSet.includes(c.index) ? newIdx : null))
            .filter((v) => v !== null);

        // 実際の選択肢DOMを作成
        displayPairs.forEach((c, cIdx) => {
            const id = `q${q.id}_c${cIdx}`;
            const name = `qgroup_${q.id}`;

            const label = document.createElement("label");
            label.className = "choice";
            label.setAttribute("for", id);

            const input = document.createElement("input");
            input.type = "checkbox";
            input.name = name;
            input.id = id;
            input.value = cIdx;

            input.addEventListener("change", () => {
                let answers = userAnswers.get(q.id) || [];
                if (input.checked) {
                    if (!answers.includes(cIdx)) answers.push(cIdx);
                } else {
                    answers = answers.filter((v) => v !== cIdx);
                }
                userAnswers.set(q.id, answers);
                validateAllAnswered();

                // ★ クラス制御：label.choice 要素に .selected を付ける・外す
                const lbl = input.closest(".choice");
                if (lbl) {
                    if (input.checked) {
                        lbl.classList.add("selected");
                    } else {
                        lbl.classList.remove("selected");
                    }
                }
            });

            const text = document.createElement("div");
            //const labelStrong = document.createElement("strong");
            //labelStrong.textContent = `${String.fromCharCode(65 + cIdx)}.`;
            //text.appendChild(labelStrong);
            //text.append(" ");
            const rawChoice = typeof c === "string" ? c : c.text;
            text.appendChild(renderChoiceContent(rawChoice));

            label.appendChild(input);
            label.appendChild(text);
            choicesWrap.appendChild(label);
        });

        card.appendChild(questionTitle);
        questionTitle.appendChild(questionId);
        questionTitle.appendChild(meta);
        card.appendChild(questionText);
        card.appendChild(choicesWrap);

        // スクロール目印になるID/属性
        card.id = `qcard-${q.id}`;
        card.dataset.qid = q.id;
        card.dataset.qnum = String(idx + 1);

        // --- 解説プレースホルダ（採点後に埋める） ---
        const exp = document.createElement("div");
        exp.className = "inline-exp hidden";
        exp.innerHTML = `<div class="exp-head">解説</div><div class="exp-body"></div>`;
        card.appendChild(exp);

        quizArea.appendChild(card);
    });
}

// 採点後の表示
function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    const sortedA = [...a].sort();
    const sortedB = [...b].sort();
    return sortedA.every((v, i) => v === sortedB[i]);
}

function markAnswers() {
    const cards = quizArea.querySelectorAll(".card");
    cards.forEach((card, idx) => {
        const q = currentQuestions[idx];
        const user = userAnswers.get(q.id) || [];
        const correct = Array.isArray(q.answerIndex) ? q.answerIndex : [q.answerIndex];

        const choiceLabels = card.querySelectorAll(".choice");
        choiceLabels.forEach((label, cIdx) => {
            label.classList.remove("correct", "incorrect");
            const tag = label.querySelector(".answer-tag");
            if (tag) tag.remove();

            if (correct.includes(cIdx)) {
                label.classList.add("correct");
                const span = document.createElement("span");
                span.className = "answer-tag ok";
                span.textContent = "正解";
                label.appendChild(span);
            }
            if (user.includes(cIdx) && !correct.includes(cIdx)) {
                label.classList.add("incorrect");
                const span = document.createElement("span");
                span.className = "answer-tag ng";
                span.textContent = "不正解";
                label.appendChild(span);
            }
        });

        // 採点後にその設問のチェックを無効化（任意）
        choiceLabels.forEach((label) => {
            const inp = label.querySelector("input");
            if (inp) inp.disabled = true;
        });

        // === ここから追記：各問題の下に解説を表示 ===
        const expEl = card.querySelector(".inline-exp");
        if (expEl) {
            const body = expEl.querySelector(".exp-body");
            const correctLetters = correct.map(letter).join(", ");
            const userLetters = user.length ? user.map(letter).join(", ") : "未回答";

            // フェンス付きコード ``` ... ``` が解説に含まれている場合も整形
            const explanationHtml = formatExplanationHtml(q.explanation);

            body.innerHTML = `
                <div>問題ID: ${q.id}</div>
                <div>正解: ${correctLetters} / あなたの回答: ${userLetters}</div>
                ${explanationHtml}
                `;
            expEl.classList.remove("hidden");
        }
        // === 追記ここまで ===
    });
}

// 結果セクション
function showResults() {
    let correctCount = 0;
    const items = [];

    currentQuestions.forEach((q) => {
        const user = userAnswers.get(q.id) || [];
        const correct = Array.isArray(q.answerIndex) ? q.answerIndex : [q.answerIndex];
        const isCorrect = arraysEqual(user, correct);
        if (isCorrect) correctCount++;

        items.push({ id: q.id, user, correct, isCorrect });
    });

    const total = currentQuestions.length;
    const rate = Math.round((correctCount / total) * 100);
    scoreText.textContent = `正解数: ${correctCount} / ${total}（正答率 ${rate}%）`;

    // === プログレスバー更新 ===
    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = rate + "%";
    progressBar.style.background = rate >= 65 ? "var(--ok)" : "var(--ng)";

    // === 評価メッセージ ===
    const elapsedMs = quizStartAt ? Date.now() - quizStartAt : null;
    const perQ = elapsedMs ? elapsedMs / 1000 / total : null;
    let evalMsg = "";
    if (perQ !== null) {
        evalMsg += `平均回答時間: ${perQ.toFixed(1)}秒/問 → `;
        evalMsg += perQ <= 60 ? "✔ 1分以内" : "✘ 1分超過";
    }
    evalMsg += " / ";
    evalMsg += rate >= 65 ? "✔ 正答率65%以上" : "✘ 正答率未達";
    document.getElementById("evalText").textContent = evalMsg;

    // === 履歴保存 ===
    let source = "";
    if (fileInput && fileInput.files && fileInput.files[0]) {
        source = `local:${fileInput.files[0].name}`;
    } else {
        const selectedOption = fileSelect.options[fileSelect.selectedIndex];
        source = selectedOption ? selectedOption.textContent : currentFile;
    }
    appendHistoryEntry({
        ts: Date.now(),
        source,
        total,
        correct: correctCount,
        rate,
        elapsedMs,
        questionIds: currentQuestions.map((q) => q.id),
        items,
    });
    renderHistory();

    renderTrendChart();

    analyzeHistoryAndRender();

    resultArea.hidden = false;
    gradeArea.hidden = true;

    document.body.classList.add("graded");

    // === 不正解ジャンプ（固定・トグル） ===
    (() => {
        if (!wrongFixed || !toggleWrongBtn || !wrongPanel || !jumpWrongList) return;

        // 出題順に沿って不正解の位置を抽出
        wrongIdxes = [];
        items.forEach((it, i) => {
            if (!it.isCorrect) wrongIdxes.push(i);
        });

        // 不正解ゼロ → 固定ナビ非表示
        if (wrongIdxes.length === 0) {
            wrongFixed.classList.add("hidden");
            toggleWrongBtn.onclick = null;
            jumpWrongList.innerHTML = "";
            // 念のため閉じた状態に
            wrongPanel.classList.add("hidden");
            toggleWrongBtn.setAttribute("aria-expanded", "false");
            return;
        }

        // 不正解あり → 固定ナビ表示、トグルはデフォルト閉
        wrongFixed.classList.remove("hidden");
        wrongPanel.classList.add("hidden");
        toggleWrongBtn.setAttribute("aria-expanded", "false");

        // リストを再生成
        jumpWrongList.innerHTML = "";
        wrongIdxes.forEach((i) => {
            const qnum = i + 1;
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "jump-link";
            btn.textContent = `Q${qnum}`;
            btn.addEventListener("click", () => {
                // 位置同期しつつスクロール
                if (typeof currentQuestionIndex === "number") currentQuestionIndex = i;
                scrollToCardByIndex(i);
            });
            jumpWrongList.appendChild(btn);
        });

        // トグル（開閉）
        toggleWrongBtn.onclick = () => {
            const isHiddenNow = wrongPanel.classList.toggle("hidden"); // toggle後の状態を確認
            const expanded = !isHiddenNow;
            toggleWrongBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
        };
    })();
}

// スクロール関数（上に少し余白を残す）
function smoothScrollToCard(card) {
    const rect = card.getBoundingClientRect();
    const y = window.scrollY + rect.top - 12; // ← ほんの少し上に余白
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
}

// --- 問題ロード ---
async function loadAllQuestions(forceKey = null) {
    let data;

    // ★ forceKey 指定時はローカルファイルを無視して、指定キーの内蔵/サーバを読む
    if (forceKey) {
        const builtin = (window.BUILTIN_QUESTION_SETS || {})[forceKey];
        if (builtin) {
            data = builtin;
        } else {
            const res = await fetch("json/" + forceKey, { cache: "no-store" });
            if (!res.ok) throw new Error(`問題の取得に失敗しました: ${res.status}`);
            data = await res.json();
        }
    } else if (fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];
        const text = await file.text();
        data = JSON.parse(text);
    } else {
        // 2) 内蔵データ（questions_data.js）にあるならそれを使用
        const builtin = (window.BUILTIN_QUESTION_SETS || {})[currentFile || "ALL"];
        if (builtin) {
            data = builtin;
        } else {
            // 3) 最後の手段：従来どおりサーバからJSONをfetch（後方互換）
            const res = await fetch("json/" + currentFile, {
                cache: "no-store",
            });
            if (!res.ok) throw new Error(`問題の取得に失敗しました: ${res.status}`);
            data = await res.json();
        }
    }

    // === ここから下は既存のまま（複数ブロック/単一/旧形式に対応） ===
    let merged = [];

    if (Array.isArray(data)) {
        // [{prefix:"KS01",questions:[...]}, {prefix:"KS02",questions:[...]}]
        data.forEach((block) => {
            const basePrefix = block.prefix || "ZZ00";
            const fullPrefix = block.part ? `${basePrefix}_${block.part}` : basePrefix;
            const questions = block.questions || [];
            validateQuestions(questions, fullPrefix);
            // メタ（後工程で使えるように保持）
            questions.forEach((q) => {
                q.prefixBase = basePrefix; // "1Z0-815-JPN"
                q.part = block.part ?? null; // "01" など（なければ null）
                q.fullPrefix = fullPrefix; // "1Z0-815-JPN_01"
            });
            merged = merged.concat(questions);
        });
    } else if (data.questions && data.prefix) {
        // {prefix:"KS01",questions:[...]}
        const prefix = data.prefix || "ZZ00";
        const questions = data.questions || [];
        validateQuestions(questions, prefix);
        merged = questions;
    } else if (Array.isArray(data)) {
        // 旧形式（単なる配列）
        validateQuestions(data, "ZZ00");
        merged = data;
    } else {
        throw new Error("不正なJSON形式です");
    }

    allQuestions = merged;

    refreshOrderRangeBounds();
}

function countQuestionsInBuiltinSet(key) {
    const store = window.BUILTIN_QUESTION_SETS || {};
    const data = store[key];
    if (!data) return null;

    // {prefix, questions} 形式
    if (data && Array.isArray(data.questions)) return data.questions.length;

    // 複数ブロック [{prefix, questions}, ...]
    if (Array.isArray(data)) {
        let total = 0;
        for (const block of data) {
            if (block && Array.isArray(block.questions)) total += block.questions.length;
            // 念のため旧形式(配列)も加算
            else if (Array.isArray(block)) total += block.length;
        }
        return total;
    }
    return null;
}

function updateSelectedFileCount() {
    // ローカルファイル選択中は件数表示を消す（読み込んでみないと分からないため）
    if (fileInput.files && fileInput.files[0]) {
        fileCountEl.textContent = "";
        return;
    }
    const key = fileSelect.value;
    const cnt = countQuestionsInBuiltinSet(key);

    if (typeof cnt !== "number") {
        fileCountEl.textContent = "";
        return;
    }

    // --- 未出題件数を算出 ---
    const store = window.BUILTIN_QUESTION_SETS || {};
    const data = store[key];
    let questions = [];
    if (Array.isArray(data)) {
        for (const block of data) {
            if (Array.isArray(block.questions)) questions.push(...block.questions);
        }
    } else if (data && Array.isArray(data.questions)) {
        questions = data.questions;
    }

    const seenSet = getSeenIdSetFromHistory();
    const unseenCount = questions.filter((q) => !seenSet.has(q.id)).length;

    // --- 表示を更新 ---
    fileCountEl.textContent = `（全 ${cnt} 問 / 未出題 ${unseenCount} 問）`;
}

// 旧 validateQuestions を丸ごと置き換え
function validateQuestions(data, prefix = "ZZ00") {
    if (!Array.isArray(data)) {
        throw new Error("問題ファイルは配列である必要があります");
    }

    // ID生成: プレフィックスはフリーフォーマットをそのまま使用
    const makeId = (pf, i) => {
        const p = (pf ?? "").toString().trim();
        const head = p.length ? p : "ZZ00"; // 空or未指定ならフォールバック
        return `${head}-${String(i + 1).padStart(3, "0")}`;
    };

    data.forEach((q, i) => {
        // ===== ID の正規化 =====
        // 1) 未設定 → prefix + 連番 例: "<自由形式>-001"
        // 2) 数値のみ → 同上（既存データ互換）
        // 3) 文字列で既にIDがある → そのまま尊重（形式チェックしない）
        if (typeof q.id === "undefined" || /^\d+$/.test(String(q.id))) {
            q.id = makeId(prefix, i);
        } else {
            // 何もしない：フリーフォーマットIDを尊重
            q.id = String(q.id);
        }

        // ===== 質問/選択肢チェック =====
        if (typeof q.question !== "string" || !Array.isArray(q.choices) || q.choices.length < 1) {
            throw new Error(`不正な問題形式があります (index: ${i})`);
        }

        // ===== answerIndex を配列化（完全一致型・複数対応）=====
        let ans = q.answerIndex;
        if (typeof ans === "number") ans = [ans];
        if (!Array.isArray(ans)) {
            throw new Error(`answerIndex は数値または数値配列である必要があります (index: ${i})`);
        }
        const uniq = [...new Set(ans.map(Number))];
        if (uniq.length === 0) throw new Error(`answerIndex が空です (index: ${i})`);
        const bad = uniq.find((v) => !Number.isInteger(v) || v < 0 || v >= q.choices.length);
        if (bad !== undefined)
            throw new Error(`answerIndex に不正な値があります: ${bad} (id: ${q.id}, index: ${i})`);
        q.answerIndex = uniq;

        // 任意メタの型だけ軽く整える
        if (q.category != null) q.category = String(q.category);
        if (q.difficulty != null) q.difficulty = String(q.difficulty);
    });
}

// 出題選択 ===
function pickQuestions(n) {
    const mode = orderModeEl ? orderModeEl.value : "random";

    // --- 番号順：from–to をそのまま返す（出題数 n は無視） ---
    if (mode === "ordered" && Array.isArray(allQuestions) && orderFromEl && orderToEl) {
        const max = allQuestions.length;
        let from = parseInt(orderFromEl.value || "1", 10);
        let to = parseInt(orderToEl.value || String(max), 10);
        if (!Number.isFinite(from)) from = 1;
        if (!Number.isFinite(to)) to = max;
        from = Math.max(1, Math.min(max, from));
        to = Math.max(1, Math.min(max, to));
        if (from > to) [from, to] = [to, from];
        return allQuestions.slice(from - 1, to);
    }

    // --- ランダム：既存ロジック（未出題優先 → 補完ランダム/弱点優先） ---
    const cnt = Math.min(n, allQuestions.length);
    const useAdaptive = adaptiveModeEl ? adaptiveModeEl.checked : false;

    const seenSet = getSeenIdSetFromHistory();
    const unseen = allQuestions.filter((q) => !seenSet.has(q.id));
    const picked = [];

    if (unseen.length > 0) {
        if (unseen.length >= cnt) return shuffle(unseen).slice(0, cnt);
        picked.push(...shuffle(unseen));
    }

    const remain = cnt - picked.length;
    if (remain <= 0) return picked.slice(0, cnt);

    const seenPool = allQuestions.filter((q) => seenSet.has(q.id) && !picked.includes(q));

    if (useAdaptive && loadHistory().length > 0) {
        const rateMap = buildRateMapFromHistory();
        const strength = Number(adaptiveStrengthEl?.value ?? 1.0);
        const weights = seenPool.map((q) => rateToWeight(rateMap.get(q.id), strength));
        const sampled = weightedSampleWithoutReplacement(seenPool, weights, remain);
        picked.push(...sampled);
    } else {
        picked.push(...shuffle(seenPool).slice(0, remain));
    }
    return picked.slice(0, cnt);
}

function resetState() {
    currentQuestions = [];
    userAnswers.clear();
    quizArea.innerHTML = "";
    resultArea.hidden = true;
    scoreText.textContent = "";
    explanationsEl.innerHTML = "";
    gradeBtn.disabled = true;
    resetBtn.disabled = true;
}

function letter(idx) {
    return String.fromCharCode(65 + idx);
}

function escapeHtml(str) {
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function formatExplanationHtml(explanation) {
    if (!explanation) return "";
    const text = String(explanation);

    // ```lang\n ... ``` を <pre><code> に変換（複数対応）
    const fenceRegex = /```(?:\w+)?\n([\s\S]*?)```/g;
    if (fenceRegex.test(text)) {
        return text
            .replace(fenceRegex, (_, code) => {
                return `<pre><code>${escapeHtml(code)}</code></pre>`;
            })
            .split(fenceRegex)
            .map((part) => {
                // プレーンテキスト部分もエスケープ
                return part ? `<p>${escapeHtml(part).replace(/\n/g, "<br>")}</p>` : "";
            })
            .join("");
    }

    // フェンスがなければプレーンテキストとして表示（\n→<br>に変換）
    return `<p>${escapeHtml(text).replace(/\n/g, "<br>")}</p>`;
}

// --- イベント ---
loadBtn.addEventListener("click", async () => {
    try {
        if (wrongFixed) wrongFixed.classList.add("hidden");
        if (wrongPanel) wrongPanel.classList.add("hidden");

        resetState();
        setStatus("問題を読み込み中…", 0);
        await loadAllQuestions();

        const mode = orderModeEl ? orderModeEl.value : "random";
        let n = ensureNumber(countInput.value, 1);
        if (mode === "random") {
            if (n < 1) {
                setStatus("出題数は1以上を指定してください");
                return;
            }
            if (allQuestions.length === 0) {
                setStatus("登録された問題がありません");
                return;
            }
            if (n > allQuestions.length) {
                setStatus(`出題数が多すぎます（最大 ${allQuestions.length}）`);
            }
        } else {
            // 番号順：範囲を整えるだけ
            clampOrderInputs();
        }

        currentQuestions = pickQuestions(n);
        renderQuiz(currentQuestions);
        currentQuestionIndex = 0;

        setTimeout(() => {
            currentQuestionIndex = 0; // 現在位置をQ1にリセット
            scrollToCardByIndex(0); // 共通スクロール関数で移動
        }, 100);

        setStatus(
            `全 ${allQuestions.length}問中から ${currentQuestions.length}問を出題しました`,
            3000
        );
        resetBtn.disabled = false;
        validateAllAnswered();
        gradeArea.hidden = false;

        startTimer();
    } catch (e) {
        console.error(e);
        setStatus(`エラー: ${e.message || e}`);
    }
});

// ====== 履歴（localStorage） ======
const LS_KEY = "quizHistory.v1";

// 履歴の読み書き
function loadHistory() {
    try {
        const raw = localStorage.getItem(LS_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function saveHistory(history) {
    localStorage.setItem(LS_KEY, JSON.stringify(history));
}

// 1件追加保存
function appendHistoryEntry(entry) {
    const hist = loadHistory();
    hist.unshift(entry); // 新しい順に先頭へ
    // 任意：上限（例：200件）
    if (hist.length > 200) hist.length = 200;
    saveHistory(hist);
}

// 履歴の描画
const historyList = document.getElementById("historyList");
const refreshHistoryBtn = document.getElementById("refreshHistoryBtn");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");
const exportHistoryBtn = document.getElementById("exportHistoryBtn");
const importHistoryBtn = document.getElementById("importHistoryBtn");
const importHistoryInput = document.getElementById("importHistoryInput");

let historyPage = 1;
const PAGE_SIZE = 3;

function renderHistory() {
    const hist = loadHistory();
    const totalPages = Math.ceil(hist.length / PAGE_SIZE);
    const start = (historyPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const pageHist = hist.slice(start, end);

    const historyList = document.getElementById("historyList");
    historyList.innerHTML = "";

    if (hist.length === 0) {
        historyList.innerHTML = '<p class="sub">履歴はまだありません。</p>';
        return;
    }

    // 履歴アイテムを描画
    pageHist.forEach((h, idx) => {
        const div = document.createElement("div");
        div.className = "history-item";

        const head = document.createElement("div");
        head.className = "history-head";
        const title = document.createElement("h3");
        title.textContent = `#${String(hist.length - (start + idx)).padStart(2, "0")}`;
        head.appendChild(title);

        // ★ 追加：正答率のプログレスバー
        const prog = document.createElement("div");
        prog.className = "history-progress";
        // ミニトラック & フィル & 値
        prog.innerHTML = `
            <div class="mini-val">${h.correct}/${h.total} (${h.rate}%)</div>
            <div class="mini-track" role="progressbar"
                aria-label="正答率"
                aria-valuemin="0" aria-valuemax="100"
                aria-valuenow="${h.rate}">
                <div class="mini-fill" style="width:${h.rate}%"></div>
            </div>
        `;
        // 色は正答率に応じて（赤→緑）既存関数で動的設定
        const fillEl = prog.querySelector(".mini-fill");
        if (fillEl && typeof rateToColor === "function") {
            fillEl.style.background = rateToColor(h.rate);
        }
        head.appendChild(prog);
        div.appendChild(head);

        const src = document.createElement("div");
        src.className = "history-meta";
        src.textContent = h.source ? `${h.source}` : "";
        div.appendChild(src);

        const meta = document.createElement("div");
        meta.className = "history-meta";
        const d = new Date(h.ts);
        meta.innerHTML = `
            <span>${d.toLocaleString()}</span>
            <span>出題数: ${h.total}</span>
            <span>所要時間: ${
                typeof h.elapsedMs === "number" ? Math.round(h.elapsedMs / 1000) + "s" : "-"
            }</span>
        `;
        div.appendChild(meta);

        if (Array.isArray(h.items) && h.items.length) {
            const details = document.createElement("details");
            details.className = "history-details";
            const sum = document.createElement("summary");
            sum.textContent = "詳細を表示";
            details.appendChild(sum);

            const tbl = document.createElement("table");
            tbl.className = "history-table";
            tbl.innerHTML = `
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>正解</th>
                  <th>回答</th>
                  <th>判定</th>
                </tr>
              </thead>
              <tbody></tbody>`;
            const tbody = tbl.querySelector("tbody");
            h.items.forEach((it, i) => {
                const tr = document.createElement("tr");
                tr.className = it.isCorrect ? "row-ok" : "row-ng";
                const correctLetters = it.correct.map(letter).join(", ");
                const userLetters = it.user.length ? it.user.map(letter).join(", ") : "未回答";
                tr.innerHTML = `
                  <td>${i + 1}</td>
                  <td>
                    <span class="qid-link" data-qid="${it.id}" title="クリックで問題を表示">
                      ${it.id}
                    </span>
                  </td>
                  <td>${correctLetters}</td>
                  <td>${userLetters}</td>
                  <td>${it.isCorrect ? "○" : "×"}</td>`;
                tbody.appendChild(tr);
            });
            details.appendChild(tbl);

            div.appendChild(details);
        }

        historyList.appendChild(div);
    });

    // === ページネーション ===
    const pager = document.createElement("div");
    pager.className = "pager";
    pager.style.marginTop = "10px";
    pager.style.textAlign = "center";

    const prevBtn = document.createElement("button");
    prevBtn.textContent = "← 前へ";
    prevBtn.disabled = historyPage <= 1;
    prevBtn.addEventListener("click", () => {
        historyPage--;
        renderHistory();
    });

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "次へ →";
    nextBtn.disabled = historyPage >= totalPages;
    nextBtn.addEventListener("click", () => {
        historyPage++;
        renderHistory();
    });

    const info = document.createElement("span");
    info.textContent = ` ${historyPage} / ${totalPages} ページ `;
    info.style.margin = "0 8px";

    pager.appendChild(prevBtn);
    pager.appendChild(info);
    pager.appendChild(nextBtn);
    historyList.appendChild(pager);
}

// ボタン：再読込・全削除
if (refreshHistoryBtn) {
    refreshHistoryBtn.addEventListener("click", () => renderHistory());
}
if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", () => {
        if (confirm("履歴をすべて削除します。よろしいですか？")) {
            saveHistory([]);
            renderHistory();
            renderTrendChart();
            analyzeHistoryAndRender();
        }
    });
}

// ★ エクスポート
if (exportHistoryBtn) {
    exportHistoryBtn.addEventListener("click", exportHistory);
}

// ★ インポート（ボタン→ファイル選択を開く）
if (importHistoryBtn && importHistoryInput) {
    importHistoryBtn.addEventListener("click", () => importHistoryInput.click());
    importHistoryInput.addEventListener("change", () => {
        const f = importHistoryInput.files?.[0];
        if (f) importHistoryFromFile(f);
        // 同じファイルを続けて読み込めるように値リセット
        importHistoryInput.value = "";
    });
}

// 出題開始時間（経過計測用）
let quizStartAt = null;

// loadBtn の CLICK ハンドラ内の成功時に追加
// （currentQuestions = pickQuestions(n); の後あたり）
quizStartAt = Date.now();

gradeBtn.addEventListener("click", () => {
    stopTimer();

    markAnswers();
    showResults();
    setStatus("採点しました", 3000);

    window.scrollTo({
        top: 0,
        behavior: "smooth", // スムーズスクロール
    });
});

resetBtn.addEventListener("click", () => {
    stopTimer();

    if (wrongFixed) wrongFixed.classList.add("hidden");
    if (wrongPanel) wrongPanel.classList.add("hidden");

    resetState();
    setStatus("リセットしました", 1500);
    gradeArea.hidden = true;
    document.body.classList.remove("graded");
});

let timerId = null;

function startTimer() {
    quizStartAt = Date.now();
    timerEl.textContent = "経過時間: 0分0秒";
    timerId = setInterval(() => {
        const elapsedMs = Date.now() - quizStartAt;
        const sec = Math.floor(elapsedMs / 1000) % 60;
        const min = Math.floor(elapsedMs / 60000);
        timerEl.textContent = `経過時間: ${min}分${sec}秒`;
    }, 1000);
}

function stopTimer() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }
}

// ===== 問題別分析 =====
const lowRateInput = document.getElementById("lowRateThreshold");
const analysisTableWrap = document.getElementById("analysisTableWrap");
const rankTopEl = document.getElementById("rankTop");
const rankBottomEl = document.getElementById("rankBottom");
const barChartEl = document.getElementById("barChart");
const heatmapEl = document.getElementById("heatmap");
const analyzeBtn = document.getElementById("analyzeBtn");

function gatherStatsFromHistory() {
    const hist = loadHistory();
    const stats = new Map(); // id -> { id, total, correct }

    hist.forEach((run) => {
        if (!Array.isArray(run.items)) return;
        run.items.forEach((it) => {
            if (!stats.has(it.id)) stats.set(it.id, { id: it.id, total: 0, correct: 0 });
            const s = stats.get(it.id);
            s.total += 1;
            if (it.isCorrect) s.correct += 1;
        });
    });

    // rate付与して配列化
    const arr = [...stats.values()].map((s) => ({
        ...s,
        rate: s.total ? Math.round((s.correct / s.total) * 100) : 0,
    }));
    // 表示用にID昇順で基本ソート
    arr.sort((a, b) => a.id.localeCompare(b.id));
    return arr;
}

// rate(0-100) -> 色（低い=赤、高い=緑）HSL補間
function rateToColor(rate) {
    const h = (rate / 100) * 120; // 0=赤, 120=緑
    return `hsl(${h} 70% 45%)`;
}

function renderAnalysisTable(rows, lowThreshold) {
    if (rows.length === 0) {
        analysisTableWrap.innerHTML = "<p class='sub'>履歴がありません。</p>";
        return;
    }

    let html =
        "<table id='analysisTable'><thead><tr><th>ID</th><th>出題回数</th><th>正解数</th><th>正答率</th></tr></thead><tbody>";

    rows.forEach((r) => {
        const low = r.rate < lowThreshold;
        html += `
        <tr class="${low ? "tr-low" : ""}">
            <td>
                <span class="qid-link" data-qid="${r.id}" title="クリックで問題を表示">
                    ${r.id}
                </span>
            </td>
            <td>${r.total}</td>
            <td>${r.correct}</td>
            <td class="td-rate ${low ? "bad" : ""}">${r.rate}%</td>
        </tr>`;
    });

    html += "</tbody></table>";
    analysisTableWrap.innerHTML = html;
}

function renderRanking(rows) {
    const byRateDesc = [...rows].sort(
        (a, b) => b.rate - a.rate || b.total - a.total || a.id.localeCompare(b.id)
    );
    const byRateAsc = [...rows].sort(
        (a, b) => a.rate - b.rate || b.total - a.total || a.id.localeCompare(b.id)
    );

    const topN = byRateDesc.slice(0, 10);
    const bottomN = byRateAsc.slice(0, 10);

    rankTopEl.innerHTML =
        topN
            .map(
                (r) => `
                <li>
                    <span class="qid-link" data-qid="${r.id}" title="クリックで問題を表示">
                        ${r.id}
                    </span>
                    — ${r.rate}%（${r.correct}/${r.total}）
                </li>`
            )
            .join("") || '<li class="sub">データなし</li>';

    rankBottomEl.innerHTML =
        bottomN
            .map(
                (r) => `
                <li>
                    <span class="qid-link" data-qid="${r.id}" title="クリックで問題を表示">
                        ${r.id}
                    </span>
                    — ${r.rate}%（${r.correct}/${r.total}）
                </li>`
            )
            .join("") || '<li class="sub">データなし</li>';
}

function renderBarChart(rows) {
    barChartEl.innerHTML = "";
    if (!rows.length) {
        barChartEl.innerHTML = '<p class="sub">データなし</p>';
        return;
    }
    // 横棒はID順（任意で rate順にしたい場合は sort を変えてOK）
    rows.forEach((r) => {
        const row = document.createElement("div");
        row.className = "bar-row";

        const label = document.createElement("div");
        label.classList.add("bar-label", "qid-link");
        label.textContent = r.id;
        label.title = "クリックで問題を表示";
        label.setAttribute("data-qid", r.id);

        const track = document.createElement("div");
        track.className = "bar-track";

        const fill = document.createElement("div");
        fill.className = "bar-fill";
        fill.style.width = `${r.rate}%`;
        fill.style.background = rateToColor(r.rate);

        const val = document.createElement("div");
        val.className = "bar-val";
        val.textContent = `${r.rate}%`;

        track.appendChild(fill);
        row.appendChild(label);
        row.appendChild(track);
        row.appendChild(val);
        barChartEl.appendChild(row);
    });
}

function renderHeatmap(rows) {
    heatmapEl.innerHTML = "";
    if (!rows.length) {
        heatmapEl.innerHTML = '<p class="sub">データなし</p>';
        return;
    }
    rows.forEach((r) => {
        const cell = document.createElement("div");
        cell.classList.add("hm-cell", "qid-link");
        cell.setAttribute("data-qid", r.id);
        const sw = document.createElement("div");
        sw.className = "hm-swatch";
        sw.style.background = rateToColor(r.rate);
        const label = document.createElement("div");
        label.className = "hm-label";
        label.textContent = r.id;
        label.title = "クリックで問題を表示";
        cell.title = `${r.id} — ${r.rate}%（${r.correct}/${r.total}）`;
        cell.appendChild(sw);
        cell.appendChild(label);
        heatmapEl.appendChild(cell);
    });
}

function analyzeHistoryAndRender() {
    const lowThreshold = Number(lowRateInput?.value ?? 50);
    const rows = gatherStatsFromHistory();

    // ▼ ヒートマップ用フィルタ UI を更新
    populateHeatmapFilter(rows);
    const filtered = filterRowsByBasePrefix(rows);

    renderAnalysisTable(rows, lowThreshold);
    renderRanking(rows);
    renderBarChart(rows);
    renderHeatmap(filtered);
    renderPrefixStats();
}

// 候補の投入（"すべて" + 観測された basePrefix を列挙）
function populateHeatmapFilter(rows) {
    const sel = document.getElementById("heatmapFilter");
    if (!sel) return;
    const before = sel.value; // ユーザーの選択維持
    const set = new Set(rows.map((r) => extractBasePrefix(r.id)));
    const vals = ["", ...[...set].sort()]; // ""=すべて
    sel.innerHTML = vals
        .map((v) => {
            const label = v || "すべて";
            const selected = v === before ? " selected" : "";
            return `<option value="${v}"${selected}>${PREFIX_LABELS[label] || label}</option>`;
        })
        .join("");
    // 初回は空→すべて
    if (!sel.value) sel.value = "";
    sel.onchange = () => analyzeHistoryAndRender(); // 変更で再描画
}

// 実データの絞り込み
function filterRowsByBasePrefix(rows) {
    const sel = document.getElementById("heatmapFilter");
    const v = sel?.value || "";
    if (!v) return rows; // すべて
    return rows.filter((r) => extractBasePrefix(r.id) === v);
}

// ===== プレフィックス別 集計 =====
// 例: KS01-001 → 'KS01' を取り出す
function extractPrefix(id) {
    if (!id) return "";
    const str = String(id);
    const lastHyphen = str.lastIndexOf("-");
    // ハイフンがあれば、最後のハイフンより前をプレフィックスとみなす
    return lastHyphen > 0 ? str.slice(0, lastHyphen) : str;
}

// 例: "1Z0-815-JPN_01-001" → "1Z0-815-JPN"
function extractBasePrefix(id) {
    const pf = extractPrefix(id); // "1Z0-815-JPN_01"
    const us = pf.indexOf("_");
    return us > 0 ? pf.slice(0, us) : pf; // "_" があれば左側だけ
}

function gatherPrefixStatsFromHistory() {
    const hist = loadHistory();
    const stats = new Map(); // prefix -> { prefix, total, correct }

    hist.forEach((run) => {
        if (!Array.isArray(run.items)) return;
        run.items.forEach((it) => {
            const pf = extractPrefix(it.id);
            if (!pf) return;
            if (!stats.has(pf)) stats.set(pf, { prefix: pf, total: 0, correct: 0 });
            const s = stats.get(pf);
            s.total += 1;
            if (it.isCorrect) s.correct += 1;
        });
    });

    const arr = [...stats.values()].map((s) => ({
        ...s,
        rate: s.total ? Math.round((s.correct / s.total) * 100) : 0,
    }));
    // プレフィックス順に並べる（KS01, KS02, …）
    arr.sort((a, b) => a.prefix.localeCompare(b.prefix));
    return arr;
}

function renderPrefixStats() {
    const wrap = document.getElementById("prefixStatsWrap");
    if (!wrap) return;

    const rows = gatherPrefixStatsFromHistory();
    if (!rows.length) {
        wrap.innerHTML = "<p class='sub'>履歴がありません。</p>";
        return;
    }

    let html = `
        <table id="prefixTable">
            <thead>
                <tr>
                    <th>カテゴリ</th>
                    <th>出題回数</th>
                    <th>正解数</th>
                    <th>正答率</th>
                </tr>
            </thead>
            <tbody>
    `;

    rows.forEach((r) => {
        html += `
            <tr>
                <td class="prefix-stats-label">${PREFIX_LABELS[r.prefix] || r.prefix}</td>
                <td>${r.total}</td>
                <td>${r.correct}</td>
                <td>
                    <div class="mini-track" aria-hidden="true">
                        <div class="mini-fill" style="width:${r.rate}%"></div>
                    </div>
                    <div class="mini-val">${r.rate}%</div>
                </td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    wrap.innerHTML = html;
}

// 初期描画・イベント
analyzeHistoryAndRender();
if (analyzeBtn) analyzeBtn.addEventListener("click", analyzeHistoryAndRender);
if (lowRateInput) lowRateInput.addEventListener("change", analyzeHistoryAndRender);

// 採点直後にも更新
// （既存の showResults() の最後に renderHistory() の直後でOK）

// === 追加：履歴からID別の正答率を取り出す（0〜100） ===
function buildRateMapFromHistory() {
    const hist = loadHistory(); // 既存：localStorageから履歴取得
    const totals = new Map(); // id -> 出題回数
    const rights = new Map(); // id -> 正解数
    hist.forEach((run) => {
        if (!Array.isArray(run.items)) return;
        run.items.forEach((it) => {
            totals.set(it.id, (totals.get(it.id) || 0) + 1);
            rights.set(it.id, (rights.get(it.id) || 0) + (it.isCorrect ? 1 : 0));
        });
    });
    const rates = new Map(); // id -> 正答率(%)
    totals.forEach((t, id) => {
        const r = rights.get(id) || 0;
        rates.set(id, Math.round((r / t) * 100));
    });
    return rates;
}

// === 追加：重み関数（低い正答率ほど大きな重み） ===
// base=1.0, strength=0〜2.0 くらい推奨
function rateToWeight(rate, strength = 1.0) {
    // 未出題(= rate undefined)は等確率で 1.0
    if (rate === undefined || rate === null || Number.isNaN(rate)) return 1.0;
    // 0%→(1+strength), 100%→1.0 に線形で補間
    const w = 1.0 + strength * (1 - rate / 100);
    // 念のため下限・上限
    return Math.max(0.1, Math.min(w, 1.0 + strength));
}

// === 追加：重み付きサンプリング（非復元・n件） ===
function weightedSampleWithoutReplacement(items, weights, k) {
    const picked = [];
    const pool = items.map((v, i) => ({ v, w: weights[i], i }));
    k = Math.min(k, pool.length);
    for (let t = 0; t < k; t++) {
        const totalW = pool.reduce((s, x) => s + x.w, 0);
        if (totalW <= 0) break;
        let r = Math.random() * totalW;
        let idx = 0;
        for (; idx < pool.length; idx++) {
            r -= pool[idx].w;
            if (r <= 0) break;
        }
        const chosen = pool.splice(idx, 1)[0];
        picked.push(chosen.v);
    }
    return picked;
}

// 履歴から既に出題された問題IDの集合を作る
function getSeenIdSetFromHistory() {
    const hist = loadHistory();
    const set = new Set();
    hist.forEach((h) => {
        if (Array.isArray(h.questionIds)) {
            h.questionIds.forEach((id) => set.add(id));
        }
    });
    return set;
}

// ====== 正答率トレンド（直近20回） ======
function getLastNRuns(n = 20) {
    const hist = loadHistory(); // 既存: localStorage から
    return hist.slice(0, n).reverse(); // 新→旧で保存しているので逆順にして古→新へ
}

// ====== 正答率トレンド（直近20回 + 合格ライン + 移動平均 + 秒/問の二軸） ======
function getLastNRuns(n = 20) {
    const hist = loadHistory();
    return hist.slice(0, n).reverse(); // 古→新の順に
}

function movingAverage(arr, win = 5) {
    if (win <= 1) return [...arr];
    const out = [];
    for (let i = 0; i < arr.length; i++) {
        const s = Math.max(0, i - win + 1);
        const slice = arr.slice(s, i + 1);
        const avg = slice.reduce((a, b) => a + b, 0) / slice.length;
        out.push(Math.round(avg * 10) / 10);
    }
    return out;
}

function renderTrendChart() {
    const host = document.getElementById("trendChart");
    if (!host) return;

    const runs = getLastNRuns(20);
    if (!runs.length) {
        host.innerHTML = `<p class="sub">履歴がありません。</p>`;
        return;
    }

    // ---- データ整形 ----
    const xs = runs.map((_, i) => i); // 0..n-1
    const rate = runs.map((r) => Number(r.rate || 0)); // 正答率(%)
    const ma = movingAverage(rate, 5); // 5回移動平均
    const secPerQ = runs.map((r) => {
        const per = r.elapsedMs && r.total ? r.elapsedMs / 1000 / r.total : null;
        return per ?? 0;
    });

    // ---- SVG座標系 ----
    const W = 860,
        H = 260;
    const padL = 42,
        padR = 44,
        padT = 12,
        padB = 30; // 右に第2軸ラベル余白
    const iw = W - padL - padR;
    const ih = H - padT - padB;

    // xスケール
    const n = xs.length;
    const xStep = n > 1 ? iw / (n - 1) : 0;
    const X = (i) => padL + i * xStep;

    // yスケール（左軸＝正答率 0..100）
    const Y = (v) => padT + (100 - Math.max(0, Math.min(100, v))) * (ih / 100);

    // y2スケール（右軸＝秒/問）
    const maxSec = Math.max(60, Math.ceil(Math.max(...secPerQ) / 10) * 10); // 少なくとも60s
    const Y2 = (sec) => padT + (1 - Math.max(0, Math.min(maxSec, sec)) / maxSec) * ih;

    // ポリライン座標
    const ptsRate = rate.map((v, i) => `${X(i)},${Y(v)}`).join(" ");
    const ptsMA = ma.map((v, i) => `${X(i)},${Y(v)}`).join(" ");
    const ptsTime = secPerQ.map((v, i) => `${X(i)},${Y2(v)}`).join(" ");

    // グリッド（左軸：0,20,40,60,80,100）
    const gridYVals = [0, 20, 40, 60, 80, 100];

    // 63%合格ライン
    const pass = 63;
    const passY = Y(pass);

    // 軸ラベル用（右軸：0, maxSec/2, maxSec）
    const rightTicks = [0, Math.round(maxSec / 2), maxSec];

    const svg = `
        <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="正答率推移と所要時間">
            <rect x="0" y="0" width="${W}" height="${H}" fill="#fff"/>

            <!-- 左グリッド＆ラベル（正答率%） -->
            ${gridYVals
                .map(
                    (v) => `
                    <line x1="${padL}" y1="${Y(v)}" x2="${W - padR}" y2="${Y(v)}" stroke="#eee"/>
                    <text x="${padL - 6}" y="${
                        Y(v) + 4
                    }" text-anchor="end" font-size="10" fill="#666">${v}%</text>
                `
                )
                .join("")}

            <!-- X軸 -->
            <line x1="${padL}" y1="${H - padB}" x2="${W - padR}" y2="${H - padB}" stroke="#ddd"/>

            <!-- 合格ライン 63% -->
            <line x1="${padL}" y1="${passY}" x2="${
        W - padR
    }" y2="${passY}" stroke="#dc2626" stroke-dasharray="6,6"/>
            <text x="${W - padR + 2}" y="${passY + 4}" font-size="10" fill="#dc2626">63%</text>

            <!-- 折れ線（正答率） -->
            <polyline points="${ptsRate}" fill="none" stroke="var(--primary)" stroke-width="2"/>

            <!-- 移動平均（正答率） -->
            <polyline points="${ptsMA}" fill="none" stroke="#888" stroke-width="2" stroke-dasharray="4,3"/>

            <!-- データ点（正答率） -->
            ${rate
                .map(
                    (v, i) => `
                    <circle cx="${X(i)}" cy="${Y(v)}" r="3.5" fill="var(--primary)">
                        <title>${i + 1}回目: ${v}%</title>
                    </circle>
                `
                )
                .join("")}

            <!-- 秒/問（右軸） -->
            <polyline points="${ptsTime}" fill="none" stroke="#16a34a" stroke-width="2" opacity="0.9"/>
            ${secPerQ
                .map(
                    (v, i) => `
                    <circle cx="${X(i)}" cy="${Y2(v)}" r="3.5" fill="#16a34a">
                        <title>${i + 1}回目: ${v.toFixed(1)} 秒/問</title>
                    </circle>
                `
                )
                .join("")}

            <!-- 右軸ラベル（秒/問） -->
            ${rightTicks
                .map(
                    (t) => `
                    <text x="${W - padR + 2}" y="${
                        Y2(t) + 4
                    }" font-size="10" fill="#666">${t}s</text>
                `
                )
                .join("")}
        </svg>

        <div class="trend-legend">
            <span><i class="legend-chip legend-rate"></i>正答率</span>
            <span><i class="legend-chip legend-ma"></i>移動平均(5)</span>
            <span><i class="legend-chip legend-time"></i>秒/問（右軸）</span>
            <span><i class="legend-chip legend-pass"></i>合格ライン63%</span>
        </div>
    `;

    host.innerHTML = svg;
}

// ===== モーダル：問題詳細を表示（解答トグル付き） =====
function openQuestionModalById(qid) {
    if (!qid || !Array.isArray(allQuestions) || allQuestions.length === 0) return;
    const q = allQuestions.find((x) => String(x.id) === String(qid));
    if (!q) {
        setStatus?.(`問題ID ${qid} が見つかりません`, 2500);
        return;
    }

    // 質問テキストとコードを整形（renderQuizと同等のロジックの簡易版）
    const qTextParts = [];
    if (q.code && q.code.trim()) {
        if (q.question) qTextParts.push(`<p>${escapeHtml(q.question)}</p>`);
        qTextParts.push(`<pre><code>${escapeHtml(q.code)}</code></pre>`);
    } else if (typeof q.question === "string") {
        const fence = /```(?:\w+)?\n([\s\S]*?)```/m;
        const m = q.question.match(fence);
        if (m) {
            const before = q.question.slice(0, m.index).trim();
            const after = q.question.slice(m.index + m[0].length).trim();
            if (before) qTextParts.push(`<p>${escapeHtml(before)}</p>`);
            qTextParts.push(`<pre><code>${escapeHtml(m[1])}</code></pre>`);
            if (after) qTextParts.push(`<p>${escapeHtml(after)}</p>`);
        } else {
            qTextParts.push(`<p>${escapeHtml(q.question)}</p>`);
        }
    }
    const qtextHtml = qTextParts.join("");

    // 選択肢 A/B/C… を列挙（作問順のまま）
    const choicesHtml = (q.choices || [])
        .map((c, i) => {
            return `<li><strong>${letter(i)}.</strong> ${c}</li>`;
        })
        .join("");

    // 正解（複数対応）
    const correct = Array.isArray(q.answerIndex) ? q.answerIndex : [q.answerIndex];
    const correctLetters = correct.map(letter).join(", ");

    // 解説（フェンスは既存関数で整形）
    const explanationHtml = formatExplanationHtml(q.explanation);

    // モーダルDOM
    const $overlay = document.createElement("div");
    $overlay.className = "modal-overlay";
    $overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="qmodal-title">
      <button class="modal-close" aria-label="閉じる">&times;</button>
      <h3 id="qmodal-title" class="modal-title">問題 ${escapeHtml(q.id)}</h3>
      <div class="modal-body">
        <div class="qtext">${qtextHtml}</div>
        <ul class="qchoices">${choicesHtml}</ul>
        <div style="margin-top:10px">
          <button class="answer-toggle" type="button" aria-expanded="false" aria-controls="answer-${escapeHtml(
              q.id
          )}">
            解答を表示
          </button>
          <div id="answer-${escapeHtml(q.id)}" class="answer-block" hidden>
            <div class="answer-meta">
              正解：
              <span class="answer-correct">${escapeHtml(correctLetters)}</span>
            </div>
            ${explanationHtml || "<p class='sub'>解説は未登録です。</p>"}
          </div>
        </div>
      </div>
    </div>`;

    // 閉じる
    const close = () => $overlay.remove();
    $overlay.addEventListener("click", (e) => {
        if (e.target === $overlay) close();
    });
    $overlay.querySelector(".modal-close")?.addEventListener("click", close);

    // 解答トグル
    const $btn = $overlay.querySelector(".answer-toggle");
    const $pane = $overlay.querySelector(".answer-block");
    $btn?.addEventListener("click", () => {
        const expanded = $btn.getAttribute("aria-expanded") === "true";
        const next = !expanded;
        $btn.setAttribute("aria-expanded", String(next));
        $btn.textContent = next ? "解答を隠す" : "解答を表示";
        if (next) {
            $pane.hidden = false;
            $pane.classList.add("show");
        } else {
            $pane.classList.remove("show");
            // CSSで display:none; に戻す
            $pane.hidden = true;
        }
    });

    document.body.appendChild($overlay);
}

// 問題ID（.qid-link）クリックでプレビュー表示
document.addEventListener("click", (e) => {
    const el = e.target.closest?.(".qid-link");
    if (!el) return;
    const qid = el.getAttribute("data-qid") || el.textContent?.trim();
    if (qid) {
        e.preventDefault();
        openQuestionModalById(qid);
    }
});

function showQuestionPreview(q) {
    // 既存の escapeHtml があればそれを、なければ簡易版を使う
    const esc = (s) =>
        typeof escapeHtml === "function"
            ? escapeHtml(String(s ?? ""))
            : String(s ?? "").replace(
                  /[&<>"']/g,
                  (m) =>
                      ({
                          "&": "&amp;",
                          "<": "&lt;",
                          ">": "&gt;",
                          '"': "&quot;",
                          "'": "&#39;",
                      }[m])
              );

    // 質問テキスト＋コード（q.codeがあれば別枠）
    let qHtml = "";
    if (q.question) qHtml += `<p>${esc(q.question)}</p>`;
    if (q.code) qHtml += `<pre><code>${esc(q.code)}</code></pre>`;

    // 選択肢（A/B/C…）
    const choiceHtml = (q.choices || [])
        .map((c, i) => `<li><strong>${String.fromCharCode(65 + i)}.</strong> ${c}</li>`)
        .join("");

    // モーダルDOM生成
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
        <div class="modal" role="dialog" aria-modal="true" aria-label="問題プレビュー">
            <button class="modal-close" aria-label="閉じる">×</button>
            <h3 class="modal-title">${esc(q.id)}</h3>
            <div class="modal-body">
                <div class="qtext">${qHtml || ""}</div>
                <ul class="qchoices">${choiceHtml}</ul>
            </div>
        </div>
    `;

    // 閉じる挙動
    const close = () => {
        document.removeEventListener("keydown", onKey);
        overlay.remove();
    };

    const onKey = (ev) => {
        if (ev.key === "Escape") close();
    };

    overlay.addEventListener("click", (ev) => {
        if (ev.target === overlay) close();
    });

    overlay.querySelector(".modal-close")?.addEventListener("click", close);
    document.addEventListener("keydown", onKey);

    // 表示
    document.body.appendChild(overlay);
}

// ==== 履歴のエクスポート/インポート ====

// ダウンロード用ユーティリティ
function downloadText(filename, text) {
    const blob = new Blob([text], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}

// エクスポート：現在の履歴配列をJSONで保存
function exportHistory() {
    const hist = loadHistory(); // 既存: localStorage → 配列
    const payload = {
        version: 1,
        exportedAt: new Date().toISOString(),
        items: hist,
    };
    const fname = `quizHistory_export_${new Date().toISOString().replace(/[:.]/g, "-")}.json`;
    downloadText(fname, JSON.stringify(payload, null, 2));
    setStatus("履歴をエクスポートしました", 2000);
}

// 取り込み：ファイルを読み、形式を検証してマージ
async function importHistoryFromFile(file) {
    if (!file) return;
    try {
        const text = await file.text();
        let data = JSON.parse(text);

        // 受け付ける形式：
        // 1) { version, items: [...] }
        // 2) 単なる配列 [...]
        const imported = Array.isArray(data) ? data : Array.isArray(data.items) ? data.items : null;
        if (!imported) throw new Error("不正なJSON形式です（items配列が見つかりません）");

        // 軽いバリデーション（ts/total/correct/rate など最低限）
        const cleaned = imported.filter(
            (x) =>
                x &&
                typeof x === "object" &&
                typeof x.ts === "number" &&
                typeof x.total === "number" &&
                typeof x.correct === "number"
        );

        if (cleaned.length === 0) throw new Error("取り込める履歴エントリがありません");

        // 既存とマージ：ts＋questionIds＋rate 等を基準に簡易重複除去
        const current = loadHistory();
        const keyOf = (h) => `${h.ts}-${h.total}-${h.correct}-${h.rate ?? ""}-${h.source ?? ""}`;
        const map = new Map();
        [...current, ...cleaned].forEach((h) => {
            map.set(keyOf(h), h);
        });

        // 新しい順にソートし、上限200件で切る（既存実装と整合）
        const merged = [...map.values()].sort((a, b) => b.ts - a.ts).slice(0, 200);
        saveHistory(merged);

        // 画面更新
        renderHistory();
        renderTrendChart();
        analyzeHistoryAndRender();

        setStatus(
            `履歴をインポートしました（${cleaned.length}件・重複除去後 ${merged.length}件）`,
            4000
        );
    } catch (e) {
        console.error(e);
        setStatus(`インポート失敗: ${e.message || e}`, 5000);
    }
}

// === Escキーでモーダルを閉じる ===
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Esc") {
        const overlay = document.querySelector(".modal-overlay");
        if (overlay) {
            overlay.remove();
        }
    }
});

// ==== キーボード操作（← → と 1,2,3...） ====

// 入力中のときは無効化（検索ボックス等に配慮）
function isTypingInForm(el) {
    if (!el) return false;
    const tag = el.tagName?.toLowerCase();
    return tag === "input" || tag === "textarea" || tag === "select" || el.isContentEditable;
}

// 画面内の問題カード一覧
function getCards() {
    return Array.from(document.querySelectorAll(".card"));
}

// いま画面先頭（≒最上部に最も近い）にある問題カードの index を返す
function getTopCardIndex() {
    const y = window.scrollY;
    const cards = getCards();
    if (!cards.length) return -1;
    // 現在のスクロール位置以下（少し余裕 8px）のうち、最も近いもの
    let best = 0;
    let bestDelta = Infinity;
    cards.forEach((c, i) => {
        const top = c.offsetTop;
        const delta = Math.abs(top - y);
        if (top <= y + 8 && delta < bestDelta) {
            best = i;
            bestDelta = delta;
        }
    });
    return best;
}

// 指定 index のカードへスクロール
function scrollToCard(idx, smooth = true) {
    const cards = getCards();
    if (!cards.length) return;
    const i = Math.max(0, Math.min(cards.length - 1, idx));
    cards[i].scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
}

// ← → で前後へ、数字で選択肢トグル
// === ← →キーで前後の問題にスクロール（表示位置ベース＋Q1制限） ===
// === 数字キーで表示中カードの選択肢にチェック（1〜9） ===
document.addEventListener("keydown", (e) => {
    return;

    // 入力系にフォーカス中は邪魔しない
    const tag = e.target && e.target.tagName ? e.target.tagName.toLowerCase() : "";
    const isEditable =
        tag === "input" ||
        tag === "textarea" ||
        tag === "select" ||
        (e.target && e.target.isContentEditable);
    if (isEditable) return;

    if (!currentQuestions || currentQuestions.length === 0) return;

    const cards = Array.from(document.querySelectorAll(".card"));
    if (cards.length === 0) return;

    const viewportHeight = window.innerHeight;

    // 現在、画面中央付近にあるカードを特定
    let currentIndex = cards.findIndex((card) => {
        const rect = card.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        return centerY > viewportHeight * 0.2 && centerY < viewportHeight * 0.8;
    });

    // 見つからない場合 → 一番近いカードを採用
    if (currentIndex === -1) {
        let minDist = Infinity;
        cards.forEach((card, i) => {
            const dist = Math.abs(card.getBoundingClientRect().top);
            if (dist < minDist) {
                minDist = dist;
                currentIndex = i;
            }
        });
    }

    // --- →キー：次の問題 ---
    if (e.key === "ArrowRight" || e.key === "+") {
        e.preventDefault();
        const next = cards[currentIndex + 1];
        if (next) smoothScrollToCard(next);
        return;
    }

    // --- ←キー：前の問題（Q1で無効） ---
    else if (e.key === "ArrowLeft" || e.key === "-") {
        e.preventDefault();
        // Q1より前にはスクロールしない
        if (currentIndex <= 0) return;
        const prev = cards[currentIndex - 1];
        if (prev) smoothScrollToCard(prev);
        return;
    }

    // 採点後は無効（任意の運用）
    if (document.body.classList.contains("graded")) return;

    // 1〜9のみ（テンキーも含む）
    const k = e.key;
    if (!/^[1-9]$/.test(k)) return;

    const idx = getVisibleCardIndex();
    if (idx < 0) return;

    const current = cards[idx];
    if (!current) return;

    // 表示中カード内の選択肢群を取得
    const inputs = current.querySelectorAll(".choices .choice input[type='checkbox']");
    const choiceIndex = parseInt(k, 10) - 1;
    const target = inputs[choiceIndex];
    if (!target) return; // その番号の選択肢が無ければ無視

    e.preventDefault();

    // トグル（複数選択想定）。単一選択運用なら全解除→当該のみONに変更してOK
    target.checked = !target.checked;
    // change イベントを発火して既存の選択状態・バリデーション処理を流用
    target.dispatchEvent(new Event("change", { bubbles: true }));
});

// === ユーティリティ：現在表示中カードのインデックスを取得 ===
function getVisibleCardIndex() {
    const cards = Array.from(document.querySelectorAll(".card"));
    if (cards.length === 0) return -1;

    const vh = window.innerHeight;
    // 画面中央近辺に中心があるカードを優先
    let idx = cards.findIndex((card) => {
        const r = card.getBoundingClientRect();
        const center = r.top + r.height / 2;
        return center > vh * 0.2 && center < vh * 0.8;
    });
    // 見つからなければ、上端から最も近いカード
    if (idx === -1) {
        let best = Infinity;
        cards.forEach((card, i) => {
            const d = Math.abs(card.getBoundingClientRect().top);
            if (d < best) {
                best = d;
                idx = i;
            }
        });
    }
    return idx;
}

// 初期状態を履歴に追加
history.pushState(null, "", location.href);

function scrollToCardByIndex(zeroBasedIndex) {
    const qnum = zeroBasedIndex + 1;
    const card = document.querySelector(`.card:nth-of-type(${qnum})`);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const y = window.scrollY + rect.top - 12; // 少し余白
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
}
