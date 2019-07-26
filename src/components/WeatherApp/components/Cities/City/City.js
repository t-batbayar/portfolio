import React from 'react';
import { useSpring, animated } from 'react-spring';

import Loading from '../../Loading/Loading';
import styles from './City.scss';
import icons from '../../../assets/icons-class';

const City = props => {
    const today = props.info[0];
    const forecasts = [...props.info].slice(1);
    
    const animationPropsCity = useSpring({ 
        from: { opacity: 0, transform: 'translateY(-5%)' },
        opacity: 1,
        transform: 'translateY(0)',
        config: {
            duration: 500
        }
    });

    const handleIcon = (weatherId) => {
        // Stop running if there is no argument
        if (!weatherId || typeof weatherId !== 'number' || weatherId > 804) {
            return undefined;
        }

        const prefix = 'wi wi-';
        let icon = icons[weatherId].icon;
        if (weatherId >= 800 && weatherId <= 900) {
            icon = 'day-' + icon;
        }
        return icon = prefix + icon;
    }

    const handleGetDateInfo = (timestamp, type) => {
        // Stop running if there is no argument
        if (!timestamp || !type) {
            return undefined;
        }
        const dateObj = new Date(timestamp * 1000);
        const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'long' };
        const dateString = dateObj.toLocaleDateString('en-US', dateOptions);

        const day = dateString.split(',')[0];

        const date = dateString.split(',')[1];

        let dateShort = date.split('/');
        dateShort = `${ dateShort[0] }/${ dateShort[1] }`;

        if (type === 'day') {
            return day
        } else if (type === 'date') {
            return date
        } else if (type === 'dateShort') {
            return dateShort
        } else {
            return undefined;
        }
    }

    return (
        <animated.div className={ styles.City } style={ animationPropsCity }>
            <div className={ styles.Today }>

                { props.updating && 
                    <div className={ styles.LoadingCity }>
                        <Loading />
                    </div>
                }

                <div className={ styles.CityName }>
                    { props.placeName }
                </div>
                <div className={ styles.Today__Info }>
                    <div className={ styles.Today__Info__InfoLeft }>
                        <div className={ styles.Today__Info__InfoLeft__Day }>
                            { handleGetDateInfo(today.dt, 'day') }
                        </div>
                        <div className={ styles.Today__Info__InfoLeft__Date }>
                            { handleGetDateInfo(today.dt, 'date') }
                        </div>
                        <div className={ styles.Today__Info__InfoLeft__WeatherInfo }>
                            <ul>
                                <li><span>Wind:</span> { today.speed } m/s</li>
                                <li><span>Humidity:</span> { today.humidity } %</li>
                                <li><span>Pressure:</span> { today.pressure } kPA</li>
                            </ul>
                        </div>
                    </div>
                    <div className={ styles.Today__Info__Middle }>
                        <i className={ `${ handleIcon(today.weather[0].id) } ${ styles.Today__Info__Middle__Icon }` }></i>
                        <div className={ styles.Today__Info__Middle__Text }>
                            { today.weather[0].main }
                        </div>
                    </div>
                    <div className={ styles.Today__Info__Right }>
                        <div className={ styles.Today__Info__Right__Temp }>{ Math.round(today.temp.max) }<i className="wi wi-degrees"></i>C</div>
                        <div className={ styles.Today__Info__Right__Temp }>{ Math.round(today.temp.min) }<i className="wi wi-degrees"></i>C</div>
                    </div>
                </div>
            </div>
            <div className={ styles.Forecasts }>
                { forecasts.map(day => {
                    return (
                        <div key={ day.dt } className={ styles.Forecast }>
                            <div className={ styles.Forecast__Day }>
                                <div>{ handleGetDateInfo(day.dt, 'day') }</div>
                            </div>
                            <div className={ styles.Forecast__Info }>
                                <div className={ styles.Forecast__Info__Temp }>{ Math.round(day.temp.max) } <i className={`wi wi-degrees ${styles.Forecast__Info__Temp}`}></i>C</div>
                                <i className={ `${ handleIcon(day.weather[0].id) } ${ styles.Forecast__Info__Icon }` }></i>
                                <div className={ styles.Forecast__Info__Text }>{ day.weather[0].main }</div>
                            </div>
                            <div className={ styles.Forecast__Date }>{ handleGetDateInfo(day.dt, 'dateShort') }</div>
                        </div>
                    )
                }) }
            </div>
        </animated.div>
    )
}

export default City;