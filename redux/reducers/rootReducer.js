import calculatorReducer from './calculatorReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    stats: calculatorReducer
});

export default rootReducer;