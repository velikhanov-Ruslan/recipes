import actions from "./actions";
import api from "../../../utils/api";

export const authActionCreators = {
	setIsError: (error) => ({
		type: actions.SET_ERROR,
		payload: error
	}),

	setUser: (user) => ({
		type: actions.SET_USER,
		payload: user
	}),

	setAuth: (auth) => ({
		type: actions.SET_AUTH,
		payload: auth
	}),

	setIsLoading: (loading) => ({
		type: actions.SET_IS_LOADING,
		payload: loading
	}),

	login: ({ username, password }) => async (dispatch) => {
		try {
			dispatch(authActionCreators.setIsLoading(true));
			const response = await api.get("users").then(res => res.data);
			const mockUser = response.find(u => u.username === username && u.password === password);
			if (mockUser) {
				localStorage.setItem("auth", true);
				localStorage.setItem("username", username);
				dispatch(authActionCreators.setAuth(true));
				dispatch(authActionCreators.setUser(mockUser));
			} else {
				dispatch(authActionCreators.setIsError("invalid login or password"));
				dispatch((authActionCreators.setIsLoading(false)));
			}

		} catch (error) {
			dispatch(authActionCreators.setIsError(error));
		}
	},

	logOut: () => async (dispatch) => {
		localStorage.removeItem("auth");
		localStorage.removeItem("username");
		dispatch(authActionCreators.setUser({}));
		dispatch(authActionCreators.setAuth(false));
	}
}
