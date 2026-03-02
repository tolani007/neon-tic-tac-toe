const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let gameState = {
  board: Array(9).fill(''),
  currentPlayer: 'X',
  winner: null,
  isDraw: false,
  winningLine: null
};

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

function checkWinner(board) {
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: combo };
    }
  }
  return null;
}

app.get('/api/state', (req, res) => {
  res.json(gameState);
});

app.post('/api/move', (req, res) => {
  const { index } = req.body;
  if (gameState.winner || gameState.isDraw || gameState.board[index] !== '') {
    return res.status(400).json({ error: 'Invalid move' });
  }

  gameState.board[index] = gameState.currentPlayer;
  
  const winResult = checkWinner(gameState.board);
  if (winResult) {
    gameState.winner = winResult.winner;
    gameState.winningLine = winResult.line;
  } else if (!gameState.board.includes('')) {
    gameState.isDraw = true;
  } else {
    gameState.currentPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X';
  }

  res.json(gameState);
});

app.post('/api/reset', (req, res) => {
  gameState = {
    board: Array(9).fill(''),
    currentPlayer: 'X',
    winner: null,
    isDraw: false,
    winningLine: null
  };
  res.json(gameState);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Neon Tic-Tac-Toe server is running on http://localhost:${PORT}`);
});
