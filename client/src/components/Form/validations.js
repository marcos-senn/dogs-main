const validation = (state, name) => {
	let errors = {};
  
	switch (name) {
	  case "name":
		if (!state.name) {
		  errors.name = "Name is required";
		}
		break;
  
	  case "minHeight":
		if (!state.minHeight) {
		  errors.minHeight = "Min Height is required";
		}
		break;
  
	  case "maxHeight":
		if (!state.maxHeight) {
		  errors.maxHeight = "Max Height is required";
		}
		break;
  
	  case "minWeight":
		if (!state.minWeight) {
		  errors.minWeight = "Min Weight is required";
		}
		break;
  
	  case "maxWeight":
		if (!state.maxWeight) {
		  errors.maxWeight = "Max Weight is required";
		}
		break;
  
	  case "life_span":
		if (!state.life_span) {
		  errors.life_span = "Life Span is required";
		}
		break;
  
	  case "temperaments":
		if (state.temperaments.length < 1) {
		  errors.temperaments = "Temperaments is required";
		}
		break;
  
	  case "imageUrl":
		if (!state.imageUrl) {
		  errors.imageUrl = "Image is required";
		}
		break;
  
	  default:
		break;
	}
  
	return errors;
  };
  
  export default validation;
  