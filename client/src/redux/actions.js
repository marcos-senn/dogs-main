import { GET_DOGS, GET_DOGS_BY_ID } from "./actionTypes";
import axios from "axios";



export const getDogs = () => {
    return async (dispatch) => {
        const endPoint = "http://localhost:3001/dogs";
        const { data } = await axios.get(endPoint);
        return dispatch({
            type: GET_DOGS,
            payload: data,
        });
    };
}

export const getDogsByname = (name) => {
    return async (dispatch) => {
        const endPoint = `http://localhost:3001/dogs?name=${name}`;
        const { data } = await axios.get(endPoint);
        return dispatch({
            type: GET_DOGS,
            payload: data,
        });
    }
};

export const getDogById = (id) => {
    return async (dispatch) => {
        const endPoint = `http://localhost:3001/dogs/${id}`;
        const { data } = await axios.get(endPoint);
        return dispatch({
            type: GET_DOGS_BY_ID,
            payload: data,
        });
    }
}

export const cleanDetail = () => {
    return async (dispatch) => {
        return dispatch({
            type: "CLEAN_DETAIL",
            payload: [],
        });
    }
}