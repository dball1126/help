import {RECEIVE_ALL_BUSINESSES, RECEIVE_BUSINESS} from '../actions/business_actions';
import merge from 'lodash/merge';

const businessesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    
    switch (action.type) {
        case RECEIVE_ALL_BUSINESSES:
            return merge({}, action.businesses);
        case RECEIVE_BUSINESS:
            return merge({}, oldState, {[action.business.id]: action.business});
        default:
            return oldState;
    }
}

export default businessesReducer;