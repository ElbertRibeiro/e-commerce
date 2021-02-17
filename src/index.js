import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/global';
import Routes from './router/routes';


ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);