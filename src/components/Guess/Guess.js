import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return (
    <span className={className}>
      {letter}
    </span>
  );
}

function Guess({ value, answer }) {
  const result = value ? checkGuess(value.guess, answer) : null;
  return (
    <p>
      {
        <span className="guess">
          {range(5).map((index) => (
            <Cell 
            key={index}
            letter={result ? result[index].letter : undefined}
            status={result ? result[index].status : undefined}
            />
          ))}
        </span>
      }
    </p>
  );
}

export default Guess;
