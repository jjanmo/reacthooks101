import React, { memo } from 'react';
import { getColor } from './utils';

const Ball = memo(({ number }) => {
  console.log('ball');
  const backgroundColor = getColor(number);

  const styles = {
    ball: {
      backgroundColor,
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
});

export default Ball;
