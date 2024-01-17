// logic

// Initialisation
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft; // Add this line to declare timeLeft

const quizContainer = document.getElementById("quiz-container");

// Start Quiz Function
function startQuiz() {
  if (typeof timeLeft === 'undefined') {
    // Initialise timeLeft only if not defined
    timeLeft = 60; // Set the initial time for the quiz
  }

  timer = setInterval(function() {
    // Update timer logic (subtract time, check if time is up)
    if (timeLeft > 0) {
      timeLeft--;
    } else {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);

  // Display the first question
  displayQuestion(currentQuestionIndex);

  // Add event listeners for user interactions
  quizContainer.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      checkAnswer(parseInt(event.target.dataset.index));
    }
  });
}

// Display Question Function
function displayQuestion(index) {
  const currentQuestion = getQuestion(index);
  quizContainer.innerHTML = `
    <h2>${currentQuestion.question}</h2>
    <div id="choices">
      ${currentQuestion.options.map((option, i) => `<button data-index="${i}">${option}</button>`).join('')}
    </div>
  `;
}

// Check Answer Function
function checkAnswer(answer) {
  const currentQuestion = getQuestion(currentQuestionIndex);

  if (answer === currentQuestion.correctAnswer) {
    score++;
  } else {
    // Subtract time from the timer (e.g., reduce timer by 10 seconds)
    timeLeft -= 10; // Adjust based on your penalty logic
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < getTotalQuestions()) {
    displayQuestion(currentQuestionIndex);
  } else {
    endQuiz();
  }
}

// End Quiz Function
function endQuiz() {
  alert(`Final Score: ${score}`);
  // Retrieve and display high scores from scores.js
  displayHighScores();
}