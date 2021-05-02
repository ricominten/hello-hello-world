import {keyframes} from "@emotion/react";

import * as vars from '../../variables';

export const dot = keyframes`
    // Cycle 1 start
    ${vars.animCycleAStartState}% {
        background-color: ${vars.lightColour};
    }
    ${vars.toAnimCyclePercent(1, 0.01)}% {
        background-color: ${vars.darkColour};
        transform: scale(0, 0);
    }
    ${vars.toAnimPercent(8)}% {
        transform: scale(0, 0);
    }
    ${vars.toAnimPercent(18)}% {
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
    ${vars.animCycleBEndState}% {
        background-color: ${vars.lightColour};
        transform: scale(10000, 10000);
    }
`;
