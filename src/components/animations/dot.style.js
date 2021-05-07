import {keyframes} from "@emotion/react";

import * as vars from '../../variables';

export const dot = keyframes`
    // Cycle 1 start
    ${vars.animCycleAStartState}% {
        background-color: ${vars.lightColour};
        transform: scale(0, 0);
        
    }
    ${vars.toAnimCyclePercent(1, 0.01)}% {
        background-color: ${vars.darkColour};
        transform: scale(0, 0);
    }
    ${vars.toAnimCyclePercent(1,13)}% {
        transform: scale(0, 0);
    }
    ${vars.toAnimCyclePercent(1,16.5)}% {
        transform: scale(250, 250);
    }
    ${vars.toAnimCyclePercent(1,18.5)}% {
        transform: scale(100, 100);
    }
    ${vars.animCycleAEndState}% {
        background-color: ${vars.darkColour};
        transform: scale(10000, 10000);
    }
    // Cycle 2 start
    ${vars.animCycleBStartState}% {
        background-color: ${vars.darkColour};
        transform: scale(0, 0);
    }
    ${vars.toAnimCyclePercent(2, 0.01)}% {
        background-color: ${vars.lightColour};
    }
    ${vars.toAnimCyclePercent(2,13)}% {
        transform: scale(0, 0);
    }
    ${vars.toAnimCyclePercent(2,16.5)}% {
        transform: scale(250, 250);
    }
    ${vars.toAnimCyclePercent(2,18.5)}% {
        transform: scale(100, 100);
    }
    ${vars.toAnimCyclePercent(2,20)}% {
        background-color: ${vars.lightColour};
        transform: scale(10000, 10000);
    }
`;
