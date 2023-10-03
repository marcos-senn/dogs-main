import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ id, name, height, weight, life_span, image, temperament }) => {
	

	return (
		
		
		<div className={style.card_container}>
			<img className={style.img} src={image} alt="" />
			<NavLink to={`/detail/${id}`}> 
			<h2>Nombre: {name}</h2>
			</NavLink>
			<h2>Temperamento :{temperament}</h2>
			<h2>Peso: {weight}</h2>
			
		</div>
		
	);
};

export default Card;
