import React from 'react';
import Item from '../item';
import styles from './list.module.css';

const List = () => {
  const list = [
    {
      id: 1,
      text: 'helloooo',
    },
    {
      id: 2,
      text: 'Context~~API',
    },
    {
      id: 3,
      text: 'so EASYYYYYY!!',
    },
  ];

  return (
    <ul className={styles.container}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default List;
