import React, { useCallback, useContext, useEffect } from 'react';
import { BoardContext } from './context';
import styles from './styles.module.css';
import * as ACTIONS from './context/actions';
import { checkBoard, isFull } from './utils';

const Block = ({ rowIdx, colIdx, block }) => {
  const { board, dispatch, isEnd, isStarted } = useContext(BoardContext);

  const onClick = useCallback(
    (e) => {
      if (!isStarted) {
        alert('First, Select player!!');
        return;
      }
      if (isEnd || e.target.textContent) return;
      dispatch({ type: ACTIONS.UPDATE_BOARD, row: rowIdx, col: colIdx });
      dispatch({ type: ACTIONS.CHANGE_TURN });
    },
    [isStarted, rowIdx, colIdx, dispatch, isEnd]
  );

  // block 안에 내용이 바뀌는 경우만 보드 체크
  useEffect(() => {
    if (checkBoard(board, rowIdx, colIdx)) {
      dispatch({ type: ACTIONS.GAME_OVER });
    } else if (isFull(board)) {
      dispatch({ type: ACTIONS.DRAW_GAME });
    }
  }, [board, rowIdx, colIdx, dispatch]);

  return (
    <div className={styles.block} onClick={onClick}>
      {block}
    </div>
  );
};

export default React.memo(Block);
