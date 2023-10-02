import style from "./Card.module.css";

const Card = ({ id, name, height, weight, life_span, image, temperament }) => {
	

	return (
		<div className={style.card_container}>
			<img className={style.img} src={image} alt="" />
			<h2>Nombre: {name}</h2>
			<h2>Temperamento :{temperament}</h2>
			<h2>Peso: {weight}</h2>
		</div>
	);
};

export default Card;
