import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import List from './components/List';
import { useFetch } from './hooks';
import { date } from './utils';

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

function App() {
  const todos = useFetch('http://localhost:8080/todos');
  const [input, setInput] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const postTodos = async (todo) => {
    console.log('todo', todo);

    try {
      const data = {
        index: Date.now(),
        status: 'todo',
        contents: todo,
        createdAt: date.getTodayWithFormat(),
      };

      await axios.post('http://localhost:8080/todo', { data });
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postTodos(input);
  };

  return (
    <Wrapper>
      <Title>My ToDoApp</Title>
      <Form onChange={handleChange} input={input} onSubmit={handleSubmit} />
      <List todos={todos} />
    </Wrapper>
  );
}

export default App;
