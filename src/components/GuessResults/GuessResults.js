import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

/**
 * Display the guesses that have been submitted.
 */
function GuessResults({ guesses }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((guessIndex) => (
        <Guess
          key={guessIndex}
          value={guesses.length > guessIndex ? guesses[guessIndex].guess : ""}
        />
      ))}
    </div>
  );
}

export default GuessResults;
