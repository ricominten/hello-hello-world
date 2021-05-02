import {keyframes} from "@emotion/react";

import * as vars from '../../variables';

export const dot = keyframes`
    // Cycle 1 start
    ${vars.animCycleAStartState}% {
        background-color: ${vars.lightColour};
        opacity: 1;
    }
    ${vars.toAnimCyclePercent(1, 0.01)}% {
        background-color: ${vars.lightColour};
        opacity: 0;
        transform: scale(0, 0);
    }
    ${vars.toAnimCyclePercent(1, 15.99)}% {
        background-color: ${vars.darkColour};
        opacity: 0;
    }
    ${vars.toAnimCyclePercent(1, 16)}% {
        opacity: 1;
        transform: scale(0, 0);
    }
    //grow
    ${vars.toAnimCyclePercent(1, 17)}% {
        transform: scale(200, 200);
    }
    ${vars.toAnimCyclePercent(1, 19)}% {
        transform: scale(100, 100);
    }
    
    ${vars.animCycleAEndState}% {
        background-color: ${vars.darkColour};
        transform: scale(10000, 10000);
    }
    
    // Cycle 2 start
    ${vars.animCycleBStartState}% {
        background-color: ${vars.darkColour};
        opacity: 1;
    }
    ${vars.toAnimCyclePercent(1, 0.01)}% {
        background-color: ${vars.lightColour};
        opacity: 0;
        transform: scale(0);
    }
    ${vars.animCycleBEndState}% {
        background-color: ${vars.lightColour};
        opacity: 1;
        transform: scale(50);
    }
`;