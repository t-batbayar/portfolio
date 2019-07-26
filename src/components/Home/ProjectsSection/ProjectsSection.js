import React, { useState, useEffect } from 'react';

import classes from './ProjectsSection.css';
import Section from '../../../containers/Section';

import SingleProject from './SingleProject/SingleProject';

import projectsData from '../../../projects.json';

const ProjectsSection = () => {

	const [projects, setProjects] = useState([]);

	const handleShowMore = () => {
		if (projects.length < projectsData.projects.length) {
			const startIndex = projects.length === 0 ? 0 : projects.length;
			const endIndex = projects.length === 0 ? 2 : startIndex + 2;
			const newProjects = projectsData.projects.slice(startIndex, endIndex);
			setProjects([ ...projects, ...newProjects ]);
		}
	}

	useEffect(() => {
		handleShowMore();
	}, []);

	return (
		<Section id="projects">
			<h1 className="section__header">
				Төслүүд
			</h1>
			{ projects.map(({ id, name, description, image, github, stacks, link }, index) => (
				<SingleProject
					key={ id }
					name={ name }
					description={ description }
					image={ image }
					github={ github }
					stacks={ stacks }
					index={ index }
					link={ link }
				/>
			)) }
			{ projects.length < projectsData.projects.length && 
				<button className={ classes.ShowMore } onClick={ handleShowMore }>Бусад төслүүд</button> 
			}
		</Section>
	)
}

export default ProjectsSection;