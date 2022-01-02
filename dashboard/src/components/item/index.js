import React from 'react';
import styles from './item.module.css';

const Item = ({ text }) => {
  return (
    <li className={styles.container}>
      <div>{text}</div>
      <div>
        <button className={styles.doneButton}>Done</button>
        <button className={styles.deleteButton}>Delete</button>
      </div>
    </li>
  );
};

export default Item;
