import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './configureSture'
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';

let store = configureStore();

const ConnectedApp = () => {
  return (
    <Provider store={store} >
      <App />
    </Provider>
  );
}

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));
registerServiceWorker();
