import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// like anything else you need to wire thunk up for it
// to function, see applyMiddleware above and thunk below
import thunk from 'redux-thunk';
// rather than writing in that awkward window line use this component
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';
import reducers from './reducers';

// extracting store creation to its own var for ease of use
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
