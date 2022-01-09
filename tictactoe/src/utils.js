export const checkBoard = (board, row, col) => {
  let isWin = false;

  if (
    (board[row][0].text &&
      board[row][1].text &&
      board[row][2].text &&
      board[row][0].text === board[row][1].text &&
      board[row][1].text === board[row][2].text) ||
    (board[0][col].text &&
      board[1][col].text &&
      board[2][col].text &&
      board[0][col].text === board[1][col].text &&
      board[1][col].text === board[2][col].text) ||
    (board[0][0].text &&
      board[1][1].text &&
      board[2][2].text &&
      board[0][0].text === board[1][1].text &&
      board[1][1].text === board[2][2].text) ||
    (board[2][0].text &&
      board[1][1].text &&
      board[0][2].text &&
      board[2][0].text === board[1][1].text &&
      board[1][1].text === board[0][2].text)
  ) {
    isWin = true;
  }

  return isWin;
};

export const isFull = (board) => {
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j].text) count++;
    }
  }
  // count === 0 : 시작하는 경우와 게임도중을 구분하기 위한 방법 by type
  return count === 9 ? true : count === 0 ? '' : false;
};

export const selectRandomBlock = (board) => {
  if (isFull(board)) return [-1, -1];
  while (true) {
    const row = Math.floor(Math.random() * 3);
    const col = Math.floor(Math.random() * 3);
    if (!board[row][col].text) {
      return [row, col];
    }
  }
};
