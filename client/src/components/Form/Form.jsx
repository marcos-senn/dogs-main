import React from "react";
import Styles from "./Form.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../redux/actions";

function Form() {
	const temperaments = useSelector(state => state.temperaments);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTemperaments());
	}, [dispatch]);

	const [state, setState] = useState({
		name: "",
		minHeight: 0,
		maxHeight: 0,
		minWeight: 0,
		maxWeight: 0,
		life_span: 0,
		temperaments: [],
		imageUrl: "",
	});

	const handleChange = event => {
		setState({
			...state,
			[event.target.name]: event.target.value,
		});
		console.log(state);
	};

	//--------------- Manejo de temperamentos seleccionados ---------------------
	const [selectedTemperament, setSelectedTemperament] = useState("");

	const temperamentHandler = event => {
		setSelectedTemperament(event.target.value); //seteo estado con el valor de la opcion seleccionada
	};

	const temperamentSubmitHandler = event => {
		//al hacer click en el boton agrego el temperamento al array de temperamentos
		event.preventDefault();
		setState({
			...state,
			temperaments: [...state.temperaments, selectedTemperament],
		});
		setSelectedTemperament(""); //seteo el estado de la opcion seleccionada en vacio
	};

	const handleSubmit =  (event) => {
		event.preventDefault();	
		dispatch(addDog(state));
		alert("Raza agregada con exito");
	};

	return (
		<div className={Styles.container}>
			<form onSubmit={handleSubmit} className={Styles.form}>
				<label>
					Nombre de la raza:
					<input
						type="text"
						name="name"
						onChange={handleChange}
						value={state.name}
						placeholder="Ingrese el nombre"
					/>
				</label>

				<div className={Styles.inlineInputs}>
					<label>
						Altura minima:
						<input
							type="text"
							name="min-height"
							onChange={handleChange}
							placeholder="Ingrese la altura minima"
						/>
					</label>
					<label>
						Altura maxima:
						<input
							onChange={handleChange}
							placeholder="Ingrese la altura maxima"
							type="text"
							name="max-height"
						/>
					</label>
				</div>
				<div className={Styles.inlineInputs}>
					<label>
						Peso Minimo:
						<input
							onChange={handleChange}
							placeholder="Ingrese el peso minimo"
							type="text"
							name="min-weight"
						/>
					</label>
					<label>
						Peso Maximo:
						<input
							onChange={handleChange}
							placeholder="Ingrese el peso maximo"
							type="text"
							name="max-weight"
						/>
					</label>
				</div>
				<label>
					Años de vida:
					<input
						onChange={handleChange}
						placeholder="Ingrese los años de vida"
						type="text"
						name="life_span"
					/>
				</label>

				<label>
					Temperamentos:
					<select
						name="temperament"
						size="3"
						multiple
						onChange={temperamentHandler}
					>
						{temperaments.map(temperament => {
							return (
								<option key={temperament.id} value={temperament.name}>
									{temperament.name}
								</option>
							);
						})}
					</select>
					<button onClick={temperamentSubmitHandler}>
						Agregar Temperamento
					</button>
				</label>
				<label>
					Imagen url:
					<input
						onChange={handleChange}
						placeholder="Ingrese url de imagen"
						type="text"
						name="image"
					/>
				</label>
				<input type="submit" value="Agregar" onClick={handleSubmit}/>
			</form>
		</div>
	);
}

export default Form;
