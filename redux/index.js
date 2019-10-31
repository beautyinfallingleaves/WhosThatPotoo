import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'

import creatures from './creatures'

const appReducer = combineReducers({
  creatures,
})

let middleware = [
  thunkMiddleware
]

export default createStore(
  appReducer,
  applyMiddleware(...middleware),
)
