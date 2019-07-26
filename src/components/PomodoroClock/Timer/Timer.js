import React from 'react';

import classes from './Timer.css';

const Time = props => {
   const minutes = (props.minutes < 10) ? `0${ props.minutes }` : `${ props.minutes }`;
   const seconds = (props.seconds < 10) ? `0${ props.seconds }` : `${ props.seconds }`;
   let displayColor = {};

   if (props.minutes === 0) {
      displayColor = { color: 'red' }
   }

   return (
      <div id="timer" className={ classes.Timer }>
         <div 
            id="timer-label" 
            className={ classes.Timer__label }
         >{ props.timerType }</div>
         <div 
            id="time-left" 
            className={ classes.Timer__time } 
            style={ displayColor }
         >{ minutes }:{ seconds }</div>
      </div>
   )
}

export default Time;