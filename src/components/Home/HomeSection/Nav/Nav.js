import React from 'react';
import classes from './Nav.css';
import scrollToElement from 'scroll-to-element';

const Nav = () => {
	const handleScrollTo = (id) => {
		scrollToElement(`#${ id }`, {
			offset: 0,
			ease: 'linear',
			duration: 500
		});
	}

	return (
		<nav className={ classes.Nav }>
			<a
				className={ classes.Nav_link }
				onClick={ () => handleScrollTo('home') }
			>Эхлэл</a>
			<a 
				className={ classes.Nav_link }
				onClick={ () => handleScrollTo('about') }
			>Миний тухай</a>
			<a 
				className={ classes.Nav_link }
				onClick={ () => handleScrollTo('projects') }
			>Хийсэн төслүүд</a>
			<a 
				className={ classes.Nav_link }
				onClick={ () => handleScrollTo('contact') }
			>Холбогдох</a>
		</nav>
	)
}

export default Nav;