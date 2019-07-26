import React, { useEffect } from "react";
import { Provider } from 'react-redux';

import AnimatedPageWrapper from '../../containers/AnimatedPageWrapper';

import styles from './WeatherApp.css';
import store from './store/store';
import Header from './components/Header/Header';
import Cities from './components/Cities/Cities';

const WeatherApp = () => {
   useEffect(() => {
      document.title = "Цаг агаарын вэб аппликэйшн";
   }, [])

	return (
      <Provider store={ store }>
         <AnimatedPageWrapper>
            <div className={ styles.WeatherAppContainer }>
               <div className={ styles.WeatherApp }>
                  <Header />
                  <Cities />
               </div>
            </div>
         </AnimatedPageWrapper>
      </Provider>
	);
};
export default WeatherApp;