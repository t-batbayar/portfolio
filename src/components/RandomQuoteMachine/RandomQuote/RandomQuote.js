import React from 'react';
import { useTransition, animated } from 'react-spring';

import classes from './RandomQuote.css';

const RandomQuote = ({ quote, author, themeColor, getNewQuote, transitionDuration }) => {
	const textTransition = {
		from: { position: 'absolute', opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: {
			duration: transitionDuration
		}
	}

	const transitionsQuote = useTransition(quote, null, textTransition);
	const transitionsAuthor = useTransition(author, null, textTransition);

	return (
		<div className={ classes.QuoteWrapper }>
			<div className={ classes.QuoteController }>
				<a 
					href={ `https://twitter.com/intent/tweet?text="${ quote }" - ${ author }` } 
					target="_blank" 
					className={ classes.Tweet }
				>Tweet</a>
				<button 
					onClick={ getNewQuote } 
					className={ classes.NewQuote }
				>New Quote</button>
			</div>
			
			<div className="quote-container">
				<div className={ classes.QuoteAuthor }>
					{transitionsAuthor.map(({ item, key, props }) => (
						<animated.p 
							key={ key } 
							style={props}
							className={ classes.QuoteAuthor }
						>{ item }</animated.p>
					))}
				</div>
				<div className={ classes.QuoteTextContainer } id="quoteTextContainer">
					<span className={ classes.DoubleQuoteStart }>"</span>
					{transitionsQuote.map(({ item, key, props }) => (
						<animated.span 
							key={ key } 
							style={ props }
							className={ classes.QuoteText }
							id="quoteText"
						>{ item }</animated.span>
					))}
					<span className={ classes.DoubleQuoteEnd }>"</span>
				</div>
			</div>
		</div>
	);
}

export default RandomQuote;