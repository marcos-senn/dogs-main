import React from "react";
import Styles from "./Form.module.css";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../redux/actions";
import { addDog } from "../../redux/actions";
import validation from "./validations";

function Form() {
	const temperaments = useSelector(state => state.temperaments); //traigo los temperamentos del estado global para mapear en options
	const dogs = useSelector(state => state.dogs); //traigo los perros del estado global para controlar no crear uno que ya este aqui
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

	const [submitDisabled, setSubmitDisabled] = useState(true); //estado para habilitar o deshabilitar el boton de submit

	const disabledHandler = () => {
		//habilita o deshabilita el boton de submit segun si estan completos los inputs
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
	};

	//-------------------- Manejo de inputs ------------------------------------
	const handleChange = event => {
		setState({
			...state,
			[event.target.name]: event.target.value,
		});

		setErrors(
			//manejo de errores con validaciones
			validation(
				{
					...state,
					[event.target.name]: event.target.value
				},
				event.target.name
			)
		);

		disabledHandler();
		//console.log(state);
	};

	//--------------- Manejo de temperamentos seleccionados ---------------------
	const [selectedTemperament, setSelectedTemperament] = useState("");

	const temperamentHandler = event => {
		setSelectedTemperament(event.target.value);
		//seteo estado con el valor de la opcion seleccionada
	};

	const temperamentSubmitHandler = event => {
		//al hacer click en el boton agrego el temperamento al array de temperamentos
		event.preventDefault();

		if (state.temperaments.includes(selectedTemperament)) {
			alert("Ya se ha agregado este temperamento, seleccione otro");
			return;
		}

		alert("Temperamento agregado, puede seleccionar otro");
		//console.log(state.temperaments)

		setState({
			...state,
			temperaments: [...state.temperaments, selectedTemperament],
		});

		setSelectedTemperament(""); //seteo el estado de la opcion seleccionada en vacio

		if (ref.current) {
			ref.current.selectedIndex = -1; //seteo el select en index -1 para que no quede seleccionada ninguna opcion
		}
	};

	const ref = useRef(null); //referencia al select para setear el index en -1

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

		if (
			dogs.some(
				dog => dog.name.trim().toLowerCase() === state.name.trim().toLowerCase()
			)
		) {
			alert("Ya existe un perro con este nombre, seleccione otro");
			return;
		}

		if (
			errors.name ||
			errors.minHeight ||
			errors.maxHeight ||
			errors.minWeight ||
			errors.maxWeight ||
			errors.life_span ||
			errors.temperaments ||
			errors.imageUrl
		) {
			alert("Complete los campos correctamente");
			return;
		}

		dispatch(addDog(newDog));

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
					{errors.name && <p className={Styles.error}>{errors.name}</p>}
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
						{errors.minHeight && (
							<p className={Styles.error}>{errors.minHeight}</p>
						)}
					</label>
					<label>
						Altura maxima:
						<input
							onChange={handleChange}
							placeholder="Ingrese la altura maxima"
							type="text"
							name="maxHeight"
						/>
						{errors.maxHeight && (
							<p className={Styles.error}>{errors.maxHeight}</p>
						)}
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
						{errors.minWeight && (
							<p className={Styles.error}>{errors.minWeight}</p>
						)}
					</label>
					<label>
						Peso Maximo:
						<input
							onChange={handleChange}
							placeholder="Ingrese el peso maximo"
							type="text"
							name="maxWeight"
						/>
						{errors.maxWeight && (
							<p className={Styles.error}>{errors.maxWeight}</p>
						)}
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
					{errors.life_span && (
						<p className={Styles.error}>{errors.life_span}</p>
					)}
				</label>

				<label>
					Temperamentos:
					<select
						ref={ref}
						name="temperament"
						size="3"
						multiple
						onChange={temperamentHandler}
						className={Styles.select}
					>
						{temperaments?.map(temperament => {
							return (
								<option key={temperament.id} value={temperament.name}>
									{temperament.name}
								</option>
							);
						})}
					</select>
					<button className={Styles.addTemp} onClick={temperamentSubmitHandler}>
						Agregar Temperamento
					</button>
					{errors.temperaments && (
						<p className={Styles.error}>{errors.temperaments}</p>
					)}
				</label>
				<label>
					Imagen url:
					<input
						onChange={handleChange}
						placeholder="Ingrese url de imagen"
						type="text"
						name="imageUrl"
					/>
					{errors.imageUrl && <p className={Styles.error}>{errors.imageUrl}</p>}
				</label>

				<button
					className={Styles.submitBtn}
					value="Agregar"
					onClick={handleSubmit}
					type="submit"
					disabled={submitDisabled}
				>
					Agregar
				</button>
				{submitDisabled ? (
					<p className={Styles.submitDisabled}>
						Complete todos los campos para habilitar
					</p>
				) : null}
			</form>
		</div>
	);
}

export default Form;
