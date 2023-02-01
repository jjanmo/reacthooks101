import { memo, useContext } from 'react'
import { BoardContext } from './context'
import Row from './Tictactoe.Row'

const Board = () => {
  // const { board } = useContext(BoardContext);
  return (
    // <div>
    //   {board.map((row, index) => (
    //     <Row key={index} rowIdx={index} row={row} />
    //   ))}
    // </div>
    <div></div>
  )
}

export default memo(Board)
