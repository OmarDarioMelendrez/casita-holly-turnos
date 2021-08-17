import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

export default function TurnFormEdit() {
	let history = useHistory();
	let { id } = useParams();

	const [form, setForm] = useState({});

	useEffect(() => {
		axios.get(`/api/turn/${id}`).then((res) => {
			setForm(res.data.turn);
		});
	}, [id]);

	const onSubmit = (e) => {
		e.preventDefault()
		axios
			.put(`/api/turn/${form.id}`, form)
			.then((res) => {
				console.log("turno actualizado.");
				history.push("/");
			})
			.catch((err) => {
				console.log("Error al asignar nueva mascota.");
			});
	};

	const handleChange = (e) => {
		setForm({...form, [e.target.name] : e.target.value})
	}

	if(form.id){
		return (
			<form onSubmit={(e)=>{onSubmit(e)}} className={styles.form}>
				<label htmlFor="ownerId">Dueño:</label>
				<select
					id="ownerId"
					name="ownerId"
					onChange={(e)=>{handleChange(e)}}
				>
					<option
						value={form.id}
					>{`${form.client.first_name} ${form.client.last_name}`}</option>
				</select>
				{/* {errors.ownerId && (
					<span className={styles.errorMsg}>Ingrese un dueño.</span>
				)} */}
				<label htmlFor="pet">Mascota:</label>
				<input
					type="text"
					id="pet"
					placeholder="Coloque el nombre de la mascota."
					name="pet"
					value={form.pet}
					onChange={(e)=>{handleChange(e)}}
				/>
				{/* {errors.pet && (
					<span className={styles.errorMsg}>
						El nombre de mascota es requerido.
					</span>
				)} */}
				<label htmlFor="date">Fecha:</label>
				<input
					type="date"
					id="date"
					name="date"
					value={form.date}
					onChange={(e)=>{handleChange(e)}}
				/>
				{/* {errors.date && (
					<span className={styles.errorMsg}>
						Por favor indique la fecha.
					</span>
				)} */}
				<label htmlFor="hour">Horario:</label>
				<input
					type="time"
					id="hour"
					name="hour"
					value={form.hour}
					onChange={(e)=>{handleChange(e)}}
				/>
				{/* {errors.hour && (
					<span className={styles.errorMsg}>
						Por favor indique el horario.
					</span>
				)} */}
				<label htmlFor="price">Price:</label>
				<input
					type="number"
					id="price"
					name="price"
					value={form.price}
					onChange={(e)=>{handleChange(e)}}
				/>
				{/* {errors.price && (
					<span className={styles.errorMsg}>Indique el precio.</span>
				)} */}
	
				<input type="submit" />
			</form>
		);
	} else {
		return (
			<h2>Loading</h2>
		);
	}
}
