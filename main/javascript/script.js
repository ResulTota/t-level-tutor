/* NAVIGATION */

function jumpToSection() { 
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const section = document.getElementById('sections').value;
    if (section) {
        window.location.hash = section;
    }
  })
};

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/* DARK MODE */

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

/* QUIZ */

    const quizData = [
    {
        question: " ",
        options: [
        " ",
        " ",
        " ",
        " "
        ],
        answer: " ",
        explanation: " "
    },
    ];

let currentQ = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");
const retryBtn = document.getElementById("retryBtn");

function showQuestion() {
  const q = quizData[currentQ];
  questionEl.textContent = q.question;
  feedbackEl.textContent = "";
  feedbackEl.className = "quiz-feedback";
  nextBtn.style.display = "none";

  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt, btn);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(answer, button) {
  const q = quizData[currentQ];
  const optionButtons = optionsEl.querySelectorAll("button");

  // Disable all buttons after an answer
  optionButtons.forEach(b => b.disabled = true);

  if (answer === q.answer) {
    score++;
    button.classList.add("correct");
    feedbackEl.textContent = "✅ Correct! " + q.explanation;
    feedbackEl.classList.add("correct");
  } else {
    button.classList.add("wrong");
    feedbackEl.textContent = `❌ Wrong. The correct answer is "${q.answer}". ${q.explanation}`;
    feedbackEl.classList.add("wrong");

    // Highlight correct answer
    optionButtons.forEach(b => {
      if (b.textContent === q.answer) {
        b.classList.add("correct");
      }
    });
  }

  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentQ++;
  if (currentQ < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
questionEl.textContent = "";
optionsEl.innerHTML = "";
feedbackEl.textContent = "";
nextBtn.style.display = "none";
resultEl.textContent = `You scored ${score} out of ${quizData.length}! 🎉`;
retryBtn.style.display = "block";
}

nextBtn.addEventListener("click", nextQuestion);

retryBtn.addEventListener("click", () => {
currentQ = 0;
score = 0;
resultEl.textContent = "";
retryBtn.style.display = "none";
showQuestion();
});

// Start quiz
showQuestion();