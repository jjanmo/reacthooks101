import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Form from './components/Form';
import List from './components/List';

const Wrapper = styled.div`
  margin: 2rem auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 80vh;
  background-color: #eee;
  border-radius: 10px;
`;

const Title = styled.h1`
  color: #2c3e50;
  margin: 1rem 0;
`;

const fetchTodos = async (callback) => {
  try {
    const result = await axios('http://localhost:1234/todos');
    callback(result.data);
  } catch (e) {
    console.log(e);
  }
};

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos(setTodos);
  }, []);

  return (
    <Wrapper className="App">
      <Title>My ToDoApp</Title>
      <Form />
      <List todos={todos} />
    </Wrapper>
  );
}

export default App;
