import actions from "./actions";
import api from "../../../utils/api";

export const recipesActionCreators = {
	getRecipes: () => async (dispatch) => {
		try {
			dispatch(recipesActionCreators.setIsLoading(true));
			const data = await api.get("items").then(res => res.data);
			if (data) {
				dispatch(recipesActionCreators.setRecipes(data));
				dispatch(recipesActionCreators.setIsLoading(false));
			}
		} catch (error) {
			dispatch(recipesActionCreators.setIsError('произошла ошибка'));
		}
	},

	searchRecipes: (inputData) => async (dispatch) => {
		try {
			dispatch(recipesActionCreators.setIsLoading(true));
			const data = await api.get(`items?search=${inputData}`).then(res => res.data);
			if (data) {
				dispatch(recipesActionCreators.setRecipes(data));
				dispatch(recipesActionCreators.setIsLoading(false));
			}
		} catch (error) {
			dispatch(recipesActionCreators.setIsError('произошла ошибка'));
		}
	},

	setRecipes: (data) => ({
		type: actions.SET_RECIPES,
		payload: data
	}),

	setIsError: (error) => ({
		type: actions.SET_ERROR,
		payload: error
	}),

	setIsLoading: (loading) => ({
		type: actions.SET_IS_LOADING,
		payload: loading
	})
}
