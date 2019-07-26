import React from 'react';

import classes from './Previewer.css';

const Previewer = (props) => (
	<div className={ classes.PreviewerContainer }>
		<h4 className={ classes.PreviewerTitle }>Previewer</h4>
		<div 
            id="preview"
            className={ classes.Previewer }
            dangerouslySetInnerHTML={ { __html: props.markdownedString } }></div>
	</div>
)

export default Previewer;