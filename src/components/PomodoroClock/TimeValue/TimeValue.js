import React, { useState, useEffect } from 'react';

import classes from './TimeValue.css';

const Value = props => {
   return (
      <div id="break-label" className={ classes.TimeValue }>
         <div className={ classes.TimeValue__label }>{ props.timeValueType }</div>
         <div className={ classes.TimeValue__value }>
            <div 
               className={ classes.TimeValue__value__handler }
               id="break-decrement" 
               onClick={ () => props.handleDecrement(props.timeValueType) }
            >-</div>
            <div id="break-length">{ props.value }</div>
            <div
               className={ classes.TimeValue__value__handler }
               id="break-increment" 
               onClick={ () => props.handleIncrement(props.timeValueType) }
            >+</div>
         </div>
      </div>
   )
}

export default Value;