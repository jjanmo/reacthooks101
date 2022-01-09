import { createContext, useReducer } from 'react';
import * as ACTIONS from './actions';

const initialState = {
  // 게임 정보
  board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  turn: 'O',
  isEnd: false,
  isDraw: false,

  // 설정
  player: 0,
  isStarted: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_BOARD: {
      const { row, col } = action;
      const newBoard = [...state.board];
      newBoard[row] = [...state.board[row]];
      newBoard[row][col] = state.turn;

      return {
        ...state,
        board: newBoard,
      };
    }
    case ACTIONS.CHANGE_TURN: {
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O',
      };
    }
    case ACTIONS.GAME_OVER: {
      return {
        ...state,
        isEnd: true,
      };
    }
    case ACTIONS.DRAW_GAME: {
      return {
        ...state,
        isDraw: true,
      };
    }
    case ACTIONS.RESTART_GAME: {
      return {
        ...state,
        board: [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
        turn: 'O',
        isEnd: false,
        isDraw: false,
      };
    }
    case ACTIONS.START_GAME: {
      return {
        ...state,
        player: action.player,
        isStarted: true,
      };
    }
    default:
      return state;
  }
};

export const BoardContext = createContext(null);

export const BoardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <BoardContext.Provider value={{ ...state, dispatch }}>{children}</BoardContext.Provider>;
};
