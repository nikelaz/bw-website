'use client';

import styles from './organize-your-finances..module.sass';
import {useRef} from 'react';
import {clsx} from 'clsx';
import useAnimation from '../../hooks/use-animation';

const OrganizeYourFinancesIllustration = () => {
  const animationElementRef: React.MutableRefObject<any> = useRef(null);
  const playAnimation = useAnimation(animationElementRef);

  return (
    <svg className="absolute top-1/2 left-1/2 w-[86%] -translate-y-1/2 -translate-x-1/2" viewBox="0 0 342 168" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M342 26.0555H0V28.0555H342V26.0555Z" fill="#2C1F51" fillOpacity="0.3"/>
      <text fill="#2C1F51" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="15" fontWeight="bold" letterSpacing="0em">
        <tspan x="10" y="13.0101">Expenses</tspan>
      </text>
      <text fill="#6E6193" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="15" fontWeight="600" letterSpacing="0em">
        <tspan x="201" y="13.0101">Planned</tspan>
      </text>
      <text fill="#6E6193" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="15" fontWeight="600" letterSpacing="0em">
        <tspan x="300" y="13.0101">Paid</tspan>
      </text>
      <path d="M342 64.0555H0V66.0555H342V64.0555Z" fill="#2C1F51" fillOpacity="0.3"/>
      <text fill="#2C1F51" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="14" fontWeight="600" letterSpacing="0em">
        <tspan x="10" y="51.1465">Food</tspan>
      </text>
      <text fill="#2C1F51" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="14" fontWeight="600" letterSpacing="0em">
        <tspan x="222" y="51.1465">640$</tspan>
      </text>
      <text fill="#2C1F51" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="14" fontWeight="600" letterSpacing="0em">
        <tspan x="295" y="51.1465">450$</tspan>
      </text>
      <line y1="65" x2="240" y2="65" stroke="#7D1641" strokeWidth="2" className={clsx(styles.animScaleXBefore, playAnimation && styles.animScaleX, playAnimation && styles.animDelay1)}/>
      <path d="M342 102.056H0V104.056H342V102.056Z" fill="#2C1F51" fillOpacity="0.3"/>
      <text fill="#2C1F51" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="14" fontWeight="600" letterSpacing="0em">
        <tspan x="10" y="89.1465">Utilities</tspan>
      </text>
      <text fill="#2C1F51" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="14" fontWeight="600" letterSpacing="0em">
        <tspan x="223" y="89.1465">220$</tspan>
      </text>
      <text fill="#2C1F51" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="14" fontWeight="600" letterSpacing="0em">
        <tspan x="295" y="89.1465">240$</tspan>
      </text>
      <line y1="103" x2="315" y2="103" stroke="#7D1641" strokeWidth="2" ref={animationElementRef} className={clsx(styles.animScaleXBefore, playAnimation && styles.animScaleX, playAnimation && styles.animDelay2)}/>
      <path d="M342 140.056H0V142.056H342V140.056Z" fill="#2C1F51" fillOpacity="0.3"/>
      <text fill="#2C1F51" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="14" fontWeight="600" letterSpacing="0em">
        <tspan x="10" y="127.146">Housing</tspan>
      </text>
      <text fill="#2C1F51" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="14" fontWeight="600" letterSpacing="0em">
        <tspan x="215" y="127.146">1500$</tspan>
      </text>
      <text fill="#2C1F51" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="14" fontWeight="600" letterSpacing="0em">
        <tspan x="300" y="127.146">110$</tspan>
      </text>
      <line y1="141" x2="24" y2="141" stroke="#7D1641" strokeWidth="2" className={clsx(styles.animScaleXBefore, playAnimation && styles.animScaleX, playAnimation && styles.animDelay3)}/>
      <text fill="#03318B" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="13" fontWeight="bold" letterSpacing="0em">
        <tspan x="10" y="164.783">+ New Category</tspan>
      </text>
      <text fill="#2C1F51" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="14" fontWeight="600" letterSpacing="0em">
        <tspan x="213" y="165.146">2360$</tspan>
      </text>
      <text fill="#2C1F51" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="14" fontWeight="600" letterSpacing="0em">
        <tspan x="295" y="165.146">800$</tspan>
      </text>
    </svg>
  );
};

export default OrganizeYourFinancesIllustration;
