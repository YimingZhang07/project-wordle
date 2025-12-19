import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <p>
      {
        <span className="guess">
          {range(5).map((index) => (
            <span key={index} className="cell">
              {value ? value.guess[index] : undefined}
            </span>
          ))}
        </span>
      }
    </p>
  );
}

export default Guess;
