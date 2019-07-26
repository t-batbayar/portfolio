import React from 'react';

import classes from './DrumPad.css';

class DrumPad extends React.Component {
	constructor(props) {
		super(props);
		this.audioNode = React.createRef();
	}

	componentDidMount() {
		this.audioNode.current.volume = this.props.volume;
	}

	componentDidUpdate() {
		this.audioNode.current.volume = this.props.volume;
	}

	shouldComponentUpdate(nextProps) {
		if (this.props.audio === nextProps.audio && 
			this.props.audioLink === nextProps.audioLink && 
			this.props.volume === nextProps.volume) {
			return false;
		} else {
			return true;
		}
	}

	render () {
		return (
			<div 
				className={ classes.DrumPad } 
				id={ this.props.audio } 
				onClick={ () => this.props.handlePlayAudio(this.props.button, this.props.audio) }
			>
				<audio ref={ this.audioNode } src={ this.props.audioLink } className="clip" id={ this.props.button } ></audio>
				{ this.props.button }
			</div>
		)
	}

}

export default DrumPad;