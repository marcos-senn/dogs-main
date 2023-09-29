import style from "./SearchBar.module.css";

const NavBar = () => {
	return (
		<div className={style.container}>
			<input placeholder="Busqué una raza" type="search"/>
			<button>Buscar</button>
		</div>
	);
};

export default NavBar;