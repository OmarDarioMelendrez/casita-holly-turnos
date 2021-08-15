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
			.post("api/pet", data)
			.then((res) => {
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
			<label htmlFor="firstName">Nombre mascota:</label>
			<input
				type="text"
				id="name"
				placeholder="Coloque el nombre de la mascota."
				name="name"
				{...register("name", {
					required: true,
					min: 3,
					maxLength: 80,
				})}
			/>
			{errors.name?.type === "required" && (
				<span className={styles.errorMsg}>El nombre es requerido.</span>
			)}
			<label htmlFor="breed">Raza:</label>
			<input
				type="text"
				placeholder="Coloque raza de la mascota."
				id="breed"
				name="breed"
				{...register("breed", {
					required: true,
					min: 3,
					maxLength: 100,
				})}
			/>
			{errors.breed && (
				<span className={styles.errorMsg}>La raza es requerida.</span>
			)}
			<label htmlFor="size">Tamaño:</label>
			<select
				id="size"
				name="size"
				{...register("size", {
					required: true,
				})}
			>
				<option value="chico">chico</option>
				<option value="mediano">mediano</option>
				<option value="grande">grande</option>
			</select>
			{errors.size && (
				<span className={styles.errorMsg}>
					Indique el tamaño de la mascota.
				</span>
			)}

			<input type="submit" />
		</form>
	);
}
