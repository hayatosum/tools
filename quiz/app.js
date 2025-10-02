// --- 設定 ---
const QUESTIONS_URL = './questions.json'; // 同じフォルダに配置

// --- 状態管理 ---
let allQuestions = [];
let currentQuestions = []; // 出題中の問題
let userAnswers = new Map(); // key: q.id, value: choice index

// --- 要素参照 ---
const countInput = document.getElementById('questionCount');
const loadBtn = document.getElementById('loadBtn');
const gradeBtn = document.getElementById('gradeBtn');
const resetBtn = document.getElementById('resetBtn');
const statusEl = document.getElementById('status');
const quizArea = document.getElementById('quizArea');
const resultArea = document.getElementById('resultArea');
const scoreText = document.getElementById('scoreText');
const explanationsEl = document.getElementById('explanations');

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
  const allAnswered = currentQuestions.every(q => userAnswers.has(q.id));
  gradeBtn.disabled = !allAnswered;
}

// --- 描画 ---
function renderQuiz(questions) {
  quizArea.innerHTML = '';
  questions.forEach((q, idx) => {
    const card = document.createElement('article');
    card.className = 'card';
    const title = document.createElement('h3');
    title.textContent = `Q${idx + 1}. ${q.question}`;
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
      input.type = 'radio';
      input.name = name;
      input.id = id;
      input.value = cIdx;

      input.addEventListener('change', () => {
        userAnswers.set(q.id, cIdx);
        validateAllAnswered();
      });

      const text = document.createElement('div');
      text.innerHTML = `<strong>${String.fromCharCode(65 + cIdx)}.</strong> ${escapeHtml(choiceText)}`;

      label.appendChild(input);
      label.appendChild(text);
      choicesWrap.appendChild(label);
    });

    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(choicesWrap);
    quizArea.appendChild(card);
  });
}

// 採点後の表示
function markAnswers() {
  const cards = quizArea.querySelectorAll('.card');
  cards.forEach((card, idx) => {
    const q = currentQuestions[idx];
    const user = userAnswers.get(q.id);
    const correct = q.answerIndex;

    const choiceLabels = card.querySelectorAll('.choice');
    choiceLabels.forEach((label, cIdx) => {
      label.classList.remove('correct','incorrect');
      const tag = label.querySelector('.answer-tag');
      if (tag) tag.remove();

      if (cIdx === correct) {
        label.classList.add('correct');
        const span = document.createElement('span');
        span.className = 'answer-tag ok';
        span.textContent = '正解';
        label.appendChild(span);
      }
      if (typeof user === 'number' && cIdx === user && user !== correct) {
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
    const user = userAnswers.get(q.id);
    if (user === q.answerIndex) correctCount++;

    const exp = document.createElement('div');
    exp.className = 'explanation';
    const userTxt = typeof user === 'number' ? `あなたの回答: ${letter(user)}` : '未回答';
    exp.innerHTML = `
      <div><strong>Q${i+1}.</strong> ${escapeHtml(q.question)}</div>
      <div>正解: ${letter(q.answerIndex)}（${escapeHtml(q.choices[q.answerIndex])}） / ${userTxt}</div>
      ${q.explanation ? `<div>${escapeHtml(q.explanation)}</div>` : ''}
    `;
    explanationsEl.appendChild(exp);
  });

  const total = currentQuestions.length;
  const rate = Math.round((correctCount / total) * 100);
  scoreText.textContent = `正解数: ${correctCount} / ${total}（正答率 ${rate}%）`;
  resultArea.hidden = false;
}

// --- 主要フロー ---
async function loadAllQuestions() {
  if (allQuestions.length > 0) return; // 既にロード済み
  const res = await fetch(QUESTIONS_URL, { cache: 'no-store' });
  if (!res.ok) throw new Error(`問題の取得に失敗しました: ${res.status}`);
  const data = await res.json();
  if (!Array.isArray(data)) throw new Error('questions.json は配列である必要があります');
  // 軽い検証
  data.forEach((q, i) => {
    if (typeof q.id === 'undefined') q.id = i + 1;
    if (!q.question || !Array.isArray(q.choices) || typeof q.answerIndex !== 'number') {
      throw new Error(`不正な問題形式があります (index: ${i})`);
    }
  });
  allQuestions = data;
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
