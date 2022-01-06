import React, { useCallback } from 'react';
import styles from './styles.module.css';
import { checkBoard } from './utils';

const Block = ({ id, text, board, turn, setTurn, setBoard, setIsEnd, isEnd }) => {
  const onClick = useCallback(() => {
    if (isEnd) return;

    const [rowIdx, colIdx] = id.split('');
    const _board = board.map((row, index) => {
      if (index === Number(rowIdx)) {
        return row.map((item, index) => {
          if (index === Number(colIdx)) {
            return turn;
          }
          return item;
        });
      } else return [...row];
    });
    setBoard(_board);

    // 승부 체크
    if (checkBoard(_board)) {
      setIsEnd(true);
    } else {
      setTurn('X');
    }
  }, [isEnd, id, board, setBoard, turn, setIsEnd, setTurn]);

  return (
    <div className={styles.block} onClick={onClick}>
      {text}
    </div>
  );
};

export default React.memo(Block);
