import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { BoardContext } from './context';
import styles from './styles.module.css';
import * as ACTIONS from './context/actions';
import { checkBoard } from './utils';

const Block = ({ rowIdx, colIdx, block }) => {
  const { isEnd, board, dispatch } = useContext(BoardContext);
  const mounted = useRef(false);

  const onClick = useCallback(
    (e) => {
      if (isEnd || e.target.textContent) return;
      dispatch({ type: ACTIONS.UPDATE_BOARD, row: rowIdx, col: colIdx });
    },
    [rowIdx, colIdx, dispatch, isEnd]
  );

  // block 안에 내용이 바뀌는 경우만 보드 체크
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (checkBoard(board, rowIdx, colIdx)) {
        dispatch({ type: ACTIONS.GAME_OVER });
      } else {
        dispatch({ type: ACTIONS.CHANGE_TURN });
      }
    }
  }, [block]);

  return (
    <div className={styles.block} onClick={onClick}>
      {block}
    </div>
  );
};

export default React.memo(Block);
