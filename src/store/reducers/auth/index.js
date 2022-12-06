import actions from "./actions";

const initialState = {
	isAuth: false,
	isLoading: false,
	error: "",
	user: {},
}

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case actions.SET_AUTH:
			return {
				...state,
				isAuth: action.payload,
				isLoading: false,
			}

		case actions.SET_ERROR:
			return {
				...state,
				error: action.payload,
				isLoading: false,
			}

		case actions.SET_USER:
			return {
				...state,
				user: action.payload,
			}

		case actions.SET_IS_LOADING:
			return {
				...state,
				isLoading: action.payload,
			}

		default:
			return state;
	}
}
