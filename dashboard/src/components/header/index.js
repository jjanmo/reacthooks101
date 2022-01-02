import React, { useCallback, useContext } from 'react';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCog, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import Store from '../../contexts';

const Header = () => {
  const context = useContext(Store);

  const onClickAdd = useCallback(() => {
    context.toggleForm();
  }, [context]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.button} onClick={onClickAdd}>
          <FontAwesomeIcon icon={faPlus} size="2x" />
        </div>
        <div className={styles.button}>
          <FontAwesomeIcon icon={faUser} size="2x" />
        </div>
        <div className={styles.button}>
          <FontAwesomeIcon icon={faCog} size="2x" />
        </div>
        <div className={styles.button}>
          <FontAwesomeIcon icon={faBell} size="2x" />
          <span className={styles.number}>{context.items.filter((item) => !item.seen).length}</span>
        </div>
      </div>
    </>
  );
};

export default Header;
