import React from "react";

import { range } from "../../utils";

/**
 * Display an individual guess that has been submitted.
 */
function Guess({ validatedGuess }) {
  function renderEmptyGuess() {
    return range(5).map((index) => <span key={index} className='cell'></span>);
  }

  function renderGuess() {
    return range(validatedGuess.length).map((letterIndex) => (
      <span
        key={letterIndex}
        className={`cell ${validatedGuess[letterIndex].status}`}
      >
        {validatedGuess[letterIndex].letter}
      </span>
    ));
  }

  return (
    <p className='guess'>
      {validatedGuess ? renderGuess() : renderEmptyGuess()}
    </p>
  );
}

export default Guess;
