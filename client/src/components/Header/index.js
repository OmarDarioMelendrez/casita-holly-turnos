import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "../../assets/images/logo.svg";

const Header = () => {
	const [isNavVisible, setIsNavVisible] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 700px)");
		mediaQuery.addListener(handleMediaQueryChange);
		handleMediaQueryChange(mediaQuery);
		return () => {
			mediaQuery.removeListener(handleMediaQueryChange);
		};
	}, []);

    const handleMediaQueryChange = (mediaQuery) => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true)
        } else {
            setIsSmallScreen(false)
        }
    }

	const toggleNav = () => {
		setIsNavVisible(!isNavVisible);
	};

	return (
		<header className={styles.header}>
			<img src={Logo} className={styles.logo} alt="" />
			{(!isSmallScreen || isNavVisible) && (
				<nav className={styles.nav}>
					<Link to="/">Home</Link>
					<Link to="/">Articles</Link>
					<Link to="/">About</Link>
				</nav>
			)}
			<button onClick={toggleNav} className={styles.burger}>
				{isNavVisible ? <FaTimes /> : <FaBars />}
			</button>
		</header>
	);
};

export default Header;
