import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router';
import { App } from 'containers';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Router history = {browserHistory}>
        <Route path = "/" component = {App}>
        </Route>
    </Router>,rootElement);

