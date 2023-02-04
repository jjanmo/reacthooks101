import React, { useContext } from 'react';
import Item from '../item';
import styles from './list.module.css';
import Store from '../../contexts';

const List = () => {
  const { items } = useContext(Store);

  return (
    <ul className={styles.container}>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default List;
