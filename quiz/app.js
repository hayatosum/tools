// --- 設定 ---
// const QUESTIONS_URL = './questions.json'; // 同じフォルダに配置

// --- 状態管理 ---
let allQuestions = [];
let currentQuestions = []; // 出題中の問題
let userAnswers = new Map(); // key: q.id, value: choice index

// --- 要素参照 ---
const fileSelect = document.getElementById('fileSelect');
let currentFile = fileSelect.value; // デフォルト
const fileInput  = document.getElementById('fileInput');
const countInput = document.getElementById('questionCount');
const loadBtn = document.getElementById('loadBtn');
const gradeBtn = document.getElementById('gradeBtn');
const resetBtn = document.getElementById('resetBtn');
const statusEl = document.getElementById('status');
const quizArea = document.getElementById('quizArea');
const gradeArea = document.getElementById('gradeArea');
const resultArea = document.getElementById('resultArea');
const scoreText = document.getElementById('scoreText');
const explanationsEl = document.getElementById('explanations');

// --- ファイル切り替え ---
fileSelect.addEventListener('change', () => {
  currentFile = fileSelect.value;
});

// --- ユーティリティ ---
const shuffle = (arr) => arr.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(v=>v[1]);

function ensureNumber(val, fallback=1) {
  const n = Number(val);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : fallback;
}

function setStatus(msg, timeoutMs = 2000) {
  statusEl.textContent = msg || '';
  if (timeoutMs > 0) {
    setTimeout(() => { if (statusEl.textContent === msg) statusEl.textContent = ''; }, timeoutMs);
  }
}

function validateAllAnswered() {
  const allAnswered = currentQuestions.every(q => {
    const a = userAnswers.get(q.id);
    return Array.isArray(a) && a.length > 0;   // 1つ以上チェックされていれば回答済み
  });
  gradeBtn.disabled = !allAnswered;
}


// --- 描画 ---
function renderQuiz(questions) {
  quizArea.innerHTML = '';
  questions.forEach((q, idx) => {
    const card = document.createElement('article');
    card.className = 'card';

    // --- 問題文の描画 ---
    const title = document.createElement('h3');
    title.textContent = `Q${idx + 1}.`;

    const questionText = document.createElement('div');
    questionText.className = 'question-text';

    // 1) codeプロパティ優先
    if (q.code && q.code.trim() !== '') {
      if (q.question) {
        const p = document.createElement('p');
        p.textContent = q.question;
        questionText.appendChild(p);
      }
      const pre = document.createElement('pre');
      const code = document.createElement('code');
      code.textContent = q.code; // textContentで安全に
      pre.appendChild(code);
      questionText.appendChild(pre);
    } else {
      // 2) question内のフェンス付きコード ```lang ... ``` を検出
      const fence = /```(?:\w+)?\n([\s\S]*?)```/m;
      const m = typeof q.question === 'string' ? q.question.match(fence) : null;

      if (m) {
        // フェンスの外側は通常文、内側はコード
        const before = q.question.slice(0, m.index).trim();
        const after = q.question.slice(m.index + m[0].length).trim();
        if (before) {
          const p = document.createElement('p');
          p.textContent = before;
          questionText.appendChild(p);
        }
        const pre = document.createElement('pre');
        const code = document.createElement('code');
        code.textContent = m[1];
        pre.appendChild(code);
        questionText.appendChild(pre);
        if (after) {
          const p2 = document.createElement('p');
          p2.textContent = after;
          questionText.appendChild(p2);
        }
      } else {
        // 通常テキストのみ
        questionText.textContent = q.question || '';
      }
    }

    const meta = document.createElement('div');
    meta.className = 'meta';
    const cat = q.category ? `カテゴリ: ${q.category}` : 'カテゴリ: -';
    const diff = q.difficulty ? ` / 難易度: ${q.difficulty}` : '';
    meta.textContent = `${cat}${diff}`;

    const choicesWrap = document.createElement('div');
    choicesWrap.className = 'choices';

    // ★ シャッフル付きで choices を描画
    // 正解インデックスを保持するためにペア化
    const choicePairs = q.choices.map((c, i) => ({ text: c, index: i }));
    const shuffled = shuffle(choicePairs);

    // 新しい choices と正解インデックスを計算
    q.choices = shuffled.map(c => c.text);
    const correctSet = Array.isArray(q.answerIndex) ? q.answerIndex : [q.answerIndex];
    q.answerIndex = shuffled
      .map((c, newIdx) => (correctSet.includes(c.index) ? newIdx : null))
      .filter(v => v !== null);

    shuffled.forEach((c, cIdx) => {
      const id = `q${q.id}_c${cIdx}`;
      const name = `qgroup_${q.id}`;

      const label = document.createElement('label');
      label.className = 'choice';
      label.setAttribute('for', id);

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.name = name;
      input.id = id;
      input.value = cIdx;

      input.addEventListener('change', () => {
        let answers = userAnswers.get(q.id) || [];
        if (input.checked) {
          // 選択を追加（重複防止）
          if (!answers.includes(cIdx)) answers.push(cIdx);
        } else {
          // 選択を解除
          answers = answers.filter(v => v !== cIdx);
        }
        userAnswers.set(q.id, answers);
        validateAllAnswered();
      });

      const text = document.createElement('div');
      text.innerHTML = `<strong>${String.fromCharCode(65 + cIdx)}.</strong> ${c.text}`;

      label.appendChild(input);
      label.appendChild(text);
      choicesWrap.appendChild(label);
    });

    card.appendChild(title);
    card.appendChild(questionText);
    card.appendChild(meta);
    card.appendChild(choicesWrap);

    // --- 解説プレースホルダ（採点後に埋める） ---
    const exp = document.createElement('div');
    exp.className = 'inline-exp hidden';
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
  const cards = quizArea.querySelectorAll('.card');
  cards.forEach((card, idx) => {
    const q = currentQuestions[idx];
    const user = userAnswers.get(q.id) || [];
    const correct = Array.isArray(q.answerIndex) ? q.answerIndex : [q.answerIndex];

    const choiceLabels = card.querySelectorAll('.choice');
    choiceLabels.forEach((label, cIdx) => {
      label.classList.remove('correct','incorrect');
      const tag = label.querySelector('.answer-tag');
      if (tag) tag.remove();

      if (correct.includes(cIdx)) {
        label.classList.add('correct');
        const span = document.createElement('span');
        span.className = 'answer-tag ok';
        span.textContent = '正解';
        label.appendChild(span);
      }
      if (user.includes(cIdx) && !correct.includes(cIdx)) {
        label.classList.add('incorrect');
        const span = document.createElement('span');
        span.className = 'answer-tag ng';
        span.textContent = '不正解';
        label.appendChild(span);
      }
    });
    
    // 採点後にその設問のチェックを無効化（任意）
    choiceLabels.forEach((label) => {
      const inp = label.querySelector('input');
      if (inp) inp.disabled = true;
    });

    // === ここから追記：各問題の下に解説を表示 ===
    const expEl = card.querySelector('.inline-exp');
    if (expEl) {
      const body = expEl.querySelector('.exp-body');
      const correctLetters = correct.map(letter).join(', ');
      const userLetters = user.length ? user.map(letter).join(', ') : '未回答';

      // フェンス付きコード ``` ... ``` が解説に含まれている場合も整形
      const explanationHtml = formatExplanationHtml(q.explanation);

      body.innerHTML = `
        <div>問題ID: ${q.id}</div>
        <div>正解: ${correctLetters} / あなたの回答: ${userLetters}</div>
        ${explanationHtml}
      `;
      expEl.classList.remove('hidden');
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
  const progressBar = document.getElementById('progressBar');
  progressBar.style.width = rate + "%";
  progressBar.style.background = rate >= 65 ? "var(--ok)" : "var(--ng)";

  // === 評価メッセージ ===
  const elapsedMs = quizStartAt ? (Date.now() - quizStartAt) : null;
  const perQ = elapsedMs ? elapsedMs / 1000 / total : null;
  let evalMsg = "";
  if (perQ !== null) {
    evalMsg += `平均回答時間: ${perQ.toFixed(1)}秒/問 → `;
    evalMsg += perQ <= 60 ? "✔ 1分以内" : "✘ 1分超過";
  }
  evalMsg += " / ";
  evalMsg += rate >= 65 ? "✔ 正答率65%以上" : "✘ 正答率未達";
  document.getElementById('evalText').textContent = evalMsg;

  // === 履歴保存 ===
  let source = '';
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
    questionIds: currentQuestions.map(q => q.id),
    items
  });
  renderHistory();

  renderHistory();
  renderTrendChart();
  
  analyzeHistoryAndRender();


  resultArea.hidden = false;
  gradeArea.hidden = true;

  document.body.classList.add('graded');

}




// --- 問題ロード ---
async function loadAllQuestions() {
  let data;

  if (fileInput.files && fileInput.files[0]) {
    const file = fileInput.files[0];
    const text = await file.text();
    data = JSON.parse(text);
  } else {
    const res = await fetch('json/' + currentFile, { cache: 'no-store' });
    if (!res.ok) throw new Error(`問題の取得に失敗しました: ${res.status}`);
    data = await res.json();
  }

  let merged = [];

  if (Array.isArray(data)) {
    // [{prefix:"KS01",questions:[...]}, {prefix:"KS02",questions:[...]}] の形式
    data.forEach(block => {
      const prefix = block.prefix || "ZZ00";
      const questions = block.questions || [];
      validateQuestions(questions, prefix);
      merged = merged.concat(questions);
    });
  } else if (data.questions && data.prefix) {
    // {prefix:"KS01",questions:[...]} の形式
    const prefix = data.prefix || "ZZ00";
    const questions = data.questions || [];
    validateQuestions(questions, prefix);
    merged = questions;
  } else if (Array.isArray(data)) {
    // 単純配列（旧形式）
    validateQuestions(data, "ZZ00");
    merged = data;
  } else {
    throw new Error("不正なJSON形式です");
  }

  allQuestions = merged;
}


// 旧: function validateQuestions(data) { ... } を丸ごと置き換え
function validateQuestions(data, prefix = "ZZ00") {
  if (!Array.isArray(data)) throw new Error('問題ファイルは配列である必要があります');

  // 英字2桁+数字2桁+ハイフン+連番3桁 の形式例: KS01-001
  const ID_RE = /^[A-Za-z]{2}\d{2}-\d{3}$/;

  data.forEach((q, i) => {
    // ---- ID の付与・正規化 ----
    // 1) 既存IDがなければ prefix を使って自動採番
    // 2) 既存IDが「数値のみ」なら、新しい形式へ変換
    // 3) 既存IDが文字列でもID形式でなければ上書き（安全運用）
    if (typeof q.id === 'undefined' || /^\d+$/.test(String(q.id)) || !ID_RE.test(String(q.id))) {
      const seq = String(i + 1).padStart(3, '0');          // 001, 002, ...
      const pf  = String(prefix).padEnd(4, '0').slice(0,4); // 念のため4桁に調整
      q.id = `${pf}-${seq}`;                                // 例: KS01-001
    }

    // ---- 質問/選択肢の基本チェック ----
    if (typeof q.question !== 'string' || !Array.isArray(q.choices) || q.choices.length < 2) {
      throw new Error(`不正な問題形式があります (index: ${i})`);
    }

    // ---- answerIndex を配列として正規化（単一/複数どちらもOK）----
    let ans = q.answerIndex;
    if (typeof ans === 'number') {
      ans = [ans];
    } else if (Array.isArray(ans)) {
      ans = ans.map(v => Number(v));
    } else {
      throw new Error(`answerIndex は数値または数値配列である必要があります (index: ${i})`);
    }

    const uniq = [...new Set(ans)];
    if (uniq.length === 0) throw new Error(`answerIndex が空です (index: ${i})`);
    const bad = uniq.find(v => !Number.isInteger(v) || v < 0 || v >= q.choices.length);
    if (bad !== undefined) throw new Error(`answerIndex に不正な値があります: ${bad} (index: ${i})`);

    q.answerIndex = uniq;
  });
}



// === 置き換え：出題選択 ===
function pickQuestions(n) {
  const cnt = Math.min(n, allQuestions.length);
  const useAdaptive = adaptiveModeEl ? adaptiveModeEl.checked : false;

  // 未出題を最優先でピック
  const seenSet = getSeenIdSetFromHistory();
  const unseen = allQuestions.filter(q => !seenSet.has(q.id));
  const picked = [];

  // まず未出題から必要数まで埋める（未出題内の順序はランダム）
  if (unseen.length > 0) {
    // 未出題が必要数以上ある場合 → 未出題だけで完結
    if (unseen.length >= cnt) {
      return shuffle(unseen).slice(0, cnt);
    }
    // 未出題が不足する場合 → あるだけ入れて、残りを既出から補完
    picked.push(...shuffle(unseen)); // 全部採用（順序ランダム）
  }

  const remain = cnt - picked.length;
  if (remain <= 0) return picked.slice(0, cnt);

  // 既出のみのプールを作成
  const seenPool = allQuestions.filter(q => seenSet.has(q.id) && !picked.includes(q));

  // 弱点優先モードなら重み付け、OFFなら通常ランダム
  if (useAdaptive && loadHistory().length > 0) {
    const rateMap = buildRateMapFromHistory(); // 既存：id -> 正答率(0-100)
    const strength = Number(adaptiveStrengthEl?.value ?? 1.0);
    const weights = seenPool.map(q => rateToWeight(rateMap.get(q.id), strength));
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
  quizArea.innerHTML = '';
  resultArea.hidden = true;
  scoreText.textContent = '';
  explanationsEl.innerHTML = '';
  gradeBtn.disabled = true;
  resetBtn.disabled = true;
}

function letter(idx) {
  return String.fromCharCode(65 + idx);
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#39;');
}

function formatExplanationHtml(explanation) {
  if (!explanation) return '';
  const text = String(explanation);

  // ```lang\n ... ``` を <pre><code> に変換（複数対応）
  const fenceRegex = /```(?:\w+)?\n([\s\S]*?)```/g;
  if (fenceRegex.test(text)) {
    return text.replace(fenceRegex, (_, code) => {
      return `<pre><code>${escapeHtml(code)}</code></pre>`;
    }).split(fenceRegex).map(part => {
      // プレーンテキスト部分もエスケープ
      return part ? `<p>${escapeHtml(part)}</p>` : '';
    }).join('');
  }

  // フェンスがなければプレーンテキストとして表示
  return `<p>${escapeHtml(text)}</p>`;
}


// --- イベント ---
loadBtn.addEventListener('click', async () => {
  try {
    resetState();
    setStatus('問題を読み込み中…', 0);
    await loadAllQuestions();

    const n = ensureNumber(countInput.value, 1);
    if (n < 1) {
      setStatus('出題数は1以上を指定してください'); 
      return;
    }
    if (allQuestions.length === 0) {
      setStatus('登録された問題がありません'); 
      return;
    }
    if (n > allQuestions.length) {
      setStatus(`出題数が多すぎます（最大 ${allQuestions.length}）`);
    }

    currentQuestions = pickQuestions(n);
    renderQuiz(currentQuestions);
    setStatus(`全 ${allQuestions.length}問中から ${currentQuestions.length}問を出題しました`, 3000);
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
const LS_KEY = 'quizHistory.v1';

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
const historyList = document.getElementById('historyList');
const refreshHistoryBtn = document.getElementById('refreshHistoryBtn');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

function renderHistory() {
  const hist = loadHistory();
  historyList.innerHTML = '';
  if (hist.length === 0) {
    historyList.innerHTML = '<p class="sub">履歴はまだありません。</p>';
    return;
  }
  hist.forEach((h, idx) => {
    const div = document.createElement('div');
    div.className = 'history-item';

    const head = document.createElement('div');
    head.className = 'history-head';
    const title = document.createElement('h3');
    title.textContent = `#${String(hist.length - idx).padStart(2,'0')}：${h.correct}/${h.total}（${h.rate}%）`;
    const src = document.createElement('div');
    src.className = 'source';
    src.textContent = h.source ? `source: ${h.source}` : '';
    head.appendChild(title);
    head.appendChild(src);
    div.appendChild(head);

    const meta = document.createElement('div');
    meta.className = 'history-meta';
    const d = new Date(h.ts);
    meta.innerHTML = `
      <span>${d.toLocaleString()}</span>
      <span>出題数: ${h.total}</span>
      <span>所要時間: ${typeof h.elapsedMs === 'number' ? Math.round(h.elapsedMs/1000) + 's' : '-'}</span>
    `;
    div.appendChild(meta);

    // 詳細（各問の正誤・ID・あなたの回答）
    if (Array.isArray(h.items) && h.items.length) {
      const details = document.createElement('details');
      details.className = 'history-details';
      const sum = document.createElement('summary');
      sum.textContent = '詳細を表示';
      details.appendChild(sum);

      const ul = document.createElement('ul');
      ul.style.margin = '8px 0 0 16px';
      h.items.forEach((it, i) => {
        const li = document.createElement('li');
        const correctLetters = it.correct.map(letter).join(', ');
        const userLetters = it.user.length ? it.user.map(letter).join(', ') : '未回答';
        li.textContent = `Q${i+1} (id:${it.id})  正解: ${correctLetters} / 回答: ${userLetters}  ${it.isCorrect ? '○' : '×'}`;
        ul.appendChild(li);
      });
      details.appendChild(ul);
      div.appendChild(details);
    }

    historyList.appendChild(div);
  });
}

// 画面起動時に一度描画
renderHistory();

// ボタン：再読込・全削除
if (refreshHistoryBtn) {
  refreshHistoryBtn.addEventListener('click', () => renderHistory());
}
if (clearHistoryBtn) {
  clearHistoryBtn.addEventListener('click', () => {
    if (confirm('履歴をすべて削除します。よろしいですか？')) {
      saveHistory([]);
      renderHistory();
    }
  });
};

// 出題開始時間（経過計測用）
let quizStartAt = null;

// loadBtn の CLICK ハンドラ内の成功時に追加
// （currentQuestions = pickQuestions(n); の後あたり）
quizStartAt = Date.now();


gradeBtn.addEventListener('click', () => {
  stopTimer();

  markAnswers();
  showResults();
  setStatus('採点しました', 3000);
});

resetBtn.addEventListener('click', () => {
  stopTimer();
  
  resetState();
  setStatus('リセットしました', 1500);
  gradeArea.hidden = true;
  document.body.classList.remove('graded');
});


let timerId = null;

const timerEl = document.getElementById('timer');

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
const lowRateInput = document.getElementById('lowRateThreshold');
const analysisTableWrap = document.getElementById('analysisTableWrap');
const rankTopEl = document.getElementById('rankTop');
const rankBottomEl = document.getElementById('rankBottom');
const barChartEl = document.getElementById('barChart');
const heatmapEl = document.getElementById('heatmap');
const analyzeBtn = document.getElementById('analyzeBtn');

function gatherStatsFromHistory() {
  const hist = loadHistory();
  const stats = new Map(); // id -> { id, total, correct }

  hist.forEach(run => {
    if (!Array.isArray(run.items)) return;
    run.items.forEach(it => {
      if (!stats.has(it.id)) stats.set(it.id, { id: it.id, total: 0, correct: 0 });
      const s = stats.get(it.id);
      s.total += 1;
      if (it.isCorrect) s.correct += 1;
    });
  });

  // rate付与して配列化
  const arr = [...stats.values()].map(s => ({ ...s, rate: s.total ? Math.round((s.correct / s.total) * 100) : 0 }));
  // 表示用にID昇順で基本ソート
  arr.sort((a,b) => a.id.localeCompare(b.id));
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
  let html = "<table id='analysisTable'><thead><tr><th>ID</th><th>出題回数</th><th>正解数</th><th>正答率</th></tr></thead><tbody>";
  rows.forEach(r => {
    const low = r.rate < lowThreshold;
    html += `
      <tr class="${low ? 'tr-low' : ''}">
        <td>${r.id}</td>
        <td>${r.total}</td>
        <td>${r.correct}</td>
        <td class="td-rate ${low ? 'bad' : ''}">${r.rate}%</td>
      </tr>`;
  });
  html += "</tbody></table>";
  analysisTableWrap.innerHTML = html;
}

function renderRanking(rows) {
  const byRateDesc = [...rows].sort((a,b) => b.rate - a.rate || a.id.localeCompare(b.id));
  const byRateAsc  = [...rows].sort((a,b) => a.rate - b.rate || a.id.localeCompare(b.id));

  const topN = byRateDesc.slice(0, 10);
  const bottomN = byRateAsc.slice(0, 10);

  rankTopEl.innerHTML = topN.map(r => `<li>${r.id} — ${r.rate}%（${r.correct}/${r.total}）</li>`).join('') || '<li class="sub">データなし</li>';
  rankBottomEl.innerHTML = bottomN.map(r => `<li>${r.id} — ${r.rate}%（${r.correct}/${r.total}）</li>`).join('') || '<li class="sub">データなし</li>';
}

function renderBarChart(rows) {
  barChartEl.innerHTML = '';
  if (!rows.length) {
    barChartEl.innerHTML = '<p class="sub">データなし</p>';
    return;
  }
  // 横棒はID順（任意で rate順にしたい場合は sort を変えてOK）
  rows.forEach(r => {
    const row = document.createElement('div');
    row.className = 'bar-row';

    const label = document.createElement('div');
    label.className = 'bar-label';
    label.textContent = r.id;

    const track = document.createElement('div');
    track.className = 'bar-track';

    const fill = document.createElement('div');
    fill.className = 'bar-fill';
    fill.style.width = `${r.rate}%`;
    fill.style.background = rateToColor(r.rate);

    const val = document.createElement('div');
    val.className = 'bar-val';
    val.textContent = `${r.rate}%`;

    track.appendChild(fill);
    row.appendChild(label);
    row.appendChild(track);
    row.appendChild(val);
    barChartEl.appendChild(row);
  });
}

function renderHeatmap(rows) {
  heatmapEl.innerHTML = '';
  if (!rows.length) {
    heatmapEl.innerHTML = '<p class="sub">データなし</p>';
    return;
  }
  rows.forEach(r => {
    const cell = document.createElement('div');
    cell.className = 'hm-cell';
    const sw = document.createElement('div');
    sw.className = 'hm-swatch';
    sw.style.background = rateToColor(r.rate);
    const label = document.createElement('div');
    label.className = 'hm-label';
    label.textContent = r.id;
    cell.title = `${r.id} — ${r.rate}%（${r.correct}/${r.total}）`;
    cell.appendChild(sw);
    cell.appendChild(label);
    heatmapEl.appendChild(cell);
  });
}

function analyzeHistoryAndRender() {
  const lowThreshold = Number(lowRateInput?.value ?? 50);
  const rows = gatherStatsFromHistory();
  renderAnalysisTable(rows, lowThreshold);
  renderRanking(rows);
  renderBarChart(rows);
  renderHeatmap(rows);
}

// 初期描画・イベント
analyzeHistoryAndRender();
if (analyzeBtn) analyzeBtn.addEventListener('click', analyzeHistoryAndRender);
if (lowRateInput) lowRateInput.addEventListener('change', analyzeHistoryAndRender);

// 採点直後にも更新
// （既存の showResults() の最後に renderHistory() の直後でOK）



// === 追加：要素参照 ===
const adaptiveModeEl = document.getElementById('adaptiveMode');
const adaptiveStrengthEl = document.getElementById('adaptiveStrength');

// === 追加：履歴からID別の正答率を取り出す（0〜100） ===
function buildRateMapFromHistory() {
  const hist = loadHistory();            // 既存：localStorageから履歴取得
  const totals = new Map();              // id -> 出題回数
  const rights = new Map();              // id -> 正解数
  hist.forEach(run => {
    if (!Array.isArray(run.items)) return;
    run.items.forEach(it => {
      totals.set(it.id, (totals.get(it.id) || 0) + 1);
      rights.set(it.id, (rights.get(it.id) || 0) + (it.isCorrect ? 1 : 0));
    });
  });
  const rates = new Map();               // id -> 正答率(%)
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
  hist.forEach(run => {
    if (!Array.isArray(run.items)) return;
    run.items.forEach(it => set.add(it.id));
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
  const host = document.getElementById('trendChart');
  if (!host) return;

  const runs = getLastNRuns(20);
  if (!runs.length) {
    host.innerHTML = `<p class="sub">履歴がありません。</p>`;
    return;
  }

  // ---- データ整形 ----
  const xs = runs.map((_, i) => i);                     // 0..n-1
  const rate = runs.map(r => Number(r.rate || 0));      // 正答率(%)
  const ma   = movingAverage(rate, 5);                  // 5回移動平均
  const secPerQ = runs.map(r => {
    const per = r.elapsedMs && r.total ? r.elapsedMs / 1000 / r.total : null;
    return per ?? 0;
  });

  // ---- SVG座標系 ----
  const W = 860, H = 260;
  const padL = 42, padR = 44, padT = 12, padB = 30; // 右に第2軸ラベル余白
  const iw = W - padL - padR;
  const ih = H - padT - padB;

  // xスケール
  const n = xs.length;
  const xStep = n > 1 ? (iw / (n - 1)) : 0;
  const X = (i) => padL + i * xStep;

  // yスケール（左軸＝正答率 0..100）
  const Y = (v) => padT + (100 - Math.max(0, Math.min(100, v))) * (ih / 100);

  // y2スケール（右軸＝秒/問）…データの上限をよしなに
  const maxSec = Math.max(60, Math.ceil(Math.max(...secPerQ) / 10) * 10); // 少なくとも60s
  const Y2 = (sec) => padT + (1 - Math.max(0, Math.min(maxSec, sec)) / maxSec) * ih;

  // ポリライン座標
  const ptsRate = rate.map((v, i) => `${X(i)},${Y(v)}`).join(' ');
  const ptsMA   = ma.map(  (v, i) => `${X(i)},${Y(v)}`).join(' ');
  const ptsTime = secPerQ.map((v, i) => `${X(i)},${Y2(v)}`).join(' ');

  // グリッド（左軸：0,20,40,60,80,100）
  const gridYVals = [0, 20, 40, 60, 80, 100];

  // 63%合格ライン
  const pass = 63;
  const passY = Y(pass);

  // 軸ラベル用（右軸：0, maxSec/2, maxSec）
  const rightTicks = [0, Math.round(maxSec/2), maxSec];

  const svg = `
<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="正答率推移と所要時間">
  <rect x="0" y="0" width="${W}" height="${H}" fill="#fff"/>

  <!-- 左グリッド＆ラベル（正答率%） -->
  ${gridYVals.map(v => `
    <line x1="${padL}" y1="${Y(v)}" x2="${W-padR}" y2="${Y(v)}" stroke="#eee"/>
    <text x="${padL-6}" y="${Y(v)+4}" text-anchor="end" font-size="10" fill="#666">${v}%</text>
  `).join('')}

  <!-- X軸 -->
  <line x1="${padL}" y1="${H-padB}" x2="${W-padR}" y2="${H-padB}" stroke="#ddd"/>

  <!-- 合格ライン 63% -->
  <line x1="${padL}" y1="${passY}" x2="${W-padR}" y2="${passY}" stroke="#dc2626" stroke-dasharray="6,6" />
  <text x="${W-padR+2}" y="${passY+4}" font-size="10" fill="#dc2626">63%</text>

  <!-- 折れ線（正答率） -->
  <polyline points="${ptsRate}" fill="none" stroke="var(--primary)" stroke-width="2"/>

  <!-- 移動平均（正答率） -->
  <polyline points="${ptsMA}" fill="none" stroke="#888" stroke-width="2" stroke-dasharray="4,3"/>

  <!-- データ点（正答率） -->
  ${rate.map((v,i) => `
    <circle cx="${X(i)}" cy="${Y(v)}" r="3.5" fill="var(--primary)">
      <title>${i+1}回目: ${v}%</title>
    </circle>
  `).join('')}

  <!-- 秒/問（右軸） -->
  <polyline points="${ptsTime}" fill="none" stroke="#16a34a" stroke-width="2" opacity="0.9"/>
  ${secPerQ.map((v,i) => `
    <circle cx="${X(i)}" cy="${Y2(v)}" r="3.5" fill="#16a34a">
      <title>${i+1}回目: ${v.toFixed(1)} 秒/問</title>
    </circle>
  `).join('')}

  <!-- 右軸ラベル（秒/問） -->
  ${rightTicks.map(t => `
    <text x="${W-padR+2}" y="${Y2(t)+4}" font-size="10" fill="#666">${t}s</text>
  `).join('')}
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


renderTrendChart();