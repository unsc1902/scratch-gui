import {STAGE_DISPLAY_SIZES} from '../lib/layout-constants.js';

const SET_STAGE_SIZE = 'scratch-gui/StageSize/SET_STAGE_SIZE';

const initialState = {
<<<<<<< HEAD
    stageSize: 'large'
};

// stage size constants
const STAGE_SIZES = {
    small: 'small',
    large: 'large'
=======
    stageSize: STAGE_DISPLAY_SIZES.large
>>>>>>> d5989d13881b5bd42336bd8a007bc9cec0489e6e
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case SET_STAGE_SIZE:
        return {
            stageSize: action.stageSize
        };
    default:
        return state;
    }
};

const setStageSize = function (stageSize) {
    return {
        type: SET_STAGE_SIZE,
        stageSize: stageSize
    };
};

export {
    reducer as default,
<<<<<<< HEAD
    setStageSize,
    STAGE_SIZES
=======
    initialState as stageSizeInitialState,
    setStageSize
>>>>>>> d5989d13881b5bd42336bd8a007bc9cec0489e6e
};
