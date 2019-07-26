import React from 'react';

import classes from './Skills.css';
const techIconsPath = require.context('../../../../assets/tech-icons', false);

const Skills = () => {
	return (
		<div className={ classes.Skills }>
			<div className={ classes.Skills__item }>
				<img 
					src={ techIconsPath('./html5.png') }
					alt="HTML5" 
					className={ classes.Skills__item__img } 
				/>
				<span className={ classes.Skills__item__name }>HTML5</span>
			</div>
			<div className={ classes.Skills__item }>
				<img 
					src={ techIconsPath('./css3.png') } 
					alt="CSS3" 
					className={ classes.Skills__item__img } 
				/>
				<span className={ classes.Skills__item__name }>CSS3</span>
			</div>
			<div className={ classes.Skills__item }>
				<img 
					src={ techIconsPath('./js.png') } 
					alt="Javascript" 
					className={ classes.Skills__item__img } 
				/>
				<span className={ classes.Skills__item__name }>JavaScript</span>
			</div>
			<div className={ classes.Skills__item }>
				<img 
					src={ techIconsPath('./react.png') } 
					alt="React" 
					className={ classes.Skills__item__img } 
				/>
				<span className={ classes.Skills__item__name }>React</span>
			</div>
			<div className={ classes.Skills__item }>
				<img 
					src={ techIconsPath('./jest.png') } 
					alt="Jest" 
					className={ classes.Skills__item__img }
				/>
				<span className={ classes.Skills__item__name }>Jest</span>
			</div>
			<div className={ classes.Skills__item }>
				<img 
					src={ techIconsPath('./sass.png') } 
					alt="SASS" 
					className={ classes.Skills__item__img } 
				/>
				<span className={ classes.Skills__item__name }>Sass</span>
			</div>
			<div className={ classes.Skills__item }>
				<img 
					src={ techIconsPath('./git.png') } 
					alt="Git" 
					className={ classes.Skills__item__img } 
				/>
				<span className={ classes.Skills__item__name }>Git</span>
			</div>	
		</div>
	)
}

export default Skills;