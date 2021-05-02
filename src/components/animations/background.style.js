import {keyframes} from "@emotion/react";

import * as vars from '../../variables';

export const background = keyframes`
    // Cycle 1 start
    ${vars.animCycleAStartState}% {
        background-color: ${vars.lightColour};
        color: ${vars.darkColour};
    }
    ${vars.animCycleAEndState}% {
        background-color: ${vars.lightColour};
        color: ${vars.darkColour};
    }
    
    // Cycle 2 start
    ${vars.animCycleBStartState}% {
        background-color: ${vars.darkColour};
        color: ${vars.lightColour};
    }
    ${vars.animCycleBEndState}% {
        background-color: ${vars.darkColour};
        color: ${vars.lightColour};
    }
`;

