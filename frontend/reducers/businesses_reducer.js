import {RECEIVE_ALL_BUSINESSES, RECEIVE_BUSINESS} from '../actions/business_actions';

import {RECEIVE_REVIEW} from '../actions/review_actions';

const businessesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_BUSINESSES:
            return Object.assign({}, action.businesses);
        case RECEIVE_BUSINESS:
            return Object.assign({}, oldState, {[action.business.id]: action.business});
        case RECEIVE_REVIEW:
            
            const {review} = action;
            newState[review.business_id].reviews.push(review.id);
            return newState
        default:
            return oldState;
    }
}

export default businessesReducer;