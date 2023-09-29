import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //solo para conectar nuestra App copn la extension redux devtools del navegador

const store = createStore(
	reducer,
	composeEnhancer(applyMiddleware(thunkMiddleware)) //nos sirve para hacer una peticion a una API
);

export default store;
