const validation = state => {
	let errors = {};

	if (!state.name) {
		errors.name = "Ingrese un nombre";
	}
	if (/[1-9]/.test(state.name)) {
		errors.name = "El nombre no puede contener numeros";
	}

	if (!state.minHeight) {
		errors.minHeight = "Es necesario un valor de altura mínimo";
	}
	if (isNaN(state.minHeight)) {
		errors.minHeight = "El valor de altura minimo debe ser un numero";
	}
	if (state.minHeight > state.maxHeight) {
		errors.minHeight =
			"El valor de altura minimo debe ser menor al valor de altura maximo";
	}

	if (state.minHeight < state.maxHeight) {
		errors.minHeight = "";
	} else {
		errors.minHeight = "El valor de altura minimo debe ser menor al valor de altura maximo";
	}

	if (!state.maxHeight) {
		errors.maxHeight = "Es necesario un valor de altura maximo";
	}
	if (isNaN(state.maxHeight)) {
		errors.maxHeight = "El valor de altura maximo debe ser un numero";
	}
	if (state.maxHeight < state.minHeight) {
		errors.maxHeight =
			"El valor de altura maximo debe ser mayor al valor de altura minimo";
	}

	if (!state.minWeight) {
		errors.minWeight = "Es necesario un valor de peso mínimo";
	}
	if (isNaN(state.minWeight)) {
		errors.minWeight = "El peso minimo debe ser un numero";
	}
	if (state.minWeight > state.maxWeight) {
		errors.minWeight = "El peso minimo debe ser menor al peso maximo";
	}

	if (!state.maxWeight) {
		errors.maxWeight = "Es necesario un valor de peso maximo";
	}
	if (isNaN(state.maxWeight)) {
		errors.maxWeight = "El peso maximo debe ser un numero";
	}
	if (state.maxWeight < state.minWeight) {
		errors.maxWeight = "El peso maximo debe ser mayor al peso minimo";
	}

	if (!state.life_span) {
		errors.life_span = "Es necesario ingresar años de vida";
	}
	if (isNaN(state.life_span)) {
		errors.life_span = "Años de vida debe ser un numero";
	}
	if (state.life_span > 50) {
		errors.life_span = "Años de vida debe ser menor a 50";
	}

	if (state.temperaments.length < 1) {
		errors.temperaments = "Al menos un temperamento es necesario";
	}

	if (!state.imageUrl) {
		errors.imageUrl = "Es necesario ingresar una imagen";
	}

	if (!/\bhttps?:\/\/\S+?\.(png|jpe?g|gif|bmp|webp)\b/.test(state.imageUrl)){
		errors.imageUrl = "Debe ser una url valida";
	}

	return errors;
};

export default validation;
