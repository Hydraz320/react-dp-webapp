import * as actionTypes from '../constants/userinfo'

const initailState = {}

export default function userinfo(state = initailState, action) {
  switch(action.type) {
    case actionTypes.USERINFO_LOGIN:
      return action.data
    case actionTypes.UPDATE_CITYNAME:
      return action.data
    default:
      return state
  }
}