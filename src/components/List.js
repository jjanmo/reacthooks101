import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
  margin: 1rem;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin: 0 0.5rem;
`;

const List = ({ todos }) => {
  return (
    <>
      {todos && todos.length > 0 && (
        <Container>
          {todos.map((todo, index) => (
            <Item key={index}>
              <Checkbox type="checkbox" />
              <div>{todo.contents}</div>
            </Item>
          ))}
        </Container>
      )}
    </>
  );
};

export default List;
