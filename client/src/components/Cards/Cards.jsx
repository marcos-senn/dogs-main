import Card from "../Card/Card";
import getDogs from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState} from "react";

import styles from "./Cards.module.css";

const Cards = () => {
	const dogs = useSelector(state => state.dogs);
	const dispatch = useDispatch();

    const elementPerPage = 8;
    const [currentPage, setCurrentPage] = useState(0);

    const start = currentPage * elementPerPage;
    const end = start + elementPerPage; 

    const currentDogs = dogs.slice(start, end);
    
    const handlerNextPage = () => {
        if(end<dogs.length){
            setCurrentPage(currentPage + 1);
        }
    }
    
    const handlerPrevPage = () => {
        if(start>0){
            setCurrentPage(currentPage - 1);
        }
    }

	useEffect(() => {
		dispatch(getDogs(), [dispatch]);
	});

	return (
		<div>
			<div className={styles.container}>
				{currentDogs.map((dog) => {
					return (
						<Card
							key={dog.id}
							name={dog.name}
							temperament={dog.temperament}
							weight={dog.weight}
							image={dog.image}
						/>
					);
				})}
			</div>

			<div>
				<button onClick={handlerPrevPage} disabled={currentPage === 0}>Anterior</button>
				<button onClick={handlerNextPage} disabled={end >= dogs.length}>Siguiente</button>
			</div>
		</div>
	);
};

export default Cards;
