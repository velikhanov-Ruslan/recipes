import actions from "./actions";
import api from "../../../utils/api";

export const AuthActionCreators = {
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
			dispatch(AuthActionCreators.setIsLoading(true));
			const response = await api.get("users").then(res => res.data);
			const mockUser = response.find(u => u.username === username && u.password === password);
			if (mockUser) {
				localStorage.setItem("auth", true);
				localStorage.setItem("username", username);
				dispatch(AuthActionCreators.setAuth(true));
				dispatch(AuthActionCreators.setUser(mockUser));
			} else {
				dispatch(AuthActionCreators.setIsError("invalid login or password"));
				dispatch((AuthActionCreators.setIsLoading(false)));
			}

		} catch (error) {
			dispatch(AuthActionCreators.setIsError(error));
		}
	},

	logOut: () => async (dispatch) => {
        localStorage.removeItem("auth");
        localStorage.removeItem("username");
        dispatch(AuthActionCreators.setUser({}));
        dispatch(AuthActionCreators.setAuth(false));
    }
}
