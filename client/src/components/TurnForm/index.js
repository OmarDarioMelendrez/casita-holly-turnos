import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import styles from "./styles.module.css";

export default function TurnForm() {
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
				console.log("turno creado.");
				toast.success("Turno creado!", {
					position: "top-center",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				setTimeout(() => {
					history.push("/");
				}, 2000);
			})
			.catch((err) => {
				console.log("Error al crear turno.");
				toast.error('Error al crear turno!', {
					position: "top-center",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					});
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
				<span className={styles.errorMsg}>Indique el precio.</span>
			)}

			<input type="submit" />
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
		</form>
	);
}
