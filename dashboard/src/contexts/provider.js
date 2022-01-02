import React, { useState } from 'react';
import Store from '.';

const Provider = ({ children }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: 'hello~~~',
      seen: false,
    },
    {
      id: 2,
      text: 'world!!',
      seen: false,
    },
    {
      id: 3,
      text: 'Good Context API',
      seen: false,
    },
  ]);

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  const toggleItem = (id) => {
    const newItems = items.map((item) => (item.id === id ? { ...item, seen: !item.seen } : item));
    setItems(newItems);
  };

  const initialValue = {
    items,
    deleteItem,
    toggleItem,
  };

  return <Store.Provider value={initialValue}>{children}</Store.Provider>;
};

export default Provider;
