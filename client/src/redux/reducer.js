import {
	GET_DOGS,
	GET_DOGS_BY_ID,
	CLEAN_DETAIL,
	GET_TEMPERAMENTS,
	ORDER_BY_NAME,
	ORDER_BY_TEMPERAMENT,
	RESET_FILTER
  } from "./actionTypes";
  
  const initialState = {
	dogs: [],
	dogsCopy: [], // Declara dogsCopy en el estado inicial
	dogDetail: [],
	temperaments: [], // carga en home y en create
  };
  
  const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
	  case GET_DOGS:
		return {
		  ...state,
		  dogs: payload,
		  dogsCopy: payload, // asigno el payload original a dogsCopy para usar en el resetFilter
		};
  
	  case GET_DOGS_BY_ID:
		return {
		  ...state,
		  dogDetail: payload,
		};
  
	  case CLEAN_DETAIL:
		return {
		  ...state,
		  dogDetail: payload,
		};
  
	  case GET_TEMPERAMENTS:
		return {
		  ...state,
		  temperaments: payload,
		};
	  case ORDER_BY_NAME:
		const dogsCopyForOrderByName = [...state.dogs];
		//console.log(dogsCopy)
		return {
		  ...state,
		  dogs:
			payload === "A"
			  ? dogsCopyForOrderByName.sort((a, b) => {
				  return a.name.localeCompare(b.name);
				})
			  : dogsCopyForOrderByName.sort((a, b) => {
				  return b.name.localeCompare(a.name);
				}),
		};
  
	  case ORDER_BY_TEMPERAMENT:
		const dogsCopyTemp = [...state.dogs];
  
		return {
		  ...state,
		  dogs: dogsCopyTemp.filter((dog) => {
			if (dog.temperament) {
			  return dog.temperament.includes(payload);
			}
		  }),
		};
  
	  case RESET_FILTER:
		return {
		  ...state,
		  dogs: [...state.dogsCopy], // Uso el dogscopy que se cargo en el getDogs para resetar filtros
		};
  
	  default:
		return state;
	}
  };
  
  export default reducer;
  