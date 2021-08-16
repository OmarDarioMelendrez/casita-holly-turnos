import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

const Turns = () => {
	const history = useHistory();
	let { id } = useParams();
	console.log(id);
	const [turn, setTurn] = useState({});

	useEffect(() => {
		axios.get(`/api/turn/${id}`).then((res) => {
			setTurn(res.data.turn);
			console.log(res.data.turn);
		});
	}, [id]);

	const formatDate = (date) => {
		const [year, month, day] = date.split("-");

		return `${day}/${month}/${year} `;
	};

	const handleDelete = () => {
		let confirmated = window.confirm("Seguro que desea borrar el turno?")
		if (confirmated){
			axios.delete(`/api/turn/${id}`)
			.then(res => {
				history.push("/")
			})
		}
	}

	if (turn && turn.id) {
		return (
			<div className={styles.container}>
				<div className={styles.turnContainer}>
					<h2
						className={styles.title}
					>{`N° ${turn.id} - ${turn.client.first_name} ${turn.client.last_name}`}</h2>
					<div className={styles.main_container}></div>
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
					<div className={styles.actions}>
						<button  className={`${styles.btn} ${styles.edit}`}>
							Editar
						</button>
						<button onClick={handleDelete} className={`${styles.btn} ${styles.delete}`}>
							Borrar
						</button>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className={styles.container}>
				<h2 className={styles.title}>{`Loading`}</h2>
			</div>
		);
	}
};

export default Turns;
