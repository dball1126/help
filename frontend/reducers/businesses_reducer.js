import {RECEIVE_ALL_BUSINESSES, RECEIVE_BUSINESS} from '../actions/business_actions';
import merge from 'lodash/merge';
import {RECEIVE_REVIEW} from '../actions/review_actions';

const businessesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_BUSINESSES:
            return merge({}, action.businesses);
        case RECEIVE_BUSINESS:
            return merge({}, oldState, {[action.business.id]: action.business});
        case RECEIVE_REVIEW:
            const {review} = action;
            newState[review.business_id].reviewIds.push(review.id);
            return newState
        default:
            return oldState;
    }
}

export default businessesReducer;