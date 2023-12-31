import {
	FILTER_BY_CREATED,
	RESET_FILTER,
	GET_DOGS,
	GET_DOGS_BY_ID,
	GET_TEMPERAMENTS,
	CLEAN_DETAIL,
	ORDER_BY_NAME,
	ORDER_BY_TEMPERAMENT,
	ORDER_BY_WEIGHT,
} from "./actionTypes";
import axios from "axios";

export const getDogs = () => {
	return async dispatch => {
		const endPoint = "http://localhost:3001/dogs";
		const { data } = await axios.get(endPoint);
		//console.log(data)
		return dispatch({
			type: GET_DOGS,
			payload: data,
		});
	};
};

export const getDogsByname = name => {
	return async dispatch => {
		const endPoint = `http://localhost:3001/dogs?name=${name}`;
		const { data } = await axios.get(endPoint);
		return dispatch({
			type: GET_DOGS,
			payload: data,
		});
	};
};

export const getDogById = id => {
	return async dispatch => {
		const endPoint = `http://localhost:3001/dogs/${id}`;
		const { data } = await axios.get(endPoint);
		console.log(data);
		return dispatch({
			type: GET_DOGS_BY_ID,
			payload: data,
		});
	};
};

export const cleanDetail = () => {
	return async dispatch => {
		return dispatch({
			type: CLEAN_DETAIL,
			payload: [],
		});
	};
};

export const getTemperaments = () => {
	return async dispatch => {
		const endPoint = "http://localhost:3001/temperaments";
		const { data } = await axios.get(endPoint);
		return dispatch({
			type: GET_TEMPERAMENTS,
			payload: data,
		});
	};
};

export const addDog = state => {
	try {
		return async () => {
			const endPoint = "http://localhost:3001/dogs";
			const data = await axios.post(endPoint, state);
			alert("Creado con exito");
		};
	} catch (error) {
		alert(error.message);
	}
};

export const orderDogs = order => {
	//console.log(order)
	return {
		type: ORDER_BY_NAME,
		payload: order,
	};
};

export const orderByTemperament = temperament => {
	//console.log(temperament)
	return {
		type: ORDER_BY_TEMPERAMENT,
		payload: temperament,
	};
};

export const resetFilter = state => {
	return {
		type: RESET_FILTER,
		payload: state,
	};
};

export const orderByWeight = weigth => {
	return {
		type: ORDER_BY_WEIGHT,
		payload: weigth,
	};
};

export const filterByCreated = () => {
	return {
		type: FILTER_BY_CREATED,
		payload: "created",
	};
};
