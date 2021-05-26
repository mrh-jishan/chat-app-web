import actionCable from 'actioncable';
import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const API_WS_ROOT = 'ws://localhost:3000/cable'

const CableApp = {}

CableApp.cable = actionCable.createConsumer(API_WS_ROOT)

ReactDOM.render(
  <React.StrictMode>
    <App cableApp={CableApp} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
