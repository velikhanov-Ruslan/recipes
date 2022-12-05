import actions from  "./actions";

const initialState = {
	isAuth: false,
}

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case actions.SET_AUTH:
			return {
				...state,
				isAuth: action.payload
			}

		default:
			return state;
	}
}
