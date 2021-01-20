import App from './App';
import ioc from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.scss';

// temporary server endpoint
export const clientIO = ioc.connect("https://puzzlooza.herokuapp.com/")

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
