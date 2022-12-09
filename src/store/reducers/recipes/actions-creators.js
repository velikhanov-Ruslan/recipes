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
				dispatch(recipesActionCreators.getRecipes());
				dispatch(recipesActionCreators.setIsLoading(false));
			}
		} catch (error) {
			dispatch(recipesActionCreators.setIsError('произошла ошибка'));
		}
	},

	sortRecipes: (label) => async (dispatch) => {
		try {
			dispatch(recipesActionCreators.setIsLoading(true));
			const data = await api.get(`items?sortBy=${label}`).then(res => res.data);
			if (data) {
				dispatch(recipesActionCreators.setRecipes(data));
				dispatch(recipesActionCreators.setIsLoading(false));
			}
		} catch (error) {
			dispatch(recipesActionCreators.setIsError('произошла ошибка'));
		}
	},

	createRecipe: (...data) => async (dispatch) => {
		try {
			// dispatch(recipesActionCreators.setIsLoading(true));
			// await api.post(`items`, ...data);
			// dispatch(recipesActionCreators.setRecipes(data));
			// dispatch(recipesActionCreators.getRecipes());
		} catch (error) {
			dispatch(recipesActionCreators.setIsLoading(false));
		}
	},

	deleteRecipe: (id) => async (dispatch) => {
		try {
			dispatch(recipesActionCreators.setIsLoading(true));
			await api.delete(`items/${id}`);
			dispatch(recipesActionCreators.getRecipes());
		} catch (error) {
			dispatch(recipesActionCreators.setIsError('произошла ошибка'));
			dispatch(recipesActionCreators.setIsLoading(false));
		}
	},

	updateRecipe: (id, data) => async (dispatch) => {
		try {
			dispatch(recipesActionCreators.setIsLoading(true));
			await api.put(`items/${id}`, data)
			dispatch(recipesActionCreators.getRecipes());
			dispatch(recipesActionCreators.setIsLoading(true));
		} catch (error) {
			dispatch(recipesActionCreators.setIsError(`${error}`));
			dispatch(recipesActionCreators.setIsLoading(false));
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
