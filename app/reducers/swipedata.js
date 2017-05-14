/**
 * Created by hydra320 on 2017/5/14.
 */
import * as actionTypes from '../constants/swipedata'

const initailState = {}

export default function swipe(state = initailState, action) {
  switch(action.type) {
    case actionTypes.SWIPEDATE_FETCH:
      return action.data
    default:
      return state
  }
}