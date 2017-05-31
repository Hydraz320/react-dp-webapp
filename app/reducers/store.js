import * as actionTypes from '../constants/store'

const initailState = []

export default function store(state = initailState, action) {
	switch (action.type) {
		case actionTypes.STORE_UPDATE:
			return action.data
		case actionTypes.STORE_ADD:
			state.unshift(action.data)
			return state
		case actionTypes.STORE_REMOVE:
			return state.filter((item) => {
				return item.id !== action.data.id
			})
		default:
			return state
	}
}