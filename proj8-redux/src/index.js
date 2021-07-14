import React from 'react';
import ReactDOM from 'react-dom';
// this is what hooks in redux
import { Provider } from 'react-redux';
// this is what generates the store
import { createStore } from 'redux';

import App from './components/App';
// this is what you pass into createStore() to generate your state
import reducers from './reducers';

ReactDOM.render(
  <Provider
    // creating the store and enabling redux devtools
    store={createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
    <App />
  </Provider>,
  document.getElementById('root')
);
