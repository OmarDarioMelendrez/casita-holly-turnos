import React, {useEffect, useState} from "react";
import axios from 'axios'
import styles from "./styles.module.css";

import CardClients from "../../components/CardClients";

const Clients = () => {

	const [clients, setClients] = useState([])
	const [filterClients, setFilterClients] = useState([])

	useEffect(() => {
		axios.get("/api/client")
			.then(res => {
				setClients(res.data.clients)
				setFilterClients(res.data.clients)
			})
	}, [])

	const handleFilterClients = (e) => {
		const filtereds = clients.filter(client => {
			return client.first_name.toLowerCase().includes(e.target.value.toLowerCase()) || client.last_name.toLowerCase().includes(e.target.value.toLowerCase())
		})
		setFilterClients(filtereds)
	}

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Listado de clientes</h2>
			<input onChange={(e)=> {handleFilterClients(e)}} className={styles.filter} type="text" placeholder="Busque por nombre o apelldio." />
			<div className={styles.main_container}>
				{
					filterClients.length ? filterClients.map(client => {
						return <CardClients client={client} />
					})
					:
					(
						<h3>Cliente no encontrado</h3>
					)
				}
			</div>
		</div>
	);
};

export default Clients;
