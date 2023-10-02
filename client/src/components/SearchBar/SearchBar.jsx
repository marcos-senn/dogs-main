import style from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByname } from "../../redux/actions";

const SearchBar = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState("");

	//Capturo input
	const handleChange = event => {
		setName(event.target.value);
	};

	//Funcion que hace dispatch con el input ingresado
	const onSearch = name => {
		dispatch(getDogsByname(name));
	};

	//Funcion que usa el buton para ejecutar onSearch y limpiar el input
	const handleSubmit = () => {
		onSearch(name);
		setName("");
	};

	//Funcion para ejecutar onSearch con enter
	const handleEnterKey = event => {
		if (event.key === "Enter") {
			handleSubmit();
		}
	};

	return (
		<div className={style.container}>
			<input
				placeholder="Ingrese una raza"
				type="search"
				value={name}
				onChange={handleChange}
				onKeyDown={handleEnterKey}
			/>

			<button onClick={handleSubmit}>Buscar</button>
		</div>
	);
};
export default SearchBar;
