import { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ id, name, height, weight, life_span, image, temperament }) => {
	return (
		<NavLink to={`/detail/${id}`} className={`${style.card_container}`}>
			<img className={style.img} src={image} alt="" />
			<div>
				<h2>Nombre: {name}</h2>
				<h2>Temperamento: {temperament}</h2>
				<h2>Peso: {weight}</h2>
			</div>
		</NavLink>
	);
};

export default Card;
