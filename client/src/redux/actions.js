import { GET_DOGS } from "./actionTypes";
import axios from "axios";

const getDogs = () => {
    return async (dispatch) => {
        const endPoint = "http://localhost:3001/dogs";
        const { data } = await axios.get(endPoint);
        return dispatch({
            type: GET_DOGS,
            payload: data,
        });
    };
}

export default getDogs;