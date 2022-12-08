import actions from "./actions";

const initialState = {
	reciep: {},
	isLoading: false,
	error: "",
}

export default function detailReducer(state = initialState, action) {
	switch (action.type) {
		case actions.SET_DETAIL:
			return {
				...state,
				reciep: action.payload,
				isLoading: false,
			}

		case actions.SET_ERROR:
			return {
				...state,
				error: action.payload,
				isLoading: false,
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
