'use client';

import { clsx } from 'clsx';
import { useRef } from 'react';
import useAnimation from '../../hooks/use-animation';
import styles from './create-monthly-budgets.module.sass';

const CreateMonthlyBudgetsIllustration = () => {
  const animationElementRef: React.MutableRefObject<any> = useRef(null);
  const playAnimation = useAnimation(animationElementRef);
  
  return (
    <svg className="absolute top-1/2 left-1/2 w-[77%] -translate-y-1/2 -translate-x-1/2" viewBox="0 -21 288 224" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_101_33)">
            <path
              d="M26.5497 2.84984C26.5497 2.28055 26.0682 1.82255 25.4696 1.82255C24.8711 1.82255 24.3895 2.28055 24.3895 2.84984V4.56198H22.5893C21.0006 4.56198 19.709 5.79045 19.709 7.30142V7.98628V10.0409V20.9986C19.709 22.5096 21.0006 23.738 22.5893 23.738H36.9909C38.5796 23.738 39.8712 22.5096 39.8712 20.9986V10.0409V7.98628V7.30142C39.8712 5.79045 38.5796 4.56198 36.9909 4.56198H35.1907V2.84984C35.1907 2.28055 34.7092 1.82255 34.1106 1.82255C33.512 1.82255 33.0305 2.28055 33.0305 2.84984V4.56198H26.5497V2.84984ZM21.8692 10.0409H37.711V20.9986C37.711 21.3753 37.387 21.6835 36.9909 21.6835H22.5893C22.1933 21.6835 21.8692 21.3753 21.8692 20.9986V10.0409Z"
              fill="#3F3264"/>
        </g>
        <text fill="#03318B" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="19.467" fontWeight="bold" letterSpacing="0em"><tspan x="58.4111" y="19.8592">August 2024</tspan></text>
        <path
          d="M207.234 16.1886C207.516 16.4715 207.976 16.4715 208.259 16.1886L212.604 11.8433C212.887 11.5604 212.887 11.101 212.604 10.8181C212.321 10.5352 211.862 10.5352 211.579 10.8181L207.745 14.6519L203.911 10.8204C203.628 10.5375 203.169 10.5375 202.886 10.8204C202.603 11.1033 202.603 11.5627 202.886 11.8456L207.231 16.1909L207.234 16.1886Z"
          fill="#03318B"/>
        <g filter="url(#filter0_d_101_33)" className={clsx(styles.animFadeInScaleBefore, playAnimation && styles.animFadeInScale)} ref={animationElementRef}>
            <rect x="19.709" y="44.7803" width="246.582" height="135.551" rx="9.27" fill="white"/>
            <mask id="path-5-inside-1_101_33" fill="white">
                <path d="M33.614 62.1615H252.386V92.3585H33.614V62.1615Z"/>
            </mask>
            <path d="M252.386 91.4315H33.614V93.2855H252.386V91.4315Z" fill="#E6E5EA" mask="url(#path-5-inside-1_101_33)"/>
            <text fill="#03318B" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="16.686" fontWeight="600" letterSpacing="0em">
                <tspan x="33.614" y="78.2292">July 2024</tspan>
            </text>
            <mask id="path-8-inside-2_101_33" fill="white">
                <path d="M33.614 92.3585H252.386V132.753H33.614V92.3585Z"/>
            </mask>
            <path d="M252.386 131.826H33.614V133.68H252.386V131.826Z" fill="#E6E5EA" mask="url(#path-8-inside-2_101_33)"/>
            <text fill="#2C1F51" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="16.686" fontWeight="600" letterSpacing="0em">
                <tspan x="33.614" y="118.623">August 2024</tspan>
            </text>
            <text fill="#03318B" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontSize="16.686" fontWeight="600" letterSpacing="0em">
                <tspan x="33.614" y="159.017">+ Create New Budget</tspan>
            </text>
        </g>
        <defs>
            <filter id="filter0_d_101_33" x="0.708984" y="26.7803" width="286.582" height="175.551" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="1" dy="2"/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_33"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_33" result="shape"/>
            </filter>
            <clipPath id="clip0_101_33">
                <rect width="20.1623" height="21.9155" fill="white" transform="translate(19.709 1.82255)"/>
            </clipPath>
        </defs>
    </svg>
  );
};

export default CreateMonthlyBudgetsIllustration;
