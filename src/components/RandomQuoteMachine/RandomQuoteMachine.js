import React, { useState, useEffect } from "react";

import classes from './RandomQuoteMachine.css';
import RandomQuote from './RandomQuote/RandomQuote';

import AnimatedPageWrapper from '../../containers/AnimatedPageWrapper';

const RandomQuoteMachine = () => {
	const randomQuoteUrl = 'https://quota.glitch.me/random';
	const colors = ['#F44336', '#E91E63', '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FF9800', '#FF5722', '#795548', '#9E9E9E', '#607D8B'];
	const transitionDuration = 1000;

	const [themeColor, setThemeColor] = useState('#9E9E9E');
	const [quote, setQuote] = useState({ quoteText: 'Loading...', quoteAuthor: 'Server' });

	// Don't set state in recursive function!
	const getNewColor = () => {
		const randomNumber = Math.floor(Math.random() * colors.length);
		const randomColor = colors[randomNumber];
		if (randomColor === themeColor) {
			return getNewColor();
		}
		return randomColor;
	}

	const changeQuoteTextHeight = () => {
		setTimeout(() => {
			const quoteHeight = document.querySelector('#quoteText').clientHeight;
			document.querySelector('#quoteTextContainer').style.height = quoteHeight + 'px';
		}, (transitionDuration + 100))
	}

	const getNewQuote = () => {
		fetch(randomQuoteUrl)
			.then(response => response.json())
			.then(({quoteText, quoteAuthor}) => {
				setThemeColor(getNewColor());
				setQuote({ quoteText, quoteAuthor });
				changeQuoteTextHeight();
			})
			.catch(() => {
				setQuote({ quoteText: 'Sorry, there was an error while trying to connect to the server! Try again later.', quoteAuthor: 'Server' });
			});
	}

	useEffect(() => {
		document.title = 'Эшлэл'
		getNewQuote();
	}, []);

	return (
		<AnimatedPageWrapper>
			<div className={ classes.RandomQuoteMachine } style={{ backgroundColor: themeColor }}>
				<RandomQuote 
					quote={ quote.quoteText } 
					author={ quote.quoteAuthor } 
					themeColor={ themeColor }
					getNewQuote={ getNewQuote }
					transitionDuration={ transitionDuration }
				/>
			</div>
		</AnimatedPageWrapper>
	)
};

export default RandomQuoteMachine;