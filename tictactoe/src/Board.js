import { useContext } from 'react';
import { BoardContext } from './context';
import Row from './Row';
import styles from './styles.module.css';

const Board = () => {
  const { board } = useContext(BoardContext);
  console.log(board);
  return (
    <div className={styles.board}>
      {board.map((row, index) => (
        <Row key={index} rowIdx={index} row={row} />
      ))}
    </div>
  );
};

export default Board;
