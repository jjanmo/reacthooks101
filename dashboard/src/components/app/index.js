import React from 'react';
import Form from '../form';
import Header from '../header';
import List from '../list';
import styles from './app.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Form />
      <Header />
      <List />
    </div>
  );
};

export default App;
