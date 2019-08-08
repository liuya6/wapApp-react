// import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
// import 'react-app-polyfill/ie9';
// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';
// import 'core-js'
import App from './App';
import "./style/index.less";
import { BrowserRouter  } from "react-router-dom"
import {Provider} from "react-redux"
import { store , persistor} from './store/store.js';
import { PersistGate } from 'redux-persist/es/integration/react';

import "lib-flexible" // todo 移动端适配
// require('es6-promise').polyfill();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,document.getElementById('root')
);
