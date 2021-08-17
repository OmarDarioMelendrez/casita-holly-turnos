import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import styles from "./styles.module.css";

export default function ClientForm() {
	let history = useHistory();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data, e) => {
		axios
			.post("api/client", data)
			.then((res) => {
				console.log("cliente creado.");
				toast.success("Cliente creado!", {
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
				console.log("Error al crear cliente.");
			});
	};
	console.log("errors:  " + { ...errors });

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<label htmlFor="firstName">Nombre:</label>
			<input
				type="text"
				id="firstName"
				placeholder="Coloque su nombre."
				name="first_name"
				{...register("first_name", {
					required: true,
					min: 3,
					maxLength: 80,
				})}
			/>
			{errors.first_name?.type === "required" && (
				<span className={styles.errorMsg}>El nombre es requerido.</span>
			)}
			<label htmlFor="lastName">Apellido:</label>
			<input
				type="text"
				placeholder="Coloque su apellido."
				id="lastName"
				name="last_name"
				{...register("last_name", {
					required: true,
					min: 3,
					maxLength: 100,
				})}
			/>
			{errors.last_name && (
				<span className={styles.errorMsg}>
					El apellido es requerido.
				</span>
			)}
			<label htmlFor="email">Email:</label>
			<input
				type="text"
				placeholder="Coloque su email."
				id="email"
				name="email"
				{...register("email", {
					required: true,
					pattern: /^\S+@\S+$/i,
				})}
			/>
			{errors.email && (
				<span className={styles.errorMsg}>
					Ingrese un email válido.
				</span>
			)}
			<label htmlFor="phone">Celular:</label>
			<input
				type="tel"
				placeholder="Coloque su celular."
				id="phone"
				name="phone"
				{...register("phone", {
					required: true,
					minLength: 10,
					maxLength: 12,
				})}
			/>
			{errors.phone && (
				<span className={styles.errorMsg}>
					Ingrese un teléfono válido.
				</span>
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
