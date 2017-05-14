import {combineReducers} from 'redux'

import userinfo from './userinfo'
import swipedata from './swipedata'

const rootReducer = combineReducers({
  userinfo,
  swipedata
})

export default rootReducer