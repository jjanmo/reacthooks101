import React from 'react';
import Block from './Block';
import styles from './styles.module.css';

const Row = ({ rowIdx, row }) => {
  return (
    <div className={styles.row}>
      {row.map((block, index) => (
        <Block key={index} rowIdx={rowIdx} colIdx={index} block={block} />
      ))}
    </div>
  );
};

export default React.memo(Row);
