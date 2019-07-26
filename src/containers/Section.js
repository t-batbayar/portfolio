import React from 'react';

const Container = props => {
	return (
		<section 
			className={ props.home ? 'section section_home' : props.blue ? 'section section_blue' : 'section'  }
			id={ props.id ? props.id : '' }
		>
			<div className="container">
				{ props.children }
			</div>
		</section>
	)
}

export default Container;