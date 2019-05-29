import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import {combineReducers } from 'redux';

const rootReducer = (combineReducers(sessionReducer,
                                     errorsReducer));

export default rootReducer;
