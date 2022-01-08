import { createContext, useReducer } from 'react';
import * as ACTIONS from './actions';

const initialState = {
  board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  turn: 'O',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_BOARD: {
      break;
    }
    default:
      break;
  }
};

export const BoardContext = createContext(null);

export const BoardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <BoardContext.Provider value={{ state, dispatch }}>{children}</BoardContext.Provider>;
};
