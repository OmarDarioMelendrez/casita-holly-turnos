import React from 'react'

import styles from './styles.module.css'
import ClientForm from "../../components/ClientForm"

const AddTurn = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Agregar un nuevo cliente</h2>
            <ClientForm />
        </div>
    )
}

export default AddTurn