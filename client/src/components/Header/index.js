import React from 'react'
import {Link} from 'react-router-dom'
import styles from './styles.module.css'

import Logo from '../../assets/images/logo.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={Logo} className={styles.logo} alt="" />
            <nav className={styles.nav}>
                <Link to="/">Home</Link>
                <Link to="/">Articles</Link>
                <Link to="/">About</Link>
                <button>Logout</button>
            </nav>
        </header>
    )
}

export default Header
