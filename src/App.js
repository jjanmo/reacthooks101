import React from 'react';
import styled from 'styled-components';
import Form from './components/Form';

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
  return (
    <Wrapper className="App">
      <Title>My ToDoApp</Title>
      <Form />
    </Wrapper>
  );
}

export default App;
