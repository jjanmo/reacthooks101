import React, { createContext, useContext, useState } from 'react'

export type Status = 'TODO' | 'DOING' | 'DONE'
export interface Todo {
  id: number
  text: string
  status: Status
}
interface TodosContextType {
  todos: Todo[]
  deleteTodo: (id: number) => void
  addTodo: (text: string) => void
}

const TodosContext = createContext({} as TodosContextType)

export default function useTodosContext() {
  return useContext(TodosContext)
}

export function TodosProvider({ children }: { children: React.ReactNode }) {
  const [hidden, setHidden] = useState(true)
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: 'hello world',
      status: 'TODO',
    },
  ])

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  const addTodo = (text: string) => {
    const newTodos: Todo[] = [
      ...todos,
      {
        id: Date.now(),
        text,
        status: 'TODO',
      },
    ]
    setTodos(newTodos)
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        deleteTodo,
        addTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}
