import React from 'react';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './item.module.css';

const Item = ({ text }) => {
  return (
    <li className={styles.container}>
      <div>{text}</div>
      <div>
        <button className={styles.doneButton}>
          <FontAwesomeIcon icon={faCheck} size="2x" />
        </button>
        <button className={styles.deleteButton}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </button>
      </div>
    </li>
  );
};

export default Item;
