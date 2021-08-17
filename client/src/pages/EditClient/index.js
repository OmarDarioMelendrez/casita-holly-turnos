import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from './styles.module.css'
import ClientFormEdit from "../../components/ClientFormEdit"

const AddTurn = () => {
    let { id } = useParams();
	const [client, setClient] = useState({});

    useEffect(() => {
		axios.get(`/api/client/${id}`).then((res) => {
			setClient(res.data.client);
		});
	}, [id]);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Editar turno</h2>
            <ClientFormEdit client={client} />
        </div>
    )
}

export default AddTurn