import React from 'react';

import classes from './Editor.css';

const Editor = (props) => {
	return (
		<div className={ classes.EditorContainer }>
			<h4 className={ classes.EditorTitle }>Editor</h4>
			<textarea 
                className={ classes.Editor }
				id="editor"
				rows="20"
				cols="80"
				onChange={ (e) => { props.handleEditorChange(e) } } 
				defaultValue={ props.defaultValue }
			></textarea>
		</div>
	)
}

export default Editor;