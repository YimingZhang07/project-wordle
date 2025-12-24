import React from "react";

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [guessTerm, setGuessTerm] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // log the uppercase value of the input field to the console
    console.info({ guessTerm });
    handleSubmitGuess(guessTerm);
    setGuessTerm("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guessTerm}
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        title="Must be exactly 5 characters"
        onChange={(event) => {
          // convert input value to uppercase when the user types
          setGuessTerm(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
