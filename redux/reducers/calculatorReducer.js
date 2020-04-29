import {SET_WEIGHT, SET_AGE} from '../actions/calculatorActions';

const calculatorReducer = (state = {value: 0}, action) => {
    switch (action.type) {
        case SET_AGE:
            return {...state, value: state.value + 1};
        case SET_WEIGHT:
            return {...state, value: state.value - 1};
        default:
            return {...state};
    }
};

export default calculatorReducer;