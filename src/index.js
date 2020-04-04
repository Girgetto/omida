import React, { Suspense } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { store, persistor, history } from './state';
import Routes from './routes';
import './style.scss';
import './i18n';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Notable');
  body {
    font-family: 'Poppins', sans-serif;
    vertical-align: baseline;
    color:#fff;
    background-color: #000;
  }

  h1 {
    font-size: 3rem;
    font-weight: 100;
    line-height: 4rem;
  }

  p {
    font-weight: 100;
    color: rgba(255,255,255,0.6);
  }
`;
AOS.init();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyles />
      <Suspense fallback="loading">
        <ConnectedRouter history={history}>{Routes}</ConnectedRouter>
      </Suspense>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
