import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Guess from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guessArray, setGuessArray] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function handleSubmitGuess( guess ){
    // we create a new guess object because later we will need a unique id for each guess
    const newGuess = {
      guess: guess,
      id: crypto.randomUUID(),
    }

    const nextGuessArray = [...guessArray, newGuess];
    // setGuessArray( (prevGuessArray) => [...prevGuessArray, newGuess] );
    setGuessArray( nextGuessArray );
    if( guess === answer ){
      setGameStatus("won");
    } else if( nextGuessArray.length >= NUM_OF_GUESSES_ALLOWED ){
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults
        guessArray={guessArray}
        answer={answer}
      />
      <Guess
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      { gameStatus === "won" && <WonBanner numOfGuesses={guessArray.length} /> }
      { gameStatus === "lost" && <LostBanner answer={answer} /> }
    </>
  );
}

export default Game;
