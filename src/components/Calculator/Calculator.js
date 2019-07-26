import React, { useState, useEffect } from 'react';
import classes from './Calculator.css';

import AnimatedPageWrapper from '../../containers/AnimatedPageWrapper';

import Operators from './Operators/Operators';
import Controllers from './Controllers/Controllers';
import Numbers from './Numbers/Numbers';

const Calculator = () => {

    useEffect(() => {
        document.title = "Тооны машин"
    }, []);

    // States
    const [finished, setFinished] = useState(false);
    const [inputDisplay, setInputDisplay] = useState('');
    const [display, setDisplay] = useState('0');
    const [zero, setZero] = useState(false);

    // Resets
    const handleClear = () => {
        setFinished(false);
        setInputDisplay('');
        setDisplay('0');
        setZero(false);
    }

    // If display is not equal to '0' change its' sign
    const handleReverseSign = () => {
        if (display !== '0') {
            const reversed = Number(display) * (-1);
            setDisplay(reversed);
        }
    }

    // Handles number buttons click
    const handleDisplay = (val) => {
        /*
            1. Checks if previously did the calculate
                If true clears inputDisplay display and sets display value
            2. Checks if display.length is shorter than 15
                If not stop running function
            3. Checks if clicked number button value is '0' and display value is '0'
                If true sets zero to true and stop running function */
        if (finished) {
            setFinished(false);
            setInputDisplay('');
            return (val !== '.') ? setDisplay(val) : setDisplay('0');
        } else if (display.length >= 15) {
            return;
        } else if (val === '0' && display === '0') {
            setZero(true);
            return;
        } else if (zero) {
            setZero(false);
        }

        /*
            1. Check if:
                    - Clicked number button value is '.'
                    - Display value is not decimal (doesn't contain '.')
                    - Finished is not true
                    - Clicked number button value is '0'. Because Number(newValue) won't let allow decimal number to have 0 behind it
                    '.' to display value
            2. Else declare display's new value
        */
        let newValue;
        const displayIsDecimal = display.toString().indexOf('.') > 0;

        if ((!displayIsDecimal && val === '.' && !finished) || (val === '0')) {
            newValue = display + val;
        } else {
            newValue = display + val;
            newValue = Number(newValue).toString();
        }

        /*
            If display's new value returns isNaN stop running
        */
        if (isNaN(newValue)) {
            return
        }
        /*
            set display state
        */
        setDisplay(newValue);
    }

    /*
        Handles click on operator buttons
    */
    const handleInput = (operator) => {
        /*
            Checks finished state. If it is true and click on operator means:
                1. Set finished false
                2. Set inputDisplay value to previous result and operator
                3. Set display value to '0'
                4. Stop executing
        */
        if (finished) {
            const val = `${ display } ${ operator }`;
            setFinished(false);
            setInputDisplay(val);
            setDisplay('0');
            return;
        }

        /*
            - If display value is '0' && inputDisplayHasValue && zero (variable) is false. If so change inputDisplay's last operator
            - Else verify display value by converting it to number then to string
                ~ If number is NaN stop running function
                ~ If number is less than 0 put it in '()' brackets
                add display value and operator to inputDisplay
        */
        let inputValue;
        const inputDisplayHasValue = inputDisplay.length > 0;

        if (inputDisplayHasValue && !zero && display === '0') {
            inputValue = inputDisplay.slice(0, inputDisplay.length - 1) + operator;
        } else {
            let displayVal = Number(display);

            if (isNaN(displayVal)) {
                return
            }

            if (displayVal < 0) {
                displayVal = `(${displayVal})`;
            }

            inputValue = inputDisplayHasValue ? `${inputDisplay} ${displayVal} ${operator}` : `${displayVal} ${operator}`;
        }


        if (zero) {
            setZero(false);
        }
        setDisplay('0');
        setInputDisplay(inputValue);
    }

    // Main calculate function
    // First calculates multiplies and divisions after that calculates additions and subtractions
    const calculate = (inputString) => {
        let arr = inputString.replace(/[()]/g, '').split(' ');
        /* Do multiplications & divisions untill there is no '*' or '/' left */
        for (let i = 0; arr.includes('*') || arr.includes('/'); ) {
            if (arr[i] === '*' || arr[i] === '/') {
                let val1 = Number(arr[i - 1]);
                let val2 = Number(arr[i + 1]);
                let total = 0;
                if (arr[i] === '*') {
                    total = Number((val1 * val2).toFixed(6));
                } else if (arr[i] === '/') {
                    total = Number((val1 / val2).toFixed(6));
                }
                arr = arr.slice(0, i - 1).concat(total).concat(arr.slice(i + 2));
            } else {
                i++;
            }
        }
        /* Do additions & subtractions untill there is no '+' or '/' left */
        for (let i = 0; arr.includes('+') || arr.includes('-'); ) {
            if (arr[i] === '+' || arr[i] === '-') {
                let val1 = Number(arr[i - 1]);
                let val2 = Number(arr[i + 1]);
                let total = 0;
                if (arr[i] === '+') {
                    total = val1 + val2;
                } else if (arr[i] === '-') {
                    total = val1 - val2;
                }
                arr = arr.slice(0, i - 1).concat(total).concat(arr.slice(i + 2));
            } else {
                i++;
            }
        }
        return arr[0];
    }

    const handleShowResult = () => {
        /*
            Stop running if inputDisplay is empty or finished is true
        */
        if (!inputDisplay || finished) {
            return;
        }

        /*
            Configure string for calculation and store it in a variable
            Prepare for calculation by
                - If zero is true add 0 to inputDisplay
                - If zero is false and display is '0' which means inputDisplay is ended with operator. So it needs to be removed
                - If display value is less than 0 put it in '()' brackets and add to inputDisplay
                - Else add display value to inputDisplay
        */
        let newInput;
        if (zero) {
            newInput = `${ inputDisplay } 0`;
        } else if (!zero && display === '0') {
            newInput = inputDisplay.slice(0, -2);
        } else if (Number(display) < 0) {
            newInput = `${ inputDisplay } (${ display })`
        } else {
            newInput = `${ inputDisplay } ${ display }`;
        }

        /*
            Calculate input string
        */
        let result = calculate(newInput);

        /*
            If calculation result is integer format the result using
        */
        if (!Number.isInteger(result)) {
            result = Number(result.toFixed(6));
        }

        /*
            Setup new inputDisplay value and set states
        */
        const newInputValues = `${ newInput } = ${ result }`;
        setFinished(true);
        setInputDisplay(newInputValues);
        setDisplay(result);
    }

    const jsx = (
        <AnimatedPageWrapper>
            <div className={ classes.CalculatorContainer }>
                <div className={ classes.Calculator }>
                    <div id="inputs" className={ classes.Inputs }>{ inputDisplay }</div>
                    <div id="display" className={ classes.Display }>{ display }</div>
                    <Operators handleInput={ handleInput } />
                    <Numbers handleDisplay={ handleDisplay } />
                    <Controllers handleClear={ handleClear } handleReverseSign={ handleReverseSign } handleShowResult={ handleShowResult } />
                </div>
            </div>
        </AnimatedPageWrapper>
    );
    return jsx;
}

export default Calculator;