import {RECEIVE_ALL_BUSINESSES, RECEIVE_BUSINESS} from '../actions/business_actions';

import { RECEIVE_REVIEW, DESTROY_REVIEW} from '../actions/review_actions';

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
            if (!newState[review.business_id].reviewIds.includes(review.id)) {
                newState[review.business_id].reviewIds.push(review.id);
            }
            return newState;
        case DESTROY_REVIEW:
          
            
            // delete newState
            // delete newState.reviews[]
            return newState;
        default:
            return oldState;
    }
}

export default businessesReducer;