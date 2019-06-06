export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const DESTROY_REVIEW = 'DESTROY_REVIEW';
import * as ReviewApiUtil from '../util/review_api_util';
const receiveReview = ({review}) => {
    return {
        type: RECEIVE_REVIEW,
        review: review
    } //author may need to be passed in
}

const destroyReview = () => {
    return {
        type: DESTROY_REVIEW,
    }
}

export const fetchReview = (review) => {
    return (dispatch) => {
        return ReviewApiUtil.fetchReview(review).then(payload =>{
            return dispatch(receiveReview(payload));
        })
    }
}


export const createReview = (review) => {
    return (dispatch) => {
        return ReviewApiUtil.createReview(review).then(payload =>{
            return dispatch(receiveReview(payload));
        })
    }
}

export const updateReview = (review) => {
    return (dispatch) => {
        return ReviewApiUtil.updateReview(review).then(payload => {
            return dispatch(receiveReview(payload))
        })
    }
}

export const deleteReview = (review) => {
    return (dispatch) => {
        return ReviewApiUtil.destroyReview(review).then(() => {
            return dispatch(destroyReview(review))
        })
    }
}