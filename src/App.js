import React, { lazy, Suspense } from "react";
import { HashRouter, Switch, Route } from 'react-router-dom';

import PageLoading from './components/PageLoading/PageLoading';
const Home = lazy(() => import('./components/Home/Home'));
const WeatherApp = lazy(() => import('./components/WeatherApp/WeatherApp'));
const Calculator = lazy(() => import('./components/Calculator/Calculator'));
const PomodoroClock = lazy(() => import('./components/PomodoroClock/PomodoroClock'))
const MarkdownPreviewer = lazy(() => import('./components/MarkdownPreviewer/MarkdownPreviewer'))
const RandomQuoteMachine = lazy(() => import('./components/RandomQuoteMachine/RandomQuoteMachine'))
const DrumMachine = lazy(() => import('./components/DrumMachine/DrumMachine'))

const App = () => {
	return (
		<HashRouter>
			<Switch>
				<Route
					path='/weather-app'
					render={ () =>
						<Suspense fallback={ <PageLoading /> }>
							<WeatherApp />
						</Suspense>
					}
				/>
				<Route
					path='/calculator'
					render={ () =>
						<Suspense fallback={ <PageLoading /> }>
							<Calculator />
						</Suspense>
					}  />
				<Route
					path='/markdown-previewer'
					render={ () =>
						<Suspense fallback={ <PageLoading /> }>
							<MarkdownPreviewer />
						</Suspense>
					}  />
				<Route
					path='/pomodoro-clock'
					render={ () =>
						<Suspense fallback={ <PageLoading /> }>
							<PomodoroClock />
						</Suspense>
					}  />
				<Route
					path='/random-quote'
					render={ () =>
						<Suspense fallback={ <PageLoading /> }>
							<RandomQuoteMachine />
						</Suspense>
					}  />
				<Route
					path='/drum-machine'
					render={ () =>
						<Suspense fallback={ <PageLoading /> }>
							<DrumMachine />
						</Suspense>
					}  />
				<Route
					path='/'
					render={ () =>
						<Suspense fallback={ <PageLoading /> }>
							<Home />
						</Suspense>
					}
				/>
			</Switch>
		</HashRouter>
	);
};
export default App;