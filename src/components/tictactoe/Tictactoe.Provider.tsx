import React, { useReducer } from 'react'
import { createContext } from 'react'

export const TictactoeContext = createContext(null)

export const BoardProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <TictactoeContext.Provider value={{ ...state, dispatch }}>{children}</TictactoeContext.Provider>
  )
}
