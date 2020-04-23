import React, { Suspense } from 'react'
import AOS from 'aos'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

import Routes from './routes'
import * as serviceWorker from './serviceWorker'
import { store, persistor } from './state'
import GlobalStyles from './GlobalStyles'
import 'aos/dist/aos.css'
import './style.scss'
import './i18n'

AOS.init()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyles />
      <Suspense fallback="loading">
        <ParallaxProvider>
          <HashRouter>{Routes}</HashRouter>
        </ParallaxProvider>
      </Suspense>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.register()
