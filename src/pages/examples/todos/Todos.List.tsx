import React, { useContext } from 'react'
import Item from './Todos.Item'
import styles from './list.module.css'
import styled from 'styled-components'
import useTodosContext from 'src/contexts/todos'

const List = () => {
  const { todos } = useTodosContext()

  return (
    <Container>
      {todos.map((todo) => (
        <Item key={todo.id} {...todo} />
      ))}
    </Container>
  )
}

export default List

const Container = styled.ul`
  width: 94%;
  height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 3%;
  padding: 10px 0;
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: auto;
`
