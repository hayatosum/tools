// --- 設定 ---
// const QUESTIONS_URL = './questions.json'; // 同じフォルダに配置

// --- 状態管理 ---
let allQuestions = [];
let currentQuestions = []; // 出題中の問題
let userAnswers = new Map(); // key: q.id, value: choice index
let currentFile = 'java_silver_100.json'; // デフォルト

// --- 要素参照 ---
const fileSelect = document.getElementById('fileSelect');
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

    q.choices.forEach((choiceText, cIdx) => {
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
      text.innerHTML = `<strong>${String.fromCharCode(65 + cIdx)}.</strong> ${escapeHtml(choiceText)}`;

      label.appendChild(input);
      label.appendChild(text);
      choicesWrap.appendChild(label);
    });

    card.appendChild(title);
    card.appendChild(questionText);
    card.appendChild(meta);
    card.appendChild(choicesWrap);
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
  });
}


// 結果セクション
function showResults() {
  let correctCount = 0;
  explanationsEl.innerHTML = '';

  currentQuestions.forEach((q, i) => {
    const user = userAnswers.get(q.id) || [];
    const correct = Array.isArray(q.answerIndex) ? q.answerIndex : [q.answerIndex];
    if (arraysEqual(user, correct)) correctCount++;

    const exp = document.createElement('div');
    exp.className = 'explanation';
    const correctLetters = correct.map(letter).join(',');
    const userLetters = user.length ? user.map(letter).join(',') : '未回答';
    exp.innerHTML = `
      <div><strong>Q${i+1}.</strong> ${escapeHtml(q.question)}</div>
      <div>正解: ${correctLetters} / あなたの回答: ${userLetters}</div>
      ${q.explanation ? `<div>${escapeHtml(q.explanation)}</div>` : ''}
    `;
    explanationsEl.appendChild(exp);
  });

  const total = currentQuestions.length;
  const rate = Math.round((correctCount / total) * 100);
  scoreText.textContent = `正解数: ${correctCount} / ${total}（正答率 ${rate}%）`;
  resultArea.hidden = false;
  gradeArea.hidden = true;
}


// --- 問題ロード ---
async function loadAllQuestions() {
  // ローカルファイルが選ばれていればそれを優先
  if (fileInput.files && fileInput.files[0]) {
    const file = fileInput.files[0];
    const text = await file.text();
    const data = JSON.parse(text);
    validateQuestions(data);
    allQuestions = data;
    return;
  }

  // 未選択ならセレクトボックスのファイルを fetch
  const res = await fetch('json/' + currentFile, { cache: 'no-store' });
  if (!res.ok) throw new Error(`問題の取得に失敗しました: ${res.status}`);
  const data = await res.json();
  validateQuestions(data);
  allQuestions = data;
}

function validateQuestions(data) {
  if (!Array.isArray(data)) throw new Error('問題ファイルは配列である必要があります');

  data.forEach((q, i) => {
    if (typeof q.id === 'undefined') q.id = i + 1;

    // 質問/選択肢の基本チェック
    if (typeof q.question !== 'string' || !Array.isArray(q.choices) || q.choices.length < 2) {
      throw new Error(`不正な問題形式があります (index: ${i})`);
    }

    // --- answerIndex を数値 or 数値配列の両対応にして配列へ正規化 ---
    let ans = q.answerIndex;
    if (typeof ans === 'number') {
      ans = [ans];                        // 単一正答を配列化
    } else if (Array.isArray(ans)) {
      ans = ans.map(v => Number(v));      // 文字や数値混在でも数値化
    } else {
      throw new Error(`answerIndex は数値または数値配列である必要があります (index: ${i})`);
    }

    // 重複除去 & 範囲チェック
    const uniq = [...new Set(ans)];
    if (uniq.length === 0) {
      throw new Error(`answerIndex が空です (index: ${i})`);
    }
    const bad = uniq.find(v => !Number.isInteger(v) || v < 0 || v >= q.choices.length);
    if (bad !== undefined) {
      throw new Error(`answerIndex に不正な値があります: ${bad} (index: ${i})`);
    }

    // 正規化結果を書き戻し（以降はすべて配列として扱える）
    q.answerIndex = uniq;
  });
}


function pickQuestions(n) {
  const cnt = Math.min(n, allQuestions.length);
  return shuffle(allQuestions).slice(0, cnt);
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
  } catch (e) {
    console.error(e);
    setStatus(`エラー: ${e.message || e}`);
  }
});

gradeBtn.addEventListener('click', () => {
  markAnswers();
  showResults();
  setStatus('採点しました', 3000);
});

resetBtn.addEventListener('click', () => {
  resetState();
  setStatus('リセットしました', 1500);
});
