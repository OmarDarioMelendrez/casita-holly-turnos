import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles.module.css";

import CardClients from "../../components/CardClients";

const Clients = () => {
	const [clients, setClients] = useState([]);
	const [filterClients, setFilterClients] = useState([]);

	useEffect(() => {
		axios.get("/api/client").then((res) => {
			setClients(res.data.clients);
			setFilterClients(res.data.clients);
		});
	}, []);

	const handleFilterClients = (e) => {
		const filtereds = clients.filter((client) => {
			return (
				client.first_name
					.toLowerCase()
					.includes(e.target.value.toLowerCase()) ||
				client.last_name
					.toLowerCase()
					.includes(e.target.value.toLowerCase())
			);
		});
		setFilterClients(filtereds);
	};

	const handleDelete = (id) => {
		let confirmated = window.confirm("Seguro que desea cancelar el turno?");
		if (confirmated) {
			axios
				.delete(`/api/client/${id}`)
				.then((res) => {
					toast.success("Cliente eliminado!", {
						position: "top-center",
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
					axios.get("/api/client").then((res) => {
						setClients(res.data.clients);
						setFilterClients(res.data.clients);
					});
				});
		}
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Listado de clientes</h2>
			<input
				onChange={(e) => {
					handleFilterClients(e);
				}}
				className={styles.filter}
				type="text"
				placeholder="Busque por nombre o apelldio."
			/>
			<div className={styles.main_container}>
				{filterClients.length ? (
					filterClients.map((client, e) => {
						return (
							<CardClients
								key={e}
								client={client}
								handleDelete={handleDelete}
							/>
						);
					})
				) : (
					<h3>Cliente no encontrado</h3>
				)}
			</div>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
};

export default Clients;
