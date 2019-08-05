import { RECEIVE_START_BUSINESSES} from '../actions/business_actions';

import {RECEIVE_CATEGORY} from '../actions/category_actions';

const startReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_START_BUSINESSES:
            return Object.assign({}, action.businesses);
        default:
            return oldState;
    }
}

export default startReducer;