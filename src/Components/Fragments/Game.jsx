import Board from "./Board";

const Game = (squares) => {
  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  };

  const handlePlay = (nextSqaures) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSqaures];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const moves = history.map((squares, move) => {
    let desc = "";

    if (move > 0) {
      desc = "Go to move #" + move;
    } else {
      desc = "Go to game start";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <>
      <Board xIsNext={xIsNext} sqares={squares} onPlay={handlePlay} />
      <div>
        <ol>{moves}</ol>
      </div>
    </>
  );
};

export default Game;
