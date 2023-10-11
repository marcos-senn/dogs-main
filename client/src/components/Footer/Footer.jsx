import React from "react";
import styles from "./Footer.module.css"; 

function Footer() {
	return (
		<footer className={styles.footerContainer}>
			<div className={styles.logos}>
				<a href="https://www.linkedin.com/in/marcossenn/">
					<img
						src="/linkedinlogo.png" 
						alt="LinkedIn"
						width="25" 
						height="25" 
					/>
				</a>
				<a href="https://github.com/marcos-senn">
        <img
						src="/githublogo.png" 
						alt="LinkedIn"
						width="25" 
						height="25" 
					/>
        </a>
			</div>
			<p>© Marcos Senn, Reservados todos los derechos.</p>
		</footer>
	);
}

export default Footer;
