import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { App } from 'containers';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <App/>,
    rootElement
);
