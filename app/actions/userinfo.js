import * as actionTypes from 'constants/userinfo'

// action creator

export function update(data) {
  return {
    type: actionTypes.USERINFO_UPDATE,
    data
  }
}

