import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

export default function PetForm() {
	let history = useHistory();

	const [owners, setOwners] = useState([]);

	useEffect(() => {
		axios.get("/api/client").then((res) => {
			setOwners(res.data.clients);
		});
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data, e) => {
		console.log(data);
		axios
			.post("api/turn", data)
			.then((res) => {
				console.log("turno creado.")
				history.push("/");
				e.target.reset();
			})
			.catch((err) => {
				console.log("Error al asignar nueva mascota.");
			});
	};
	console.log("errors:  " + { ...errors });

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<label htmlFor="ownerId">Dueño:</label>
			<select
				id="ownerId"
				name="ownerId"
				{...register("ownerId", {
					required: true,
				})}
			>
				{owners &&
					owners.map((owner) => {
						return (
							<option
								key={owner.id}
								value={owner.id}
							>{`${owner.first_name} ${owner.last_name}`}</option>
						);
					})}
			</select>
			{errors.ownerId && (
				<span className={styles.errorMsg}>Ingrese un dueño.</span>
			)}
			<label htmlFor="pet">Mascota:</label>
			<input
				type="text"
				id="pet"
				placeholder="Coloque el nombre de la mascota."
				name="pet"
				{...register("pet", {
					required: true,
					min: 3,
					maxLength: 80,
				})}
			/>
			{errors.pet && (
				<span className={styles.errorMsg}>
					El nombre de mascota es requerido.
				</span>
			)}
			<label htmlFor="date">Fecha:</label>
			<input
				type="date"
				id="date"
				name="date"
				{...register("date", {
					required: true,
				})}
			/>
			{errors.date && (
				<span className={styles.errorMsg}>
					Por favor indique la fecha.
				</span>
			)}
			<label htmlFor="hour">Horario:</label>
			<input
				type="time"
				id="hour"
				name="hour"
				{...register("hour", {
					required: true,
				})}
			/>
			{errors.hour && (
				<span className={styles.errorMsg}>
					Por favor indique el horario.
				</span>
			)}
			<label htmlFor="price">Price:</label>
			<input
				type="number"
				id="price"
				placeholder="price"
				{...register("price", {
					required: true,
					min: 10,
					maxLength: 12,
				})}
			/>
			{errors.price && (
				<span className={styles.errorMsg}>
					Indique el precio.
				</span>
			)}

			<input type="submit" />
		</form>
	);
}
