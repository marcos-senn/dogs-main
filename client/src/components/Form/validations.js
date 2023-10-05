//Validaciones del formulario (modularizar luego)
	//state porque necesito saber que estoy agregando en el estado
	//name para saber en que input estoy agregando el valor y mostrar el error en el input correspondiente
	// const validate = (state, name) => {
	//     if(name==="name"){

	//     }

	//     if(name===minHeight){

	//     }
	// }

	//Estado local para mapear errores
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