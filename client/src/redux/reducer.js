import { GET_DOGS, GET_DOGS_BY_ID } from "./actionTypes";

const initialState = {
	dogs: [],
	dogDetail:[],
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_DOGS:
			return {
				...state,
				dogs: payload,
			};

		case GET_DOGS_BY_ID:
			return {
				...state,
				dogDetail: payload,
			};
		default:
			return state;
	}
};

export default reducer;
