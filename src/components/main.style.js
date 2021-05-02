import { css } from '@emotion/react';

import * as animation from './animations';

export const lightColour = 'OldLace';
export const darkColour = '#101c24';
export const aboutColour= 'wheat';
export const aboutOutlineColour = 'Peru';

const animationBase = '50s ease infinite';


export const global = css`
    body {
        background-color: ${lightColour};
        font-family: 'Roboto Mono', monospace;
        animation: ${animation.background} ${animationBase}; 
    }
`;

export const titleGroup = (isTop = true) => css`
    position: fixed;
    display: flex;
    align-items: center;
    top: ${isTop ? '100px' : '165px'};
    left: 120px;
`;

export const before = (delayed) => css`
    display: inline-block;
    margin: 2px 40px 0 0;
    font-size: 51px;
    line-height: 48px;
    font-family: 'Roboto', sans-serif;
    opacity: 0;
    animation: ${animation.before(delayed)} ${animationBase};  
`;

export const title = css`
    display: inline-block;
    display: block;
    margin: -2px 0 0;
    font-size: 46px;
    line-height: 46px;
`;

export const letters = (delayed, number) => css`
    opacity: 0;
    animation: ${animation.letters(delayed, number)} ${animationBase};
`;

export const dot = css`
    position: fixed;
    display: block;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    width: 1px;
    height: 1px;
    border-radius: 50%;
    animation: ${animation.dot} ${animationBase};    
`;

export const footer = css`
    position: fixed;
    right: 100px;
    bottom: 50px;
    color: ${aboutColour};
    
    a {
        color: ${aboutColour};
        
        &:hover,
        &: focus {
            outline-color: ${aboutOutlineColour};
        }
    }
    
    
`;