import { useEffect, useState } from 'react';
import Board from './Board';
import './App.css';
import { getRandomPick, checkBoard } from './utils';

function App() {
  const [turn, setTurn] = useState('O');
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // 검사 : 틱톡 검사
    if (checkBoard(board)) {
      setMessage(`${turn === 'O' ? 'X' : 'O'} Win`);

      //끝
    }

    if (turn === 'X') {
      const [i, j] = getRandomPick(board);

      const updatedBoard = board.map((row, index) => {
        if (index === i) {
          return row.map((block, index) => {
            if (index === j) return turn;
            else return block;
          });
        } else {
          return row;
        }
      });

      setBoard(updatedBoard);
      setTurn('O');
    }
  }, [turn]);

  return (
    <div className="App">
      <Board board={board} turn={turn} setTurn={setTurn} setBoard={setBoard} />
      <div>
        <h1>{message}</h1>
      </div>
    </div>
  );
}

export default App;
