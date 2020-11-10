import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import 'babel-polyfill';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

const store = createStore(
    reducers, //All reducers
    {}, //InitialState
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('app')
);
