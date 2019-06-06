import React from 'react';
import {connect} from 'react-redux';
import ReviewForm from './review_form';
import {createReview} from '../../actions/review_actions';
import {fetchBusiness} from '../../actions/business_actions';

const mapStateToProps = (state, ownprops) => {
    
    const currentUser = state.entities.users[state.session.id]
    return {
        review: {content: "", rating: 0},
        formType: 'Create Review',
        currentUser: currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBusiness: (id) => dispatch(fetchBusiness(id)),
        action: (review) => dispatch(createReview(review))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);