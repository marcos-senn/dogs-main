import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogById, cleanDetail } from "../../redux/actions.js";
import { useEffect } from "react";
import style from "./Detail.module.css";

const Detail = () => {
	const dispatch = useDispatch();
	const dogs = useSelector(state => state.dogDetail);
	let temperament;
	const { id } = useParams();

	useEffect(() => {
		dispatch(getDogById(id));
		return () => dispatch(cleanDetail());
	}, [dispatch, id]);

	if (Array.isArray(dogs.Temperaments)) {
		temperament = dogs.Temperaments.map(temperament => temperament.name).join(
			","
		);
	}

	return (
		<div className={style.container}>
			<div className={style.identifier}>
				<img src={dogs.image} className={style.image} alt="" />
			</div>

			<div className={style.info}>
				<h2 className={style.name}>{dogs.name}</h2>
				<h2 className={style.other_data}>ID: {dogs.id}</h2>
				<h2 className={style.other_data}>Altura:{dogs.height}</h2>
				<h2 className={style.other_data}>Peso: {dogs.weight}</h2>
				<h2 className={style.other_data}>Años de vida: {dogs.life_span}</h2>
				<h2 className={style.other_data}>
					Temperamentos: {dogs.temperament ? dogs.temperament : temperament}
				</h2>
			</div>
		</div>
	);
};

export default Detail;
