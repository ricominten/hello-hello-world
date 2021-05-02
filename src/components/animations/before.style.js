import {keyframes} from "@emotion/react";
import * as vars from "../../variables";

export const before = (delayed) => keyframes`
    // Cycle 1 start
    ${vars.animCycleAStartState}% {
        opacity: 0;
    }
    ${vars.toAnimCyclePercent(1, vars.getDelayTime(delayed, 0.75))}% {
        opacity: 0;
    }
    ${vars.toAnimCyclePercent(1, vars.getDelayTime(delayed, 0.90))}% {
        opacity: 1;
    }
    ${vars.toAnimCyclePercent(1, vars.getDelayTime(delayed, 1.05))}% {
        opacity: 1;
    }
    ${vars.toAnimCyclePercent(1, vars.getDelayTime(delayed, 1.25))}% {
        opacity: 0;
    }
    ${vars.toAnimCyclePercent(1, vars.getDelayTime(delayed, 1.40))}% {
        opacity: 0;
    }
    ${vars.toAnimCyclePercent(1, vars.getDelayTime(delayed, 1.55))}% {
        opacity: 1;
    }
    ${vars.toAnimCyclePercent(1, vars.getDelayTime(true, -0.25))}% {
        ${delayed ? '' : 'opacity: 1;'};
    }
    ${vars.toAnimCyclePercent(1, vars.getDelayTime(true, 1.75))}% {
        ${delayed ? '' : 'opacity: 0;'};
    }
    ${vars.animCycleAEndState}% {
        opacity: ${delayed ? 1 : 0};
    }
    
    // Cycle 2 start
    ${vars.animCycleBStartState}% {
        opacity: 0;
    }
    ${vars.toAnimCyclePercent(2, vars.getDelayTime(delayed, 0.75))}% {
        opacity: 0;
    }
    ${vars.toAnimCyclePercent(2, vars.getDelayTime(delayed, 0.90))}% {
        opacity: 1;
    }
    ${vars.toAnimCyclePercent(2, vars.getDelayTime(delayed, 1.05))}% {
        opacity: 1;
    }
    ${vars.toAnimCyclePercent(2, vars.getDelayTime(delayed, 1.25))}% {
        opacity: 0;
    }
    ${vars.toAnimCyclePercent(2, vars.getDelayTime(delayed, 1.40))}% {
        opacity: 0;
    }
    ${vars.toAnimCyclePercent(2, vars.getDelayTime(delayed, 1.55))}% {
        opacity: 1;
    }
    ${vars.toAnimCyclePercent(2, vars.getDelayTime(true, -0.25))}% {
        ${delayed ? '' : 'opacity: 1;'};
    }
    ${vars.toAnimCyclePercent(2, vars.getDelayTime(true, 1.75))}% {
        ${delayed ? '' : 'opacity: 0;'};
    }
    ${vars.animCycleBEndState}% {
        opacity: ${delayed ? 1 : 0};
    }
`;