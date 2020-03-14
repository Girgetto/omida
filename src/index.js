import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
AOS.init();
// AOS.init({
//   // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: 'aos-init', // class applied after initialization
//   animatedClassName: 'aos-animate', // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
// });

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
