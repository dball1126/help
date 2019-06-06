import {RECEIVE_REVIEW, DESTROY_REVIEW, RECEIVE_ALL_REVIEWS} from '../actions/review_actions';
import merge from 'lodash/merge';
import {RECEIVE_BUSINESS} from '../actions/business_actions';
const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_REVIEW:     
            return merge({}, oldState, {[action.review.id]: action.review})
        case RECEIVE_ALL_REVIEWS:
            return merge({}, oldState, action.reviews)
        case DESTROY_REVIEW:
            const newState = merge({}, oldState);
                delete newState[action.review.id]
            return newState;
        case RECEIVE_BUSINESS:
            return merge({}, oldState, action.reviews)
        default:
            return oldState;
    }
}

export default reviewsReducer;