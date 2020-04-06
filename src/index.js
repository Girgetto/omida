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
import GlobalStyles from './GlobalStyles';

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
