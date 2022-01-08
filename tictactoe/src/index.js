import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BoardProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <BoardProvider>
      <App />
    </BoardProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
