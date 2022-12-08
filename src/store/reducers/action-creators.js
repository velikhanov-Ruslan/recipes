import { authActionCreators } from "./auth/actions-creators";
import { recipesActionCreators } from "./recipes/actions-creators";
import { detailActionCreators } from "./detail/actions-creators";

export const allActionsCreators = {
	...authActionCreators,
	...recipesActionCreators,
	...detailActionCreators,
}
