import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import './index.less'

const store = process.env.NODE_ENV === 'production' ? (
  createStore(reducer, applyMiddleware(thunk))
) : (
  window.__REDUX_DEVTOOLS_EXTENSION__ ? (
    createStore(reducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()))
  ) : (
    createStore(reducer, applyMiddleware(thunk))
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));
