import actions from "./actions";

const initialState = {
	recipes: [],
	isLoading: false,
	error: "",
}

export default function recipesReducer(state = initialState, action) {
	switch (action.type) {
		case actions.SET_RECIPES:
			return {
				...state,
				recipes: action.payload,
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
