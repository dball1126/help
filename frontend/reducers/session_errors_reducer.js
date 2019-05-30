import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS} from '../actions/session_actions';

const nullErrors = [];

const sessionErrorsReducer  = (oldState = nullErrors, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_ERRORS:
            return action.errors;
        default:
            return oldState;
    }
}

export default sessionErrorsReducer;