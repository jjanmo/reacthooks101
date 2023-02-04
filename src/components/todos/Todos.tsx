import { TodosProvider } from 'src/contexts/todos'
import styled from 'styled-components'
import Form from './Todos.Form'
import Header from './Todos.Header'
import List from './Todos.List'

export default function Todos() {
  return (
    <TodosProvider>
      <Container>
        <Form />
        <Header />
        <List />
      </Container>
    </TodosProvider>
  )
}

const Container = styled.div`
  width: 400px;
  height: 650px;
  background-color: #ffcccc;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`
