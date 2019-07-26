import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

import classes from './SingleProject.css';

const projectsImgPath = require.context('../../../../assets/projects', false);
const iconsPath = require.context('../../../../assets/icons', false);

const SingleProject = props => {
    const translateXValue = props.index % 2 === 1 ? 'translateX(-50%)' : 'translateX(50%)';

    const [ref, inView] = useInView({
        threshold: 0.25,
        triggerOnce: true
    });

    const springAnimation = useSpring({
        transform: inView ? 'translateX(0)' : translateXValue,
        opacity: inView ? 1 : 0
    });

    return (
        <animated.div ref={ ref } style={ springAnimation } className={ classes.item }>
            <div className={ classes.item__img }>
                <img src={ projectsImgPath(`./${props.image}`) } alt={ props.name } />
            </div>
            <div className={ classes.item__info }>
                <h3 className={ classes.item__title }>{ props.name }</h3>
                <p className={ classes.item__desc }>
                    { props.description }
                </p>
                <div className={ classes.item__links }>
                    <a className={ classes.item__link } href={ props.github } target="_blank" >
                        <img src={ iconsPath('./git.png') } alt={ `${ props.name } эх код` }/>Github
                    </a>
                    <Link className={ classes.item__link } to={ `/${ props.link }` }>
                        <img src={ iconsPath('./globe.png') } alt={ `${props.name} холбоос` } />Үзэх
                    </Link>
                </div>
                <div className={ classes.item__stack }>
                    <h4 className={ classes.item__stack__title }>Технологи</h4>
                    <ul className={ classes.item__stack__list }>
                        {props.stacks.map((stack, i) => <li key={ stack + i }>{ stack }</li>)}
                    </ul>
                </div>
            </div>
        </animated.div>
    )
}

export default SingleProject;