import React from "react";

/**
 * The form for entering a guess.
 */
function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function submitGuess(event) {
    event.preventDefault();
    console.log({ guess });
    // Clear the input after submitting.
    setGuess("");
  }

  function updateGuess(event) {
    const nextGuess = event.target.value.toUpperCase();
    if (nextGuess.length > 5) {
      // Don't allow guesses longer than 5 characters.
      return guess;
    }
    setGuess(nextGuess);
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
        value={guess}
        onChange={updateGuess}
      />
    </form>
  );
}

export default GuessInput;
