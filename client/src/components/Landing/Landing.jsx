import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
	return (
		<div className={style.container}>
			<div className={style.info_container}>
				<p>
					¡Bienvenido a Dog's App! <br />
					Busca tu raza favorita y conoce todo sobre ella.
				</p>

				<NavLink className={style.navlink} to="/home">
					<button className={style.btn_grad}>Ingresar</button>
				</NavLink>
			</div>

			<div className={style.image_container}>
				<img src="/pngegg.png" alt="dog-img" />
			</div>
		</div>
	);
};

export default Landing;
