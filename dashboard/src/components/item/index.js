import React, { useContext } from 'react';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './item.module.css';
import Store from '../../contexts';

const Item = ({ id, text, seen }) => {
  const context = useContext(Store);

  return (
    <li className={`${styles.container} ${seen && styles.seen}`}>
      <div className={`${seen && styles.seenText}`}>{text}</div>
      <div>
        <button className={`${seen ? styles.seenButton : styles.doneButton}`} onClick={() => context.toggleItem(id)}>
          <FontAwesomeIcon icon={faCheck} size="2x" />
        </button>
        <button className={`${seen ? styles.seenButton : styles.deleteButton}`} onClick={() => context.deleteItem(id)}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </button>
      </div>
    </li>
  );
};

export default Item;
