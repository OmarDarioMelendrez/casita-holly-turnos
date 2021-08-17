import React from "react";
import {Link} from "react-router-dom"
import styles from "./styles.module.css";

const CardClients = ({ client, handleDelete }) => {

	return (
		<article className={styles.clientCard}>
			<img
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
					{client.pets.length ? (
						client.pets.map((pet) => {
							return (
								<div className={styles.petBadge}>
									{pet.name}
								</div>
							);
						})
					) : (
						<div className={styles.petBadge}>Sin mascotas</div>
					)}
				</div>
				<div className={styles.actions}>
					<button
						onClick={()=>{handleDelete(client.id)}}
						className={`${styles.btn} ${styles.delete}`}
					>
						Eliminar
					</button>
					<button className={`${styles.btn} ${styles.done}`}>
						<Link to={`/clients/edit/${client.id}`}>Editar</Link>
					</button>
				</div>
			</div>
		</article>
	);
};

export default CardClients;
