export const getRandomPick = (board) => {
  while (true) {
    const i = Math.floor(Math.random() * 3);
    const j = Math.floor(Math.random() * 3);
    if (!board[i][j]) {
      console.log('2️⃣2️⃣2️⃣2️⃣');
      return [i, j];
    }
  }
};

export const checkBoard = (board) => {
  let isWin = false;

  for (let i = 0; i < 3; i++) {
    if (board[i][0] && board[i][1] && board[i][2] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      isWin = true;
    } else if (
      board[0][i] &&
      board[1][i] &&
      board[2][i] &&
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i]
    ) {
      isWin = true;
    }
  }

  if (board[0][0] && board[1][1] && board[2][2] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    isWin = true;
  } else if (board[2][0] && board[1][1] && board[0][2] && board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
    isWin = true;
  }

  return isWin;
};
