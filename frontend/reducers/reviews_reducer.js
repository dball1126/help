import {RECEIVE_REVIEW, DESTROY_REVIEW, RECEIVE_ALL_REVIEWS} from '../actions/review_actions';

import { RECEIVE_BUSINESS, RECEIVE_ALL_BUSINESSES, RECEIVE_BUSINESS_REVIEWS} from '../actions/business_actions';
const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_REVIEW:     
            return Object.assign({}, oldState, {[action.review.id]: action.review})
        // case RECEIVE_ALL_BUSINESSES:
        //     return action.reviews;
        case RECEIVE_ALL_REVIEWS:
            
            return Object.assign({}, oldState, action.reviews);
        case DESTROY_REVIEW:
            
            const newState = Object.assign({}, oldState);
            
                delete newState[action.reviewId]
                
            return newState;
        case RECEIVE_BUSINESS:
            
            if (action.business.reviews)
            return action.business.reviews
            else
            return Object.assign({}, oldState);
        // case RECEIVE_BUSINESS:
        case RECEIVE_BUSINESS_REVIEWS:
            //entities.reviews
            
            // , reviews: action.business.reviews
            return Object.assign({}, oldState, action.business.reviews)
        default:
            return oldState;
    }
}

export default reviewsReducer;