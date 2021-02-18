import * as types from '../actions/actionTypes';
import { createStore, applyMiddleware, combineReducers } from 'redux';
const initialState = {
  count: 0
};

const counter = (state = initialState, action = {}) => {
  switch (action.type) {
     
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
    counter
})
export default rootReducer;
