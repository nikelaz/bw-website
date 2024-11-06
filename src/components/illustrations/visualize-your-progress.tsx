'use client';

import styles from './visualize-your-progress.module.sass';
import {clsx} from 'clsx';
import {useRef} from 'react';
import useAnimation from '../../hooks/use-animation';

const  VisualizeYourProgressIllustration = () => {
  const animationElementRef: React.MutableRefObject<any> = useRef();
  const playAnimation = useAnimation(animationElementRef);

  return (
    <svg className="absolute top-1/2 left-1/2 w-[86%] -translate-y-1/2 -translate-x-1/2" viewBox="0 0 326 125" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.294844" y="49.6955" width="324.405" height="25.515" rx="12.7575" stroke="#2C1F51" strokeWidth="1.215" strokeDasharray="2.43 2.43"/>
      <rect x="8.19238" y="56.378" width="204.12" height="12.15" rx="6.075" fill="#03318B" ref={animationElementRef} className={clsx(styles.animBarBefore, playAnimation && styles.animLeftBar)}/>
      <rect x="218.387" y="56.378" width="99.63" height="12.15" rx="6.075" fill="#7D1641"className={clsx(styles.animBarBefore, playAnimation && styles.animRightBar)}/>
      <text fill="#2C1F51" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="18.225" fontWeight="bold" letterSpacing="0em">
        <tspan x="128.178" y="16.9003">5,000$</tspan>
      </text>
      <text fill="#2C1F51" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="13.365" fontWeight="bold" letterSpacing="0em">
        <tspan x="133.591" y="35.218">INCOME</tspan>
      </text>
      <g className={clsx(styles.animLabelBefore, playAnimation && styles.animLeftLabel)}>
        <text fill="#03318B" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="18.225" fontWeight="bold" letterSpacing="0em">
          <tspan x="77.5297" y="104.38">3,500$</tspan>
        </text>
        <text fill="#03318B" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="13.365" fontWeight="bold" letterSpacing="0em">
          <tspan x="79.1396" y="122.698">PLANNED</tspan>
        </text>
      </g>
      <g className={clsx(styles.animLabelBefore, playAnimation && styles.animRightLabel)}>
        <text fill="#7D1641" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="18.225" fontWeight="bold" letterSpacing="0em">
          <tspan x="236.913" y="104.38">1,500$</tspan>
        </text>
        <text fill="#7D1641" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="13.365" fontWeight="bold" letterSpacing="0em">
          <tspan x="211.485" y="122.698">LEFT TO BUDGET</tspan>
        </text>
      </g>
    </svg>
  );
};

export default VisualizeYourProgressIllustration;
