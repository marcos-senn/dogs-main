import React from "react";
import Styles from "./Form.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../redux/actions";
import { addDog } from "../../redux/actions";
import validation from "./validations";

function Form() {
	const temperaments = useSelector(state => state.temperaments); //traigo los temperamentos del estado global para mapear en options

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTemperaments());
	}, [dispatch]);

	
	//Estado local con valor de inputs
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


	//-------------Manejo de errores-------------------
	const [errors, setErrors] = useState({
		name: "",
		minHeight: "",
		maxHeight: "",
		minWeight: "",
		maxWeight: "",
		life_span: "",
		temperaments: "",
		imageUrl: "",
	});

	const [submitDisabled, setSubmitDisabled] = useState(true);

	const disabledHandler = () => {
		const completeFields =
		state.name &&
		state.minHeight &&
		state.maxHeight &&
		state.minWeight &&
		state.maxWeight &&
		state.life_span &&
		state.temperaments.length > 0 &&
		state.imageUrl;
	
	  setSubmitDisabled(!completeFields);
		
	}


	//-------------------- Manejo de inputs ------------------------------------
	const handleChange = event => {
		setState({
			...state,
			[event.target.name]: event.target.value,
		});

		setErrors(
			validation({ //gestiono errores en tiempo real
				...state,
				[event.target.name]: event.target.value,
			}, event.target.name)
		);
		disabledHandler();
		//console.log(state);
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

	//----------------- Dispatch de la accion de agregar perro ------------------

	let newDog = {
		//creo el objeto con los datos del perro para enviar al servidor
		name: state.name,
		height: `${state.minHeight} - ${state.maxHeight}`,
		weight: `${state.minWeight} - ${state.maxWeight}`,
		life_span: state.life_span,
		temperament: state.temperaments,
		image: state.imageUrl,
	};

	const handleSubmit = event => {
		//envio objeto al servidor
		//console.log(newDog)
		event.preventDefault();
		dispatch(addDog(newDog));
		alert("Raza agregada con exito");
		setState({
			name: "",
			minHeight: 0,
			maxHeight: 0,
			minWeight: 0,
			maxWeight: 0,
			life_span: 0,
			temperaments: [],
			imageUrl: "",
		});
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
						required
					/>
					{errors.name && <p>{errors.name}</p>}
				</label>

				<div className={Styles.inlineInputs}>
					<label>
						Altura minima:
						<input
							type="text"
							name="minHeight"
							onChange={handleChange}
							placeholder="Ingrese la altura minima"
						/>
						{errors.minHeight && <p>{errors.minHeight}</p>}
					</label>
					<label>
						Altura maxima:
						<input
							onChange={handleChange}
							placeholder="Ingrese la altura maxima"
							type="text"
							name="maxHeight"
							
						/>
						{errors.maxHeight && <p>{errors.maxHeight}</p>}
					</label>
				</div>
				<div className={Styles.inlineInputs}>
					<label>
						Peso Minimo:
						<input
							onChange={handleChange}
							placeholder="Ingrese el peso minimo"
							type="text"
							name="minWeight"
							
						/>
						{errors.minWeight && <p>{errors.minWeight}</p>}
					</label>
					<label>
						Peso Maximo:
						<input
							onChange={handleChange}
							placeholder="Ingrese el peso maximo"
							type="text"
							name="maxWeight"
							
						/>
						{errors.maxWeight && <p>{errors.maxWeight}</p>}
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
					{errors.life_span && <p>{errors.life_span}</p>}
				</label>

				<label>
					Temperamentos:
					<select
						name="temperament"
						size="3"
						multiple
						onChange={temperamentHandler}
						
					>
						{temperaments?.map(temperament => {
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
					{errors.temperaments && <p>{errors.temperaments}</p>}
				</label>
				<label>
					Imagen url:
					<input
						onChange={handleChange}
						placeholder="Ingrese url de imagen"
						type="text"
						name="imageUrl"
						
					/>
					{errors.imageUrl && <p>{errors.imageUrl}</p>}
				</label>

				<button className={Styles.submitBtn} value="Agregar" onClick={handleSubmit} type="submit" disabled={submitDisabled}>Agregar</button>
				{submitDisabled? <p className={Styles.submitDisabled}>Complete todos los campos para habilitar</p> : null}
			</form>
		</div>
	);
}

export default Form;
