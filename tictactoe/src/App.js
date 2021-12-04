import Board from './Board';
import './App.css';

function App() {
  const board = [
    [{}, {}, {}],
    [{}, {}, {}],
    [{}, {}, {}],
  ];

  return (
    <div className="App">
      <Board board={board} />
      <div>
        <h1>Hello World</h1>
      </div>
    </div>
  );
}

export default App;
