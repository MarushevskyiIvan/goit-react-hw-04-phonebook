import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import { NewApp } from './components/NewApp';
import './GlobalStaled.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <NewApp />
  </React.StrictMode>
);
