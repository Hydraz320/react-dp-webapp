/**
 * Created by hydra320 on 2017/5/14.
 */
import * as actionTypes from '../constants/swipedata'

export function swipe(data) {
  return {
    type: actionTypes.SWIPEDATE_FETCH,
    data
  }
}