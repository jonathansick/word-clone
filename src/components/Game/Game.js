import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import ResultBanner from "../ResultBanner";

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  function handleSubmitGuess(tentativeGuess) {
    console.log(checkGuess(tentativeGuess, answer));
    setGuesses((guesses) => [
      ...guesses,
      {
        guess: tentativeGuess,
        id: crypto.randomUUID(),
        validation: checkGuess(tentativeGuess, answer),
      },
    ]);
  }

  function handleResetGame() {
    setAnswer(sample(WORDS));
    setGuesses([]);
  }

  /*
   * Render out either the guess entry or the final score.
   */
  function renderScore() {
    if (guesses.length && guesses[guesses.length - 1].guess === answer) {
      return (
        <ResultBanner
          answer={answer}
          guessCount={guesses.length}
          won
          handleResetGame={handleResetGame}
        />
      );
    } else if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      return (
        <ResultBanner
          answer={answer}
          guessCount={guesses.length}
          handleResetGame={handleResetGame}
        />
      );
    } else {
      return <GuessInput handleSubmitGuess={handleSubmitGuess} />;
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      {renderScore()}
    </>
  );
}

export default Game;
