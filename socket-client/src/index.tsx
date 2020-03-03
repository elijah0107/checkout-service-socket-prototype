import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Connector';
import * as SocketApiModule from './service/socketIo/Api';
import { Provider } from 'react-redux';
import {cookies, queryParams} from "./helpers/request";
import reducer from './reducers/_index';
import { createWatcher } from './sagas/_index';
import { createAPI } from './service/api';
import { createStore } from './service/store';
import { createBrowserHistory } from 'history';

SocketApiModule.create('http://localhost:8400');
const api = SocketApiModule.get();
api.connectListeners();
api.setQueryParams({
  params: queryParams(),
  cookies: cookies(),
});
const history = createBrowserHistory();
const store = createStore(reducer, createWatcher({
  api: createAPI(),
  history,
}));
const markup = new Promise((resolve) => {
  ReactDOM.render((
      <Provider store={store}>
        <App />
      </Provider>
  ), document.getElementById('root'));
  resolve();
});
markup.then(() => {
  api.commandInit();
});
