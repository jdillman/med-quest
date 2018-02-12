import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './configureStore';

import './index.css';
import App from './App';

const store = configureStore();

/* eslint-disable react/jsx-filename-extension */
const ConnectedApp = () => (
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));
