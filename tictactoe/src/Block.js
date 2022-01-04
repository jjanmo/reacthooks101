import React, { useCallback } from 'react';
import styles from './styles.module.css';

const Block = ({ id, text, board, turn, setTurn, setBoard }) => {
  const onClick = useCallback(() => {
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

    turn === 'O' ? setTurn('X') : setTurn('O');
  }, [turn]);

  return (
    <div className={styles.block} onClick={onClick}>
      {text}
    </div>
  );
};

export default Block;
