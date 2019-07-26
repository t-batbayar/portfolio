import React from 'react';

import classes from './DrumController.css';

const DrumController = (props) => (
	<div className={ classes.Controller }>
		<div id="display" className={ classes.Display }>
			{ props.displayText }
		</div>
		<div className={ classes.VolumeSlider }>
			<div className={ classes.Volume }>Volume: { Math.floor(props.volume * 100) }</div>
			<input
				type="range" 
				min="1" 
				max="100" 
				value={ props.volume * 100 } 
				onChange={ e => props.handleVolumeChange(e) } 
			/>
		</div>
		<div className="audio-kit-selector">
			<select 
				className={ classes.KitSelector }
				value={ props.selectedKitName } 
				onChange={ (e) => props.handleChangeKit(e) } >
				{ 
					Object.keys(props.kits)
						.map(kit => (
								<option key={ kit } value={ kit }>
									{ kit.split(/(?=[A-Z])/).join(' ') }
								</option>
							)
						) 
				}
			</select>
		</div>
	</div>
)

export default DrumController;