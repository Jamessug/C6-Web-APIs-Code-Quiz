// scores

// Array to store high scores
const highScores = [];

// Function to display high scores
function displayHighScores() {
  // Log the high scores to the console 
  console.log("High Scores:", highScores);
}

// Function to store a new score
function storeScore(initials, score) {
  // Create an object representing the new score
  const newScore = { initials, score };

  // Add the new score to the high scores array
  highScores.push(newScore);

  // Display updated high scores 
  displayHighScores();
}