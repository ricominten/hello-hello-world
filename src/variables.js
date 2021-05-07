// Colours
export const lightColour = 'OldLace';
export const darkColour = '#101c24';
export const aboutColour= 'wheat';
export const aboutOutlineColour = 'Peru';

// Animation
export const animationDuration = 40;
export const animationBase = `${animationDuration}s ease infinite`;
export const toAnimPercent = (secs) => secs/(animationDuration/100);
export const toAnimCyclePercent = (cycle = 1, secs) => {
    if (cycle === 1) return toAnimPercent(secs);
    return toAnimPercent(secs + (animationDuration/2));
};


export const animCycleAStartState = toAnimPercent(0);
export const animCycleAEndState = toAnimPercent(((animationDuration/2)-0.01));
export const animCycleBStartState = toAnimPercent((animationDuration/2));
export const animCycleBEndState = toAnimPercent((animationDuration-0.01));

export const groupDelay = 5;

export const getDelayTime = (delayed, time) => {
    const base = delayed ? groupDelay : 0;

    return base + time;
};