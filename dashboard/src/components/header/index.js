import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <div>Profile</div>
        <div>Config</div>
        <div>Notifi</div>
      </div>
      <div className={styles.line} />
    </>
  );
};

export default Header;
