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
				<button>Nueva Raza</button>
			</div>
		</div>
	);
};
export default NavBar;
