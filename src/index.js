import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import './index.css';
import App from './App';

const store = configureStore();

/* eslint-disable react/jsx-filename-extension */
const ConnectedApp = () => (
  <Provider store={store} >
    <App />
  </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));
