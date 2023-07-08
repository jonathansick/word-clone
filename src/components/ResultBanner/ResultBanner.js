import React from "react";

/**
 * Display the result of the game.
 */
function ResultBanner({ answer, guessCount, won }) {
  function renderMessage() {
    if (won) {
      return (
        <p>
          <strong>Congratulations!</strong> You got it in{" "}
          <strong>{guessCount} guesses</strong>.
        </p>
      );
    } else {
      return (
        <p>
          Sorry you lose, the answer is <strong>{answer}</strong>.
        </p>
      );
    }
  }

  return (
    <div className={`${won ? "happy" : "sad"} banner`}>{renderMessage()}</div>
  );
}

export default ResultBanner;
