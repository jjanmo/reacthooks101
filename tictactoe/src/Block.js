import { memo, useCallback, useContext, useEffect, useRef } from 'react';
import { BoardContext } from './context';
import styles from './styles.module.css';
import * as ACTIONS from './context/actions';
import { checkBoard, isFull } from './utils';

const Block = memo(({ rowIdx, colIdx, block }) => {
  const { board, dispatch, isEnd, isStarted, player } = useContext(BoardContext);
  const blockRef = useRef(null);
  useEffect(() => {
    if (player === 1) {
      dispatch({ type: ACTIONS.INITIALIZE_BOARD, row: rowIdx, col: colIdx, elem: blockRef.current });
    }
  }, []);

  // block 안에 내용이 바뀌는 경우만 보드 체크
  useEffect(() => {
    if (checkBoard(board, rowIdx, colIdx)) {
      dispatch({ type: ACTIONS.GAME_OVER });
    } else if (isFull(board)) {
      dispatch({ type: ACTIONS.DRAW_GAME });
    } else if (typeof isFull(board) === 'boolean') {
      // 재시작 버튼을 눌렀을때 이 조건으로 들어오면 안된다.
      dispatch({ type: ACTIONS.CHANGE_TURN });
    }
  }, [board, rowIdx, colIdx, dispatch]);

  const onClick = useCallback(
    (e) => {
      if (!isStarted) {
        alert('First, Select player!!');
        return;
      }
      if (isEnd || e.target.textContent) return;

      dispatch({ type: ACTIONS.UPDATE_BOARD, row: rowIdx, col: colIdx });
    },
    [isStarted, rowIdx, colIdx, dispatch, isEnd]
  );

  return (
    <div ref={blockRef} className={styles.block} onClick={onClick}>
      {block.text}
    </div>
  );
});

export default Block;
