import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './pages/App';
import * as serviceWorker from './services/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
