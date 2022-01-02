import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Provider from './contexts/provider';
import './index.css';
import './reset.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
