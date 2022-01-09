import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { BoardContext } from './context';
import Board from './Board';
import './App.css';
import * as ACTIONS from './context/actions';
import styles from './styles.module.css';
import { selectRandomBlock } from './utils';

function App() {
  const { board, dispatch, isEnd, isDraw, player, turn } = useContext(BoardContext);
  const [message, setMessage] = useState('');
  const selectedValue = useRef(0);

  useEffect(() => {
    if (isEnd) {
      setMessage(`${turn} win`); // 블록 클릭을 하면 turn 변경되기 때문에 이긴 경우는 바뀌기 전의 값을 줘야한다.
    } else if (isDraw) {
      setMessage('Draw!!');
    }
  }, [isDraw, isEnd, turn]);

  // solo play에서의 컴퓨터턴
  useEffect(() => {
    if (player === 1 && turn === 'X' && !isDraw && !isEnd) {
      const [row, col] = selectRandomBlock(board);
      if (row !== -1 && col !== -1) board[row][col].elem.click();
    }
  }, [isDraw, isEnd, turn]);

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
      alert('Game Start!!');
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
