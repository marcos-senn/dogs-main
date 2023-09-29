import { GET_DOGS } from "./actionTypes";

const initialState = {
    dogs: [],
    };

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_DOGS:
            console.log(payload)
            return { ...state, dogs: payload };

        default:
            return state;
    }
}

export default reducer
