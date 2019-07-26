import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import NavMobile from './NavMobile/NavMobile';
import Nav from './Nav/Nav';
import classes from './HomeSection.css';
import Section from '../../../containers/Section';
const NavMobileShowIconPath = require.context('../../../assets', false) ;

const HomeSection = () => {
	const [ showMobileNav, setShowMobileNav ] = useState(false);

	const handleMobileNavShow = () => {
		setShowMobileNav(true);
	}

	const handleMobileNavHide = () => {
		setShowMobileNav(false);
	}

	const heroTextSpring = useSpring({
		from: {
			transform: 'translateX(100%)',
			opacity: 0
		},
		transform: 'translateX(25%)',
		opacity: 1,
		config: {
			duration: 1500
		}
	});

	return (
		<React.Fragment>
			<Section home={ true } id="home">
				<div className={ classes.Home }>

					<div 
						className={ classes.NavMobileMenuShowIcon } 
						onClick={ handleMobileNavShow }
					>
						<img src={ NavMobileShowIconPath('./menu.png') } className={ classes.NavMobileMenuShowIcon__Icon } />
					</div>

					{ showMobileNav &&  <NavMobile handleMobileNavHide={ handleMobileNavHide }  /> }

					<div className={ classes.HeroTextContainer }>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500.619 515.894" strokeWidth="4" fill="white" stroke="#0080ff">
							<path d="M731.619,712.038v90H235V290.146H731.619V498.959" transform="translate(-233 -288.146)"></path>
						</svg>
						<animated.div className={ classes.HeroText } style={ heroTextSpring }>
							{/* <div className={ classes.HeroText__Greeting }>Сайн байна уу</div> */}
							<div className={ classes.HeroText__Name }>Тутаагийн <span className={ classes.HeroText__Blue }>Батбаяр</span></div>
							<div className={ classes.HeroText__Info }>Фронт энд хөгжүүлэгч</div>
						</animated.div>
					</div>
					<Nav />
				</div>
			</Section>
		</React.Fragment>
	);
}


export default HomeSection;