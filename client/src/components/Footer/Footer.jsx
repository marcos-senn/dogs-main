import React from "react";
import styles from "./Footer.module.css"; // Importa los estilos CSS como un módulo

function Footer() {
	return (
		<footer className={styles.footerContainer}>
			<div className={styles.logos}>
				<a href="https://www.linkedin.com/in/marcossenn/">
					<img
						src="/linkedinlogo.png" // Reemplaza con la ruta real a la imagen PNG de LinkedIn
						alt="LinkedIn"
						width="25" // Ajusta el ancho según tus preferencias
						height="25" // Ajusta la altura según tus preferencias
					/>
				</a>
				<a href="https://github.com/marcos-senn">
        <img
						src="/githublogo.png" // Reemplaza con la ruta real a la imagen PNG de LinkedIn
						alt="LinkedIn"
						width="25" // Ajusta el ancho según tus preferencias
						height="25" // Ajusta la altura según tus preferencias
					/>
        </a>
			</div>
			<p>© Marcos Senn, Reservados todos los derechos.</p>
		</footer>
	);
}

export default Footer;
