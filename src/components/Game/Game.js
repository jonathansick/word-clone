import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    setGuesses((guesses) => [
      ...guesses,
      { guess: tentativeGuess, id: crypto.randomUUID() },
    ]);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      {guesses.length < NUM_OF_GUESSES_ALLOWED && (
        <GuessInput handleSubmitGuess={handleSubmitGuess} />
      )}
    </>
  );
}

export default Game;
