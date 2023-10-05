import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div>
			<SearchBar/>
			<div>
				<button>
				<NavLink to="/home">Home</NavLink>
				</button>

				<button>
				<NavLink to="/form">Agregar raza</NavLink>
				</button>
			</div>
		</div>
	);
};
export default NavBar;
