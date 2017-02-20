import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { App } from 'containers';
import reducers from 'reducers';
import thunk from 'redux-thunk';

const rootElement = document.getElementById('root');
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
);
