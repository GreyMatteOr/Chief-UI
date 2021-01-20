import App from './App';
import ioc from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';
import './Styling/index.scss';

// temporary server endpoint
export const clientIO = ioc.connect("https://puzzlooza.herokuapp.com/")
clientIO.on( 'connect', (state) => {
  console.log('Connected to server. ID:', clientIO.id);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
