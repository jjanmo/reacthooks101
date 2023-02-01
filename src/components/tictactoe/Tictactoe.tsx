import { useRef, useCallback, useEffect, useContext, useState } from 'react'
import Board from './Tictactoe.Board'

export default function Tictactoe() {
  // const { board, dispatch, isEnd, isDraw, player, turn } = useContext(BoardContext);
  const [message, setMessage] = useState('')
  const selectedValue = useRef(0)

  // useEffect(() => {
  //   if (isEnd) {
  //     setMessage(`${turn} win`); // 블록 클릭을 하면 turn 변경되기 때문에 이긴 경우는 바뀌기 전의 값을 줘야한다.
  //   } else if (isDraw) {
  //     setMessage('Draw!!');
  //   }
  // }, [isDraw, isEnd, turn]);

  // solo play에서의 컴퓨터턴
  // useEffect(() => {
  //   if (player === 1 && turn === 'X' && !isDraw && !isEnd) {
  //     const [row, col] = selectRandomBlock(board);
  //     if (row !== -1 && col !== -1) board[row][col].elem.click();
  //   }
  // }, [isDraw, isEnd, turn]);

  // const onChange = useCallback((e) => {
  //   selectedValue.current = e.target.value;
  // }, []);

  // const onClickStart = useCallback(() => {
  //   const selected = Number(selectedValue.current);
  //   if (selected === 0) {
  //     alert('First, Select player!!');
  //     return;
  //   } else {
  //     dispatch({ type: ACTIONS.START_GAME, player: selected });
  //     alert('Game Start!!');
  //   }
  // }, []);

  // const onClickRestart = useCallback(() => {
  //   dispatch({ type: ACTIONS.RESTART_GAME });
  //   setMessage('');
  // }, []);

  return (
    <div>
      <div>
        <select>
          <option value="">Choose player</option>
          <option value="1">Solo Play</option>
          <option value="2">Multi Play</option>
        </select>
        <button>Start</button>
      </div>
      <Board />
      {message && (
        <div>
          <h1>{message}</h1>
          <button>Restart</button>
        </div>
      )}
    </div>
  )
}
