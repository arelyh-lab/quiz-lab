// quiz.js
// Questions and answers arrays (same index)
// Answers must be single-word strings (lowercase expected)
const questions = [
  "Capital of France (one word)?",
  "Sky color on a clear day (one word)?",
  "Opposite of hot (one word)?"
];

const answers = [
  "paris",
  "blue",
  "cold"
];

// quiz() runs the quiz and returns accumulated points
function quiz() {
  let totalPoints = 0;

  // For loop - iterate questions (index 0..questions.length-1)
  for (let i = 0; i < questions.length; i++) {
    let guesses = 3;                 // user has up to 3 tries per question
    let answeredCorrectly = false;

    // While loop - handle attempts for a single question
    while (guesses > 0 && !answeredCorrectly) {
      // prompt user and protect against Cancel (null)
      const raw = prompt(`${questions[i]}\nAttempts left: ${guesses}`);
      const userAnswer = raw === null ? "" : raw.trim().toLowerCase();

      // Conditional - compare user input to the answer
      if (userAnswer === answers[i]) {
        // award points equal to current guesses count (3,2,1)
        totalPoints += guesses;
        alert(`Correct! You earned ${guesses} point${guesses > 1 ? "s" : ""}.`);
        answeredCorrectly = true; // move to next question
      } else {
        guesses--; // lose one attempt
        if (guesses > 0) {
          alert(`Not correct. Try again. Attempts left: ${guesses}`);
        } else {
          alert(`Out of attempts. The correct answer was: ${answers[i]}`);
        }
      }
    }
  }

  // return the accumulated points for display
  return totalPoints;
}

// startQuiz will call quiz() and display the returned score on the page
function startQuiz() {
  const finalScore = quiz(); // call the quiz function (collects cumulative score)
  document.getElementById("result").textContent = finalScore;
}

// reset score display (doesn't change answers)
function resetScore() {
  document.getElementById("result").textContent = "0";
}

// wire up buttons after DOM loaded (script is at bottom so fine)
document.getElementById("startBtn").addEventListener("click", startQuiz);
document.getElementById("resetBtn").addEventListener("click", resetScore);
