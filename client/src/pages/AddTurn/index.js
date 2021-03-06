import React from 'react'

import styles from './styles.module.css'
import TurnForm from "../../components/TurnForm"

const AddTurn = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Agregar un turno</h2>
            <TurnForm />
        </div>
    )
}

export default AddTurn