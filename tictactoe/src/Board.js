import Block from './Block';
import styles from './styles.module.css';

const Board = ({ board, turn, setTurn, setBoard, isEnd }) => {
  return (
    <div className={styles.board}>
      {board.map((row, i) => (
        <div key={i} className={styles.row}>
          {row.map((text, j) => (
            <Block
              key={`${i}${j}`}
              id={`${i}${j}`}
              text={text}
              turn={turn}
              board={board}
              setTurn={setTurn}
              setBoard={setBoard}
              isEnd={isEnd}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
