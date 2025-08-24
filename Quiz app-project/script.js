const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS"],
    answer: "CSS"
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["Python Script", "JQuery", "Django"],
    answer: "Django"
  },
  {
    question: "Which is used for Connect To Database?",
    options: ["PHP", "HTML", "JS"],
    answer: "PHP"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const qData = quizData[currentQuestion];
  questionEl.textContent = qData.question;
  optionsEl.innerHTML = '';
  qData.options.forEach(option => {
    const btn = document.createElement('button');
    btn.classList.add('option');
    btn.textContent = option;
    btn.onclick = () => selectOption(option);
    optionsEl.appendChild(btn);
  });
}

function selectOption(selected) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }
  document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById('next-btn').style.display = 'none';
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById('quiz-box').style.display = 'none';
    document.getElementById('result-box').style.display = 'block';
    document.getElementById('score').textContent = score + "/" + quizData.length;
  }
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById('result-box').style.display = 'none';
  document.getElementById('quiz-box').style.display = 'block';
  loadQuestion();
}

window.onload = loadQuestion;
