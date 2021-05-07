import {keyframes} from "@emotion/react";

import * as vars from '../../variables';

export const letters = (delayed, offset) => keyframes`

    // Cycle 1 start
    ${vars.animCycleAStartState}% {
        opacity: 0;
    }
    ${vars.toAnimCyclePercent(1, vars.getDelayTime(delayed, 4+(offset/8)))}% {
        opacity: 0;
    }
    ${vars.toAnimCyclePercent(1, vars.getDelayTime(delayed, 5+(offset/8)))}% {
        opacity: 1;
    }
    ${vars.toAnimCyclePercent(1, vars.getDelayTime(true, 0))}% {
        ${delayed ? '' : 'opacity: 1;'};
    }
    ${vars.toAnimCyclePercent(1, vars.getDelayTime(true, 2))}% {
        ${delayed ? '' : 'opacity: 0;'};
    }
    ${vars.animCycleAEndState}% {
        opacity: ${delayed ? 1 : 0};
    }
    ${vars.toAnimCyclePercent(2, vars.getDelayTime(delayed, 4+(offset/8)))}% {
        opacity: 0;
    }
    ${vars.toAnimCyclePercent(2, vars.getDelayTime(delayed, 5+(offset/8)))}% {
        opacity: 1;
    }
    ${vars.toAnimCyclePercent(2, vars.getDelayTime(true, 0))}% {
        ${delayed ? '' : 'opacity: 1;'};
    }
    ${vars.toAnimCyclePercent(2, vars.getDelayTime(true, 2))}% {
        ${delayed ? '' : 'opacity: 0;'};
    }
    ${vars.animCycleBEndState}% {
        opacity: ${delayed ? 1 : 0};
    }
    // Cycle 2 start
    ${vars.animCycleBStartState}% {
        opacity: 0;
    }
`;