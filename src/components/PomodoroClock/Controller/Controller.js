import React from 'react';

import classes from './Controller.css';

const Controller = props => {
   return (
      <div className="controller">
         <div id="start_stop" className={ classes.StartStop } onClick={ props.timerStarted ? props.handlePauseTimer : props.handleStartTimer }>
            { props.timerStarted ? 'Pause' : (props.minutes === props.session) ? 'Start' : 'Resume' }
         </div>
         <div id="reset" className={ classes.Reset } onClick={ props.handleReset }>Reset</div>
      </div>
   );
}

export default Controller;