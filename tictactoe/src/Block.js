const Block = ({ item }) => {
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

  return <div style={styles.block}>{item.text}</div>;
};

export default Block;
