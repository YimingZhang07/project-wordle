import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Guess from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guessArray, setGuessArray] = React.useState([]);

  function handleSubmitGuess( guess ){
    // we create a new guess object because later we will need a unique id for each guess
    const newGuess = {
      guess: guess,
      id: crypto.randomUUID(),
    }
    setGuessArray( (prevGuessArray) => [...prevGuessArray, newGuess] );
  }

  return (
    <>
      <GuessResults
        guessArray={guessArray}
      />
      <Guess
        handleSubmitGuess={handleSubmitGuess}
      />
    </>
  );
}

export default Game;
