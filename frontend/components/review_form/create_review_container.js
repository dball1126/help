import React from 'react';
import {connect} from 'react-redux';
import ReviewForm from './review_form';
import {createReview} from '../../actions/review_actions';
import {fetchBusiness} from '../../actions/business_actions';

const mapStateToProps = (state, ownprops) => {
    
    
    const businesses = state.entities.businesses;
    const currentUser = state.entities.users[state.session.id]
    const business = state.entities.businesses[ownprops.match.params.businessId] || {};
    
    return {
        review: {content: "", rating: 0},
        formType: 'Create Review',
        currentUser: currentUser,
        businesses: businesses,
        business: business,
        errors: state.errors.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBusiness: (id) => dispatch(fetchBusiness(id)),
        action: (review) => dispatch(createReview(review))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);