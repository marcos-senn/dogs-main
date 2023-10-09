const validation = (state, name) => {
	let errors = {};

	switch (name) {
		case "name":
			if (!state.name) {
				errors.name = "Ingrese un nombre";
			} else if (/[1-9]/.test(state.name)) {
				errors.name = "El nombre no puede contener numeros";
			}

			break;

		case "minHeight":
			if (!state.minHeight) {
				errors.minHeight = "Es necesario un valor de altura mínimo";
			} else if (isNaN(state.minHeight)) {
				errors.minHeight = "El valor de altura minimo debe ser un numero";
			} else if (state.minHeight > state.maxHeight) {
				errors.minHeight =
					"El valor de altura minimo debe ser menor al valor de altura maximo";
			}
			break;

		case "maxHeight":
			if (!state.maxHeight) {
				errors.maxHeight = "Es necesario un valor de altura maximo";
			} else if (isNaN(state.maxHeight)) {
				errors.maxHeight = "El valor de altura maximo debe ser un numero";
			} else if (state.maxHeight < state.minHeight) {
				errors.maxHeight =
					"El valor de altura maximo debe ser mayor al valor de altura minimo";
			}
			break;

		case "minWeight":
			if (!state.minWeight) {
				errors.minWeight = "Es necesario un valor de peso mínimo";
			} else if (isNaN(state.minWeight)) {
				errors.minWeight = "El peso minimo debe ser un numero";
			} else if (state.minWeight > state.maxWeight) {
				errors.minWeight = "El peso minimo debe ser menor al peso maximo";
			}
			break;

		case "maxWeight":
			if (!state.maxWeight) {
				errors.maxWeight = "Es necesario un valor de peso maximo";
			} else if (isNaN(state.maxWeight)) {
				errors.maxWeight = "El peso maximo debe ser un numero";
			} else if (state.maxWeight < state.minWeight) {
				errors.maxWeight = "El peso maximo debe ser mayor al peso minimo";
			}

			break;

		case "life_span":
			if (!state.life_span) {
				errors.life_span = "Es necesario ingresar años de vida";
			} else if (isNaN(state.life_span)) {
				errors.life_span = "Años de vida debe ser un numero";
			} else if (state.life_span > 50) {
				errors.life_span = "Años de vida debe ser menor a 50";
			}
			break;

		case "temperaments":
			if (state.temperaments.length < 1) {
				errors.temperaments = "Al menos un temperamento es necesario";
			}
			break;

		case "imageUrl":
			if (!state.imageUrl) {
				errors.imageUrl = "Es necesario ingresar una imagen";
			}
			break;

		default:
			break;
	}

	return errors;
};

export default validation;
