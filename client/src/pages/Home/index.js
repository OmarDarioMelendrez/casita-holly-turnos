import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import Hero from '../../assets/images/logo2.svg'

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.main_container}>
				<div className={styles.main_left}>
					<h2 className={styles.title}>Bienvenidos a la casita de Holly</h2>
				</div>
				<div className={styles.main_right}>
                    <img src={Hero} alt="hero" />
					<button type="button" className={styles.button}>
						<Link to="/turns">
							Ver turnos
						</Link>
					</button>
                </div>
			</div>
		</div>
	);
};

export default Home;
