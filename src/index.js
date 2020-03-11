import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store, persistor, history } from './state';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';
import './style.scss';
import './i18n';
import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Notable');
  body {
    font-family: 'Poppins', sans-serif;
    vertical-align: baseline;
    color:#fff;
    background-color: #000;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyles />
      <ConnectedRouter history={history}>{Routes}</ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
