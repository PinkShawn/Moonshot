import { combineReducers } from 'redux'
import app from './app'
import balance from './balance'

const reducers = combineReducers({
  app,
  balance,

})

export default reducers
