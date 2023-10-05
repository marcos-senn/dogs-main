import { GET_DOGS, GET_DOGS_BY_ID, CLEAN_DETAIL,GET_TEMPERAMENTS } from "./actionTypes";

const initialState = {
	dogs: [],
	dogDetail:[],
	temperaments: [],
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

		case CLEAN_DETAIL:
			return{
				...state,
				dogDetail:payload,
			}

		case GET_TEMPERAMENTS:
			return {
				...state,
				temperaments: payload,
			};
		default:
			return state;
	}
};

export default reducer;
