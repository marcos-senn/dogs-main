import React from "react";
import style from "./Filter.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	orderDogs,
	orderByTemperament,
	getTemperaments,
	resetFilter,
	orderByWeight,
	filterByCreated,
} from "../../redux/actions";

const Filter = () => {
	const dispatch = useDispatch();

	const temperaments = useSelector(state => state.temperaments);

	useEffect(() => {
		dispatch(getTemperaments());
	}, [dispatch]);

	const orderNames = event => {
		dispatch(orderDogs(event.target.value));
		event.target.value = "";
	};

	const temperamentOrderHandler = event => {
		// console.log(event.target.name)
		dispatch(orderByTemperament(event.target.value));
		event.target.value = "";
	};

	const resetFilterHandler = () => {
		dispatch(resetFilter(""));
	};

	const weightOrderHandler = event => {
		dispatch(orderByWeight(event.target.value));
		event.target.value = "";
	};

	const createDogsFilterHandler = () => {
		dispatch(filterByCreated());
	};

	return (
		<div className={style.container}>
			
			<div className={style.filter}>
			<h3 className={style.title}>Filtros</h3>
				<div>
					<button onClick={createDogsFilterHandler}>Razas Creadas</button>
				</div>
				<div>
					<button onClick={resetFilterHandler}>Resetear filtros</button>
				</div>
			</div>

			<div className={style.temperament}>
				<h3>Temperamentos</h3>
				<select onChange={temperamentOrderHandler}>
					<option value="" hidden>
						Seleccione
					</option>
					{temperaments?.map(temperament => {
						return (
							<option key={temperament.id} value={temperament.name}>
								{temperament.name}
							</option>
						);
					})}
				</select>
			</div>

			<div className={style.order}>
				<h3>Ordenar nombres</h3>
				<select onChange={orderNames}>
					<option value="" hidden>
						Seleccione
					</option>
					<option value="A">A-Z</option>
					<option value="D">Z-A</option>
				</select>
			</div>

			<div className={style.orderWeight}>
				<h3>Ordenar Pesos</h3>
				<select onChange={weightOrderHandler}>
					<option value="" hidden>
						Seleccione
					</option>
					<option value="PP">Perros Pequeños</option>
					<option value="PM">Perros Medianos</option>
					<option value="PG">Perros Grandes</option>
				</select>
			</div>
		</div>
	);
};

export default Filter;
