import { useEffect, useState } from 'react';
import Board from './Board';
import './App.css';
import { checkBoard, getRandomPick } from './utils';

function App() {
  const [message, setMessage] = useState('');
  const [isEnd, setIsEnd] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  // useEffect(() => {
  //   // 컴퓨터 턴
  //   if (!isEnd && turn === 'X') {
  //     const picked = getRandomPick(board);

  //     if (typeof picked === 'boolean') {
  //       //draw 로직
  //       setIsEnd(true);
  //       setIsDraw(true);
  //     } else {
  //       const [i, j] = picked;
  //       const updatedBoard = board.map((row, index) => {
  //         if (index === i) {
  //           return row.map((block, index) => {
  //             if (index === j) return turn;
  //             else return block;
  //           });
  //         } else {
  //           return row;
  //         }
  //       });
  //       setBoard(updatedBoard);

  //       // 승부 체크
  //       if (checkBoard(updatedBoard)) {
  //         setIsEnd(true);
  //       } else {
  //         setTurn('O');
  //       }
  //     }
  //   }
  // }, [board, isEnd, turn]);

  // useEffect(() => {
  //   if (isEnd) {
  //     setMessage(`${isDraw ? 'Draw!!' : `${turn} Win`}`);
  //   }
  // }, [isEnd, turn, isDraw]);

  return (
    <div className="App">
      <Board />
      <div>
        <h1>{message}</h1>
      </div>
    </div>
  );
}

export default App;
