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
		});
	}, [id]);

	const formatDate = (date) => {
		const [year, month, day] = date.split("-");

		return `${day}/${month}/${year} `;
	};

	const handleDone = () => {
		let confirmated = window.confirm("Ya realizo el turno?");
		if (confirmated) {
			axios
				.put(`/api/turn/${id}`, { ...turn, state: "realizado" })
				.then((res) => {
					axios.get(`/api/turn/${id}`).then((res) => {
						setTurn(res.data.turn);
						window.alert("turno actualizado");
					});
				});
		}
	};

	const handleCancel = () => {
		let confirmated = window.confirm("Seguro que desea cancelar el turno?");
		if (confirmated) {
			axios
				.put(`/api/turn/${id}`, { ...turn, state: "cancelado" })
				.then((res) => {
					axios.get(`/api/turn/${id}`).then((res) => {
						setTurn(res.data.turn);
						window.alert("turno actualizado");
					});
				});
		}
	};

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
						<button
							onClick={handleDone}
							className={`${styles.btn} ${styles.done}`}
						>
							Terminado
						</button>
						<button
							onClick={handleCancel}
							className={`${styles.btn} ${styles.delete}`}
						>
							Cancelar
						</button>
						<button className={`${styles.btn} ${styles.edit}`}>
							Editar
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
