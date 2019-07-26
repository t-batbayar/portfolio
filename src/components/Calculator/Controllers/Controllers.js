import React from 'react';

import classes from './Controllers.css';

const Controllers = props => {
    const jsx = (
        <div className={ classes.Controllers }>
            <button id="clear" className={ classes.Clear } onClick={ props.handleClear }>AC</button>
            <button id="sign" className={ classes.Sign } onClick={ props.handleReverseSign }>±</button>
            <button id="equals" className={ classes.Equals } onClick={ props.handleShowResult }>=</button>
        </div>
    );
    return jsx;
}

export default Controllers;