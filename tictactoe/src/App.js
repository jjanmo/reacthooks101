import { useState } from 'react';
import Board from './Board';
import './App.css';

function App() {
  const [turn, setTurn] = useState('O');
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  return (
    <div className="App">
      <Board board={board} turn={turn} setTurn={setTurn} setBoard={setBoard} />
      <div>
        <h1>{turn}</h1>
      </div>
    </div>
  );
}

export default App;
