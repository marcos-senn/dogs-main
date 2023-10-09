import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
	return (
		<div className={style.container}>
			<div className={style.sbar}>
				<button className={style.button_container}>
					<NavLink className={style.button} to="/home">
						Home
					</NavLink>
				</button>

				<button className={style.button_container}>
					<NavLink className={style.button} to="/form">
						Crear raza
					</NavLink>
				</button>
			</div>
			<SearchBar/>
		</div>
	);
};
export default NavBar;
