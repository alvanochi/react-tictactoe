import { Fragment, useState } from "react";
import Square from "../Elements/Square";
import calculateWinner from "../Elements/Calculate";
import Button from "../Elements/Button";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [xIsNext, setXIsNext] = useState(true);

  const handleButton = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSqaures = [...squares];
    xIsNext ? (nextSqaures[i] = "X") : (nextSqaures[i] = "O");
    setSquares(nextSqaures);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status = "";

  if (winner) {
    status = "Winner " + winner;
  } else if (squares.every((square) => square !== null)) {
    status = "Draw !";
  } else {
    status = "Player : " + (xIsNext ? "X" : "O");
  }

  const repeatGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <Fragment>
      <h1 className="mb-4 text-2xl">{status}</h1>
      <div className="flex flex-wrap w-[265px] h-[265px] ">
        {squares.map((square, index) => (
          //   <div className="box-border border-2 border-slate-800">
          <Square
            value={square}
            onClick={() => handleButton(index)}
            key={index}
          />
          //   </div>
        ))}
      </div>
      <Button onClick={repeatGame} />
    </Fragment>
  );
}

export default Board;
