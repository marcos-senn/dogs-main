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

	//-----------Paginado Anterior y Siguiente----------------
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

	//-----------Paginado Botones intermedios----------------
	// const totalPages = Math.ceil(dogs.length / elementPerPage);

	// const renderPageNumbers = () => {
	// 	const pageNumbers = [];
	// 	for (let i = 0; i < totalPages; i++) {
	// 		pageNumbers.push(
	// 			<button
	// 				key={i}
	// 				className={styles.inter}
	// 				onClick={() => setCurrentPage(i)}
	// 			>
	// 				{i + 1}
	// 			</button>
	// 		);
	// 	}
	// 	return pageNumbers;
	// };

	const maxPageNumbersToShow = 5; //  muestro 5 botones en el medio

	const renderPageNumbers = () => {
		const pageNumbers = [];
		const totalPages = Math.ceil(dogs.length / elementPerPage); //divido la cantidad de perros por la cantidad de perros por pagina para saber cuantas paginas voy a tener en cada boton intermedio

		let startPage = Math.max(
			currentPage - Math.floor(maxPageNumbersToShow / 2),
			0
		);
		let endPage = Math.min(
			startPage + maxPageNumbersToShow - 1,
			totalPages - 1
		);

		if (endPage - startPage < maxPageNumbersToShow - 1) {
			startPage = Math.max(endPage - maxPageNumbersToShow + 1, 0);
		}

		for (let i = startPage; i <= endPage; i++) {
			pageNumbers.push(
				<button
					key={i}
					className={`${styles.inter} ${
						i === currentPage ? styles.activeButton : ""
					}`}
					onClick={() => setCurrentPage(i)}
				>
					{i + 1}
				</button>
			);
		}
		return pageNumbers;
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
						<button
							className={styles.next}
							onClick={handlerPrevPage}
							disabled={currentPage === 0}
						>
							Anterior
						</button>
						{renderPageNumbers()} {/* renderizo botones intermedios */}
						<button
							className={styles.next}
							onClick={handlerNextPage}
							disabled={end >= dogs.length}
						>
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
