import {combineReducers} from 'redux'

import userinfo from './userinfo'
import swipedata from './swipedata'
import store from './store'

const rootReducer = combineReducers({
  userinfo,
  swipedata,
  store
})

export default rootReducer