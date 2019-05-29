import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS} from '../actions/session_actions';

const nullErrors = [];

export default (oldState = nullErrors, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.errors;
        case RECEIVE_ERRORS:
            return nullErrors;
        default:
            return oldState;
    }
}