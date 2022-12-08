import actions from "./actions";
import api from "../../../utils/api";

export const detailActionCreators = {
	getDetailData: (id) => async (dispatch) => {
		try {
			dispatch(detailActionCreators.setIsLoading(true));
			const data = await api.get(`items?id=${id}`).then(res => res.data);
			if (data) {
				dispatch(detailActionCreators.setDetail(data[0]));
				dispatch(detailActionCreators.setIsLoading(false));
			}
		} catch (error) {
			dispatch(detailActionCreators.setIsError('произошла ошибка'));
		}
	},

	setDetail: (data) => ({
		type: actions.SET_DETAIL,
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
