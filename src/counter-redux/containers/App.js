
import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

import  reducers from '../reducers';
import CounterApp from './CounterApp';

const middleware = [ thunk ]

middleware.push(createLogger())


const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
// const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducers);


class App extends Component {
  
  render() {
    console.log('store', store.getState(), reducers);
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}

module.exports = App