import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

// add the feelingReducer
const feelingReducer = (state = 0, action) => {
    if (action.type === 'FEELING_FORM_INPUT') {
        return action.payload;
    }
    return state;
}

// add the understandingReducer
const understandingReducer = (state = 0, action) => {
    if (action.type === 'UNDERSTANDING_FORM_INPUT') {
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        // supportReducer,
        // commentsReducer
    }),

    // setup logger
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
