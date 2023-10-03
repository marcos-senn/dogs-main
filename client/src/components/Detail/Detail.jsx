import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogById,cleanDetail } from "../../redux/actions.js";
import { useEffect } from "react";


const Detail = () => {
	const dispatch = useDispatch();
	const dogs = useSelector(state => state.dogDetail);

	const { id } = useParams();

	useEffect(() => {
			dispatch(getDogById(id));
            return () => dispatch(cleanDetail())
		}, [dispatch, id]
		
	);

	return (
		<div>
			<h2>ID: {dogs.id}</h2>
			<img src={dogs.image} alt="" />
			<h2>Nombre: {dogs.name}</h2>
			<h2>Altura: {dogs.height}</h2>
			<h2>Peso: {dogs.weight}</h2>
			<h2>Años de vida: {dogs.life_span}</h2>
			<h2>Temperamentos: {dogs.temperament}</h2>
		</div>
	);
};

export default Detail;
