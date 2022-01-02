import React from 'react';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCog, faUser } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.button}>
          <FontAwesomeIcon icon={faUser} size="2x" />
        </div>
        <div className={styles.button}>
          <FontAwesomeIcon icon={faCog} size="2x" />
        </div>
        <div className={styles.button}>
          <FontAwesomeIcon icon={faBell} size="2x" />
          <span className={styles.number}>2</span>
        </div>
      </div>
    </>
  );
};

export default Header;
