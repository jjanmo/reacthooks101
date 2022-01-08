import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { BoardContext } from './context';
import styles from './styles.module.css';
import * as ACTIONS from './context/actions';
import { checkBoard } from './utils';

const Block = ({ rowIdx, colIdx, block }) => {
  const { dispatch } = useContext(BoardContext);

  const onClick = useCallback(
    (e) => {
      dispatch({ type: ACTIONS.UPDATE_BOARD, row: rowIdx, col: colIdx });
      dispatch({ type: ACTIONS.CHANGE_TURN });
      // if (isEnd || e.target.textContent) return;

      // const [rowIdx, colIdx] = id.split('');
      // const _board = board.map((row, index) => {
      //   if (index === Number(rowIdx)) {
      //     return row.map((item, index) => {
      //       if (index === Number(colIdx)) {
      //         return turn;
      //       }
      //       return item;
      //     });
      //   } else return [...row];
      // });
      // setBoard(_board);

      // // 승부 체크
      // if (checkBoard(_board)) {
      //   setIsEnd(true);
      // } else {
      //   setTurn('X');
      // }
    },
    [rowIdx, colIdx, dispatch]
  );

  return (
    <div className={styles.block} onClick={onClick}>
      {block}
    </div>
  );
};

export default React.memo(Block);
