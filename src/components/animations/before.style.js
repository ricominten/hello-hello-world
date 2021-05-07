import {keyframes} from "@emotion/react";
import * as vars from "../../variables";

export const before = (delayed) => keyframes`
    // Cycle 1 start
    ${vars.animCycleAStartState}% {
        opacity: 0;
    }
    ${vars.toAnimCyclePercent(1, vars.getDelayTime(delayed, 1))}% {
        opacity: 0;
    }
    ${vars.toAnimCyclePercent(1, vars.getDelayTime(delayed, 1.5))}% {
        opacity: 1;
    }
    ${vars.toAnimCyclePercent(1, vars.getDelayTime(delayed, 25))}% {
        opacity: 1;
    }
    ${vars.toAnimCyclePercent(1, vars.getDelayTime(delayed, 2.5))}% {
        opacity: 0;
    }
    ${vars.toAnimCyclePercent(1, vars.getDelayTime(delayed, 3))}% {
        opacity: 0;
    }
    ${vars.toAnimCyclePercent(1, vars.getDelayTime(delayed, 3.5))}% {
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
    
    // Cycle 2 start
    ${vars.animCycleBStartState}% {
        opacity: 0;
    }
    ${vars.toAnimCyclePercent(2, vars.getDelayTime(delayed, 1))}% {
        opacity: 0;
    }
    ${vars.toAnimCyclePercent(2, vars.getDelayTime(delayed, 1.5))}% {
        opacity: 1;
    }
    ${vars.toAnimCyclePercent(2, vars.getDelayTime(delayed, 25))}% {
        opacity: 1;
    }
    ${vars.toAnimCyclePercent(2, vars.getDelayTime(delayed, 2.5))}% {
        opacity: 0;
    }
    ${vars.toAnimCyclePercent(2, vars.getDelayTime(delayed, 3))}% {
        opacity: 0;
    }
    ${vars.toAnimCyclePercent(2, vars.getDelayTime(delayed, 3.5))}% {
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
`;