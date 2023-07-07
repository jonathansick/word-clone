import React from "react";

/**
 * Display the guesses that have been submitted.
 */
function GuessResults({ guesses }) {
  return (
    <div className='guess-results'>
      {guesses.map((guess) => (
        <p key={guess.id} className='guess'>
          {guess.guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
