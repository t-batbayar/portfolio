import React from 'react';
import { animated, useSpring } from 'react-spring';

const AnimatedPageWrapper = ({ children }) => {
   const animatedWrapperStyle = useSpring({
      from: {
         opacity: 0
      },
      opacity: 1,
      config: {
         duration: 1500
      }
   })

   return (
      <animated.div style={ animatedWrapperStyle }>
         { children }
      </animated.div>
   )
}

export default AnimatedPageWrapper