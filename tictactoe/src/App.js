import { useContext, useEffect, useState } from 'react';
import { BoardContext } from './context';
import Board from './Board';
import './App.css';
import { checkBoard, getRandomPick } from './utils';

function App() {
  const { isEnd, turn } = useContext(BoardContext);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isEnd) {
      setMessage(`${turn} win`);
    }
  }, [isEnd]);

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
