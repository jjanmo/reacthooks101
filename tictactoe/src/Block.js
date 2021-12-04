const Block = ({ id, text, board, turn, setTurn, setBoard }) => {
  const styles = {
    block: {
      width: '100px',
      height: '100px',
      border: '1px solid black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '2rem',
      cursor: 'pointer',
    },
  };

  const onClick = () => {
    turn === 'O' ? setTurn('X') : setTurn('O');

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
  };

  return (
    <div style={styles.block} onClick={onClick}>
      {text}
    </div>
  );
};

export default Block;
