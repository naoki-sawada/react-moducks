import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import Main from './components/Main';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('main'),
);
