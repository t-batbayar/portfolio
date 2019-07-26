import React from 'react';

import classes from './Numbers.css';

const Numbers = props => {
    const jsx = (
        <div className={ classes.Numbers }>
            <button id="seven" className={ classes.Seven } onClick={ props.handleDisplay.bind({}, '7') }>7</button>
            <button id="eight" className={ classes.Eight } onClick={ props.handleDisplay.bind({}, '8') }>8</button>
            <button id="nine" className={ classes.Nine } onClick={ props.handleDisplay.bind({}, '9') }>9</button>
            <button id="four" className={ classes.Four } onClick={ props.handleDisplay.bind({}, '4') }>4</button>
            <button id="five" className={ classes.Five } onClick={ props.handleDisplay.bind({}, '5') }>5</button>
            <button id="six" className={ classes.Six } onClick={ props.handleDisplay.bind({}, '6') }>6</button>
            <button id="one" className={ classes.One } onClick={ props.handleDisplay.bind({}, '1') }>1</button>
            <button id="two" className={ classes.Two } onClick={ props.handleDisplay.bind({}, '2') }>2</button>
            <button id="three" className={ classes.Three } onClick={ props.handleDisplay.bind({}, '3') }>3</button>
            <button id="zero" className={ classes.Zero } onClick={ props.handleDisplay.bind({}, '0') }>0</button>
            <button id="decimal" className={ classes.Decimal } onClick={ props.handleDisplay.bind({}, '.') }>.</button>
        </div>
    );
    return jsx;
}

export default Numbers;