import { useEffect, useState } from 'react';
import Board from './Board';
import './App.css';
import { getRandomPick } from './utils';

function App() {
  const [turn, setTurn] = useState('O');
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [message, setMessage] = useState('');
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    // 컴퓨터 턴
    if (!isEnd && turn === 'X') {
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
  }, [board, isEnd, turn]);

  useEffect(() => {
    if (isEnd) {
      setMessage(`${turn} Win`);
    }
  }, [isEnd, turn]);

  return (
    <div className="App">
      <Board board={board} turn={turn} setTurn={setTurn} setBoard={setBoard} setIsEnd={setIsEnd} isEnd={isEnd} />
      <div>
        <h1>{message}</h1>
      </div>
    </div>
  );
}

export default App;
