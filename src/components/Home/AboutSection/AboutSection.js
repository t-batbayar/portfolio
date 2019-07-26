import React from 'react';

import classes from './AboutSection.css';
import Section from '../../../containers/Section';
import Info from './Info/Info';
import Skills from './Skills/Skills';

const AboutSection = () => {
	return (
		<Section blue={ 'section_blue' } id="about">
			<h1 className="section__header">
				Миний тухай
			</h1>
			<Info />
			<h2 className="section__subheader">
				Ашигладаг технологиуд
			</h2>
			<Skills />
		</Section>
	)
}

export default AboutSection;