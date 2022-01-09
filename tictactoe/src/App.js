import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { BoardContext } from './context';
import Board from './Board';
import './App.css';
import * as ACTIONS from './context/actions';
import styles from './styles.module.css';

function App() {
  const state = useContext(BoardContext);
  const { isEnd, isDraw, turn, dispatch } = useContext(BoardContext);
  const [message, setMessage] = useState('');
  const selectedValue = useRef(0);

  console.log(state);

  useEffect(() => {
    if (isEnd) {
      setMessage(`${turn === 'O' ? 'X' : 'O'} win`); // 블록 클릭을 하면 turn 변경되기때문에 이긴 경우는 바뀌기 전의 값을 줘야한다.
    } else if (isDraw) {
      setMessage('Draw!!');
    }
  }, [isDraw, isEnd, turn]);

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

  const onChange = useCallback((e) => {
    selectedValue.current = e.target.value;
  }, []);

  const onClickStart = useCallback(() => {
    const selected = Number(selectedValue.current);
    if (selected === 0) {
      alert('First, Select player!!');
      return;
    } else {
      dispatch({ type: ACTIONS.START_GAME, player: selected });
    }
  }, []);

  const onClickRestart = useCallback(() => {
    dispatch({ type: ACTIONS.RESTART_GAME });
    setMessage('');
  }, []);

  return (
    <div className="App">
      <div>
        <select className={styles.select} onChange={onChange}>
          <option value="">Choose player</option>
          <option value="1">Solo Play</option>
          <option value="2">Multi Play</option>
        </select>
        <button className={styles.button} onClick={onClickStart}>
          Start
        </button>
      </div>
      <Board />
      {message && (
        <div>
          <h1>{message}</h1>
          <button className={styles.button} onClick={onClickRestart}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
