import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import todoApp from './reducers/todoList--reactive.reducers'
import App from './components/App.js';
import rootEpic from './epics/todoList--reactive.epics'

const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(
    todoApp,
    applyMiddleware(epicMiddleware)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
