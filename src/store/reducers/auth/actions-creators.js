import actions from "./actions";

export const AuthActionCreators = {
	setAuth: (auth) => ({
		type: actions.SET_AUTH,
		payload: auth
	})
}
