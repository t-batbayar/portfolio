import React from 'react';

import AnimatedPageWrapper from '../../containers/AnimatedPageWrapper';

import kits from '../../musicKits.json';
import classes from './DrumMachine.css';

import DrumPad from './DrumPad/DrumPad';
import DrumController from './DrumController/DrumController';

class DrumMachine extends React.Component {
   state = {
      kits: kits,
      selectedKit: [],
      selectedKitName: '',
      displayText: '',
      volume: 1,
      keyEventId: '',
   }

   componentDidMount() {
      document.title = 'Бөмбөр'
      document.addEventListener('keydown', this.handleKeyDown);
      const firstKit = Object.keys(this.state.kits)[0];
      this.setState(() => ({
         selectedKit: this.state.kits[firstKit],
         selectedKitName: firstKit
      }));
   }

   componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown);
   }

   handlePlayAudio = (id, audio) => {
      document.getElementById(id).play();
      const displayText = audio.split('-').join(' ');
      this.setState(() => ({ displayText }));
   }

   handleVolumeChange = (e) => {
      const volume = Number.parseFloat(e.target.value / 100).toFixed(2);
      this.setState(() => ({ volume }));
   }

   handleChangeKit = (e) => {
      const selectedKitName = e.target.value;
      const displayName = selectedKitName.split(/(?=[A-Z])/).join(' ');
      this.setState(() => ({
         selectedKit: this.state.kits[selectedKitName],
         selectedKitName,
         displayText: displayName
      }));
   }

   handleKeyDown = (e) => {
      const pressedKey = e.key.toUpperCase();
      const index = this.state.selectedKit.findIndex(kit => kit.button === pressedKey);
      if (index !== -1) {
         const { button, audio } = this.state.selectedKit[index];
         this.handlePlayAudio(button, audio);
      }
   }

   render() {
      return (
         <AnimatedPageWrapper>
            <div className={ classes.DrumMachineContainer }>
               <div id="drum-machine" className={ classes.DrumMachine }>
                     <div className={ classes.DrumPads }>
                           { this.state.selectedKit.map(pad => (
                              <DrumPad key={ pad.audio } {...pad} handlePlayAudio={ this.handlePlayAudio } volume={ this.state.volume } />
                           )) }
                     </div>
                     <DrumController
                           displayText={ this.state.displayText }
                           volume={ this.state.volume }
                           handleVolumeChange={ this.handleVolumeChange }
                           kits={ this.state.kits }
                           selectedKitName={ this.state.selectedKitName }
                           handleChangeKit={ this.handleChangeKit }
                     />
               </div>
            </div>
         </AnimatedPageWrapper>
      )
   }
}

export default DrumMachine;