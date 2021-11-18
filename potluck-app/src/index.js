import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import logger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'
// import rootReducer from '../src/common/reducers/index'
import eventReducer from '../src/common/reducers/eventReducer'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

// Create Redux Store (step 1)
const store = createStore(eventReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

ReactDOM.render(
  
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// Provider for Redux store (step 2)