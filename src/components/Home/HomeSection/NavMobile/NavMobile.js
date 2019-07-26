import React from 'react';
import scrollToElement from 'scroll-to-element';
import classes from './NavMobile.css';
const NavMobileCloseIconPath = require.context('../../../../assets', false) ;

const NavMobile = props => {

   const handleScrollTo = (id) => {
		scrollToElement(`#${ id }`, {
			offset: 0,
			ease: 'linear',
			duration: 500
		});
   }
   
   return (
      <div className={ classes.NavMobile }>
         <div className={ classes.NavMobile__Links }>
            <div className={ classes.NavMobile__Close } onClick={ props.handleMobileNavHide }>
               <img src={ NavMobileCloseIconPath('./close.png') } className={ classes.NavMobile__Close__Image } />
            </div>
            <a 
               className={ classes.NavMobile__Link }
               onClick={ () => {
                  handleScrollTo('about')
                  props.handleMobileNavHide()
               } }
            >Миний тухай</a>
            <a 
               className={ classes.NavMobile__Link }
               onClick={ () => {
                  handleScrollTo('projects')
                  props.handleMobileNavHide()
               } }
            >Хийсэн төслүүд</a>
            <a 
               className={ classes.NavMobile__Link }
               onClick={ () => {
                  handleScrollTo('contact')
                  props.handleMobileNavHide()
               } }
            >Холбогдох</a>
         </div>
      </div>
   )
}

export default NavMobile;