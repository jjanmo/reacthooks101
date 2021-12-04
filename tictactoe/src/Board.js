import Block from './Block';

const Board = ({ board, turn, setTurn, setBoard }) => {
  const styles = {
    board: {
      border: '1px solid black',
      width: '300px',
      marginBottom: '20px',
    },
    row: {
      display: 'flex',
    },
  };

  return (
    <div style={styles.board}>
      {board.map((row, i) => (
        <div key={i} style={styles.row}>
          {row.map((text, j) => (
            <Block
              key={`${i}${j}`}
              id={`${i}${j}`}
              text={text}
              turn={turn}
              board={board}
              setTurn={setTurn}
              setBoard={setBoard}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
