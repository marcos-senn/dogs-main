import Card from "../Card/Card";
import { getDogs } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Filter from "../Filter/Filter";

import styles from "./Cards.module.css";

const Cards = () => {
	//Estado para saber si ya se obtuvieron los datos de la api
	const [dataLoaded, setDataLoaded] = useState(false);

	//Estado dogs de la store
	const dogs = useSelector(state => state.dogs);

	const dispatch = useDispatch();

	//-----------Paginado----------------
	const elementPerPage = 8;
	const [currentPage, setCurrentPage] = useState(0);

	const start = currentPage * elementPerPage;
	const end = start + elementPerPage;

	const currentDogs = Array.isArray(dogs) ? dogs.slice(start, end) : [];

	const handlerNextPage = () => {
		if (end < dogs.length) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlerPrevPage = () => {
		if (start > 0) {
			setCurrentPage(currentPage - 1);
		}
	};

	//controlar el renderizado de la pagina
	useEffect(
		() => {
			//Hago dispatch para obtener los perros  la api
			dispatch(getDogs()).then(() => {
				setDataLoaded(true); // Cambio a true el data loaded una vez que obtengo todos los datos para que se renderize
			});
		},
		[dispatch],
		dogs
	);

	return (
		<div>
			<Filter />
			{dataLoaded ? ( // Pregunto si dataLoaded es true para renderizar
				<div>
					{currentDogs.length === 0 ? (
						<p>
							No se encontraron resultados
							<br />
							verifique e intente nuevamente
						</p>
					) : null}
					<div className={styles.container}>
						{currentDogs.map(dog => {
							const dogTemperament = dog.temperament
								? dog.temperament
								: dog.Temperaments
								? dog.Temperaments.map(temperament => temperament.name).join(
										", "
								  )
								: "";
							return (
								<Card
									key={dog.id}
									id={dog.id}
									name={dog.name}
									temperament={dogTemperament}
									weight={dog.weight}
									image={dog.image}
								/>
							);
						})}
					</div>

					<div className={styles.buttons_container}>
						<button onClick={handlerPrevPage} disabled={currentPage === 0}>
							Anterior
						</button>
						<button onClick={handlerNextPage} disabled={end >= dogs.length}>
							Siguiente
						</button>
					</div>
				</div>
			) : (
				//Si todavia no se puede renderizar muestro un mensaje de cargando
				<p>Cargando datos...</p>
			)}
		</div>
	);
};

export default Cards;
