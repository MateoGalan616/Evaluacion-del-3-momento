import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FilmProvider } from './context/FilmContext';

ReactDOM.render(
  <React.StrictMode>
    <FilmProvider>
      <App />
    </FilmProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
