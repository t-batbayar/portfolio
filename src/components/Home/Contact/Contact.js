import React from 'react';

import classes from './Contact.css';

import Section from '../../../containers/Section';

const Contact = () => {
    return (
        <Section blue={ 'section_blue' } id="contact">
            <h1 className='section__header'>Холбогдох</h1>
            <div className={ classes.ContactInfo }>
                <div className={ classes.ContactListItem }>
                    <i className={ `icon ion-md-call ${ classes.Icon }` }></i>
                    <span className={ classes.Text }>+976 88131789</span>
                </div>
                <div className={ classes.ContactListItem }>
                    <i className={ `icon ion-md-mail ${ classes.Icon }` }></i>
                    <a href="mailto:batbayar0105@gmail.com" target="_self" className={ classes.Link }><span className={ classes.Text }>batbayar0105@gmail.com</span></a>
                </div>
                <div className={ classes.ContactListItem }>
                    <i className={ `icon ion-logo-github ${ classes.Icon }` }></i>
                    <a 
                        href="https://github.com/t-batbayar" 
                        className={ classes.Link } 
                        rel="noopener noreferrer" 
                        target="_blank"
                    ><span className={ classes.Text }>https://github.com/t-batbayar</span></a>
                </div>
                <div className={ classes.ContactListItem }>
                    <i className={ `icon ion-logo-codepen ${ classes.Icon }` }></i>
                    <a 
                        href="https://codepen.io/t-batbayar/" 
                        className={ classes.Link } 
                        rel="noopener noreferrer" 
                        target="_blank"
                    ><span className={ classes.Text }>https://codepen.io/t-batbayar/</span></a>
                </div>
            </div>
        </Section>
    )
}

export default Contact;