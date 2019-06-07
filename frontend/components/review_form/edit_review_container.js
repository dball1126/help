import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import {fetchBusiness} from '../../actions/business_actions';
import {updateReview} from '../../actions/review_actions';


const mapStateToProps = (state, ownprops) => {
    const defaultReview = {content: "", rating: 0}
    const review = state.entities.reviews[ownprops.match.params.reviewId] || defaultReview;
    const currentUser = state.entities.users[state.session.id];
    const business = state.entities.businesses[ownprops.match.params.businessId]
    const businesses =  state.entities.businesses;
    return {
        review: review,
        formType: 'Edit Review',
        business: business,
        currentUser: currentUser,
        businesses: businesses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        action: (review) => dispatch(updateReview(review)),
        fetchBusiness: (id) => dispatch(fetchBusiness(id))
    }
}

class EditReviewForm extends React.Component{
    

    render(){
        const {business, review, currentUser, formType} = this.props;
        return (
        <div>
            <ReviewForm business={business} 
                        review={review}
                        currentUser={currentUser}
                        formType={formType}/>
        </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm);