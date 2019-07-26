import React from 'react';

import classes from './Operators.css';

const Operators = props => {
    const jsx = (
        <div className={ classes.Operators }>
            <button id="add" onClick={ props.handleInput.bind({}, '+') }>+</button>
            <button id="subtract" onClick={ props.handleInput.bind({}, '-') }>-</button>
            <button id="multiply" onClick={ props.handleInput.bind({}, '*') }>*</button>
            <button id="divide" onClick={ props.handleInput.bind({}, '/') }>/</button>
        </div>
    );
    return jsx;
}

export default Operators;