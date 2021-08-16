import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const CardTurns = ({ turn }) => {
	const formatDate = (date) => {
		const [year, month, day] = date.split("-");

		return `${day}/${month}/${year} `;
	};

	return (
		<Link to={`/turns/${turn.id}`} className={styles.clientLink}>
			<article className={styles.clientCard}>
				<h3
					className={styles.clientName}
				>{`Turno n ${turn.id} - ${turn.client.first_name} ${turn.client.last_name}`}</h3>
				<div className={styles.clientDataContainer}>
					<div className={styles.clientDataContainer__item}>
						<p className={styles.clientData}>
							<span>Fecha:</span> {formatDate(turn.date)}
						</p>
						<p className={styles.clientData}>
							<span>Horario:</span> {`${turn.hour} hs.`}
						</p>
					</div>
					<div className={styles.clientDataContainer__item}>
						<p className={styles.clientData}>
							<span>Precio:</span> {`$ ${turn.price}`}
						</p>
						<p className={styles.clientData}>
							<span>Estado:</span> {turn.state}
						</p>
					</div>
				</div>
				<div className={styles.clientPets}>
					<h5>Mascota:</h5>
					<div className={styles.petBadge}>{turn.pet}</div>
				</div>

				{/* <img
				className={styles.clientImage}
				src="https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png"
				alt=""
			/>
			<h3
				className={styles.clientName}
			>{`${client.first_name} ${client.last_name}`}</h3>
			<div className={styles.clientDataContainer}>
				<p className={styles.clientData}>
					<span>Email:</span> {client.email}
				</p>
				<p className={styles.clientData}>
					<span>Celular:</span> {client.phone}
				</p>
				<div className={styles.clientPets}>
					<h5>Mascotas:</h5>
					{client.pets.length ? client.pets.map(pet => {
                        return <div className={styles.petBadge}>{pet.name}</div>
                    }) : (
						<div className={styles.petBadge}>Sin mascotas</div>
					)}
				</div>
			</div> */}
			</article>
		</Link>
	);
};

export default CardTurns;
