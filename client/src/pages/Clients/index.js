import React, {useEffect, useState} from "react";
import axios from 'axios'
import styles from "./styles.module.css";

import CardClients from "../../components/CardClients";

const Clients = () => {

	const [clients, setClients] = useState([])

	useEffect(() => {
		axios.get("/api/client")
			.then(res => {
				setClients(res.data.clients)
			})
	}, [])

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Listado de clientes</h2>
			<div className={styles.main_container}>
				{
					clients.length && clients.map(client => {
						return <CardClients client={client} />
					})
				}
			</div>
		</div>
	);
};

export default Clients;
