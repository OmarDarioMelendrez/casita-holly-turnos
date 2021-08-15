import React from 'react'

import styles from './styles.module.css'
import PetForm from "../../components/PetForm"

const AddTurn = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Agregar mascota nueva</h2>
            <PetForm />
        </div>
    )
}

export default AddTurn