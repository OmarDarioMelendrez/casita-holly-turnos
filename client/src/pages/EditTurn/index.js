import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from './styles.module.css'
import TurnFormEdit from "../../components/TurnFormEdit"

const AddTurn = () => {
    let { id } = useParams();
	const [turn, setTurn] = useState({});

    useEffect(() => {
		axios.get(`/api/turn/${id}`).then((res) => {
			setTurn(res.data.turn);
		});
	}, [id]);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Editar turno</h2>
            <TurnFormEdit turn={turn} />
        </div>
    )
}

export default AddTurn