import {RECEIVE_REVIEW, DESTROY_REVIEW} from '../actions/review_actions';
import merge from 'lodash/merge';

const reviewsReducer = (oldState = {}. action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_REVIEW:
            return merge({}, oldState, {[action.review.id]: action.review})
        case DESTROY_REVIEW:
            const newState = merge({}, oldState);
                delete newState[action.review.id]
            return newState;
        default:
            return oldState;
    }
}

export default reviewsReducer;