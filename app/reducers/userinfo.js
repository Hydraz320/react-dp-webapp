import * as actionTypes from '../constants/userinfo'

const initailState = {}

export default function userinfo(state = initailState, action) {
  switch(action.type) {
    case actionTypes.USERINFO_UPDATE:
      return action.data
    default:
      return state
  }
}