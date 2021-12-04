import React from 'react';

const Ball = ({ number, color }) => {
  const styles = {
    ball: {
      backgroundColor: color,
      color: '#fff',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '20px',
      margin: '10px',
    },
  };

  return <div style={styles.ball}>{number}</div>;
};

export default Ball;
