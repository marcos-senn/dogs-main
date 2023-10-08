import { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ id, name, height, weight, life_span, image, temperament }) => {
	return (
		<NavLink to={`/detail/${id}`} className={`${style.card_container}`}>
			<img className={style.img} src={image} alt="" />
			<div className={style.info_container}>
				<h2 className={style.dog_name}>{name}</h2>
				<p>{temperament}</p>
				<p>Peso: {weight} kg</p>
			</div>
		</NavLink>
	);
};

export default Card;
