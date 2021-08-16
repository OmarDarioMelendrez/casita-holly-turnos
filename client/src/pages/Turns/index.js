import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

import CardTurns from "../../components/CardTurns";

const Turns = () => {
	const [turns, setTurns] = useState([]);
	const [filterTurns, setFilterTurns] = useState([]);

	useEffect(() => {
		axios.get("/api/turn").then((res) => {
			setTurns(res.data.turns);
			setFilterTurns(res.data.turns);
		});
	}, []);

	const handleFilterTurns = (e) => {
		const filtereds = turns.filter((turn) => {
			return (
				turn.client.first_name
					.toLowerCase()
					.includes(e.target.value.toLowerCase()) ||
				turn.client.last_name
					.toLowerCase()
					.includes(e.target.value.toLowerCase())
			);
		});
		setFilterTurns(filtereds);
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Listado de Turnos</h2>
			<input
				onChange={(e) => {
					handleFilterTurns(e);
				}}
				className={styles.filter}
				type="text"
				placeholder="Busque por cliente."
			/>
			<div className={styles.main_container}>
				{filterTurns.length ? (
					filterTurns.map((turn) => {
						return <CardTurns turn={turn} />;
					})
				) : (
					<h3>Cliente no encontrado</h3>
				)}
			</div>
		</div>
	);
};

export default Turns;
