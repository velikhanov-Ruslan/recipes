import actions from "./actions";
import api from "../../../utils/api";

export const AuthActionCreators = {
	login: (username, password) => async (dispatch) => {
		try {
			const response = await api.get("users").then(res => res.data);
			const mockUser = response.find(u => u.username === username && u.password === password)
		} catch (error) {
			console.log(error);
		}
	},

	setUser: (user) => ({
		type: actions.SET_USER,
		payload: user
	}),

	setAuth: (auth) => ({
		type: actions.SET_AUTH,
		payload: auth
	})
}
