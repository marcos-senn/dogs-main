import {
	GET_DOGS,
	GET_DOGS_BY_ID,
	CLEAN_DETAIL,
	GET_TEMPERAMENTS,
	ORDER_BY_NAME,
	ORDER_BY_TEMPERAMENT,
	RESET_FILTER,
	ORDER_BY_WEIGHT,
	FILTER_BY_CREATED,
} from "./actionTypes";

const initialState = {
	dogs: [],
	dogsCopy: [], // copia del estado original para usar en el resetFilter
	dogDetail: [], //cargo en detail
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
				dogs: dogsCopyTemp.filter(dog => {
					if (dog.temperament) {
						return dog.temperament.includes(payload);
					}
				}),
			};

		case ORDER_BY_WEIGHT:
			const dogsCopyWeight = [...state.dogs];
			return {
				...state,
				dogs: dogsCopyWeight.filter(dog => {
					if (dog.weight) {
						const weight = dog.weight.split(" - ");
						const minWeight = parseInt(weight[0]);
						const maxWeight = parseInt(weight[1]);
						if (payload === "PP") {
							return maxWeight < 10;
						}
						if (payload === "PM") {
							return minWeight >= 10 && maxWeight < 25;
						}
						if (payload === "PG" && weight.length > 1) {
							return minWeight >= 25;
						}
					} else {
						return state.dogs;
					}
				}),
			};

		case FILTER_BY_CREATED:
			const dogsCopyCreated = [...state.dogs];
			const regex = /([a-zA-Z]+([0-9]+[a-zA-Z]+)+)/;
			console.log(dogsCopyCreated);
			return {
				...state,
				dogs: dogsCopyCreated.filter(dog => {
					return regex.test(dog.id);
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
