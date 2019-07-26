import React from 'react';

import classes from './PomodoroClock.css';

import TimeValue from './TimeValue/TimeValue';
import Timer from './Timer/Timer';
import Controller from './Controller/Controller';

import AnimatedPageWrapper from '../../containers/AnimatedPageWrapper';

class PomodoroClock extends React.Component {
	state = {
		session: 25,
		break: 5,
		timerStarted: false,
		minutes: 0,
		seconds: 0,
		timerType: 'session',
	}
	intervalId = 0;

	componentDidMount() {
		document.title = 'Помодоро цаг'
		this.setState(() => ({ minutes: this.state.session }))
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	handleIncrement = (stateName) => {
		if (!this.state.timerStarted && this.state[stateName] < 60) {
			const incrementedValue = this.state[stateName] + 1;
			const newState = {};
			if (stateName === 'session') {
				newState.session = incrementedValue;
				newState.minutes = incrementedValue;
			} else {
				newState.break = incrementedValue;
			}
			this.setState(() => (newState));
		}
	}

	handleDecrement = (stateName) => {
		if (!this.state.timerStarted && this.state[stateName] < 60) {
			if (this.state[stateName] > 1) {
				const decrementedValue = this.state[stateName] - 1;
				const newState = {};
				if (stateName === 'session') {
					newState.session = decrementedValue;
					newState.minutes = decrementedValue;
				} else {
					newState.break = decrementedValue
				}
				this.setState(() => ({ ...newState }));
			}
		}
	}

	handleReset = () => {
		const beep = document.getElementById('beep');
		beep.pause();
		beep.currentTime = 0;
		clearInterval(this.intervalId);
		this.setState(() => ({
			session: 25,
			break: 5,
			timerStarted: false,
			minutes: 25,
			seconds: 0,
			timerType: 'session'
		}));
	}

	handleStartTimer = () => {
		if (!this.state.timerStarted) {
			this.setState(() => ({ timerStarted: true }));
		}
		this.intervalId = setInterval(() => {
			if (this.state.seconds === 0 && this.state.minutes > 0) {
				const minutes = this.state.minutes - 1;
				this.setState(() => ({ minutes, seconds: 59 }))
			} else if (this.state.seconds === 0 && this.state.minutes === 0) {
				const timerType = this.state.timerType === 'session' ? 'break' : 'session';
				const minutes = this.state[timerType];
				document.getElementById('beep')
					.play()
					.catch(() => {
						console.log('There is an error with audio')
					}
				);
				clearInterval(this.intervalId);
				this.setState(() => ({ minutes, timerType}));
				this.handleStartTimer();
			} else {
				const seconds = this.state.seconds - 1;
				this.setState(() => ({ seconds }));
			}
		}, 1000)
	}

	handlePauseTimer = () => {
		this.setState(() => ({ timerStarted: false }));
		clearInterval(this.intervalId);
	}

	render() {
		return (
			<AnimatedPageWrapper>
				<div id="wrapper" className={ classes.Wrapper }>
					<div id="pomodoro-clock" className={ classes.PomodoroClock }>
						<div id="timer-container" className={ classes.TimerContainer }>
						<TimeValue
							timeValueType='break'
							handleDecrement={ this.handleDecrement }
							handleIncrement={ this.handleIncrement }
							value={ this.state.break }
						/>
						<Timer
							timerType={ this.state.timerType }
							minutes={ this.state.minutes }
							seconds={ this.state.seconds }
						/>
						<TimeValue
							timeValueType='session'
							handleDecrement={ this.handleDecrement }
							handleIncrement={ this.handleIncrement }
							value={ this.state.session }
						/>
					</div>
					<Controller
						timerStarted={ this.state.timerStarted }
						minutes={ this.state.minutes }
						session={ this.state.session }
						handlePauseTimer={ this.handlePauseTimer }
						handleStartTimer={ this.handleStartTimer }
						handleReset={ this.handleReset }
					/>
						<audio src="http://www.peter-weinberg.com/files/1014/8073/6015/BeepSound.wav" id="beep"></audio>
					</div>
				</div>
			</AnimatedPageWrapper>
		)
	}
}

export default PomodoroClock;