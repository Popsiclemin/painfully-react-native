import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import App from './containers/App'
import {selectSubreddit} from './actions'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.subscribe(()=>console.log(store.getState()))

store.dispatch(selectSubreddit("app"))

console.log(store)


export default ()=>(
  <Provider store={store}>
    <App />
  </Provider>
)
