import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/js/bootstrap.min';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as log from 'loglevel';
import reducer from './redux-store/reducers';
import api from './api';
import './style.scss';
import Index from './pages';
import reportWebVitals from './reportWebVitals';

let middleware = [thunk.withExtraArgument({api})];

if(process.env.NODE_ENV === 'development'){
  log.enableAll();
  middleware = [...middleware, createLogger()];
}

ReactDOM.render(
  <Provider store={createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)))}>
    <Index />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
