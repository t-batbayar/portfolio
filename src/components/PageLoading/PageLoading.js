import React from 'react';

import AnimatedPageWrapper from '../../containers/AnimatedPageWrapper';
import styles from './PageLoading.css';

const PageLoading = () => (
   <AnimatedPageWrapper>
      <div className={ styles.PageLoading }>
         <div className={ styles.LdsRing }><div></div><div></div><div></div><div></div></div>
      </div>
   </AnimatedPageWrapper>
);

export default PageLoading;