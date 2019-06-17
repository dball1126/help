import React from 'react';
import {connect} from 'react-redux';
import ReviewListItem from './review_list_item';
import { deleteReview } from '../../actions/review_actions';
const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    const user = state.entities.users[ownProps.review.author_id];
    
    return {
        user: user,
        currentUser: currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteReview: (id) => dispatch(deleteReview(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewListItem);