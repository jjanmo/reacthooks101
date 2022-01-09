export const checkBoard = (board, row, col) => {
  let isWin = false;

  if (
    (board[row][0] &&
      board[row][1] &&
      board[row][2] &&
      board[row][0] === board[row][1] &&
      board[row][1] === board[row][2]) ||
    (board[0][col] &&
      board[1][col] &&
      board[2][col] &&
      board[0][col] === board[1][col] &&
      board[1][col] === board[2][col]) ||
    (board[0][0] && board[1][1] && board[2][2] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
    (board[2][0] && board[1][1] && board[0][2] && board[2][0] === board[1][1] && board[1][1] === board[0][2])
  ) {
    isWin = true;
  }

  return isWin;
};

export const isFull = (board) => {
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j]) count++;
    }
  }

  return count === 9 ? true : false;
}

