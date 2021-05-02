import {keyframes} from "@emotion/react";

import * as vars from '../../variables';

export const titleGroup = keyframes`
    // Cycle 1 start
    ${vars.animCycleAEndState}% {
        opacity: 1
    }
    
    ${vars.toAnimCyclePercent(2, ((vars.animationBase/2)-0.5))}% {
        opacity: 1
    }
    ${vars.animCycleAEndState}% {
        opacity: 0
    }
    
    // Cycle 2 start
    ${vars.animCycleBStartState}% {
        opacity: 1
    }
    ${vars.toAnimCyclePercent(2, ((vars.animationBase)-0.5))}% {
        opacity: 1
    }
    ${vars.animCycleBEndState}% {
        opacity: 0
    }
`