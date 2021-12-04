import Block from './Block';

const Board = ({ board }) => {
  console.log(board.map((row) => row.map((item) => <Block turn={item} />)));

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
          {row.map((item, j) => (
            <Block key={`${i}${j}`} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
