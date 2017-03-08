import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { About, App, Category, Init } from 'containers';
import reducers from 'reducers';
import thunk from 'redux-thunk';

const rootElement = document.getElementById('root');
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Init}/>
        <Route path="about" component={About}/>
        <Route path=":categoryName" component={Category}/>
      </Route>
    </Router>
  </Provider>,
  rootElement
);
