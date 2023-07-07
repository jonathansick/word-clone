import React from "react";

/**
 * The form for entering a guess.
 */
function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function submitGuess(event) {
    event.preventDefault();
    console.log({ tentativeGuess });
    // Submit the guess to the game.
    handleSubmitGuess(tentativeGuess);
    // Clear the input after submitting.
    setTentativeGuess("");
  }

  function updateTentativeGuess(event) {
    const nextTentativeGuess = event.target.value.toUpperCase();
    if (nextTentativeGuess.length > 5) {
      // Don't allow guesses longer than 5 characters.
      return tentativeGuess;
    }
    setTentativeGuess(nextTentativeGuess);
  }

  return (
    <form className='guess-input-wrapper' onSubmit={submitGuess}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        required
        minLength='5'
        maxLength='5'
        pattern='[a-zA-Z]{5}'
        value={tentativeGuess}
        onChange={updateTentativeGuess}
      />
    </form>
  );
}

export default GuessInput;
