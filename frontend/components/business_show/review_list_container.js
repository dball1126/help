import React from 'react';
import {connect} from 'react-redux';
import ReviewListItem from './review_list_item';

const mapStateToProps = (state, ownProps) => {
    const user = state.entities.users[ownProps.review.author_id];
    const currentUser = state.entities.users[state.session.id];
    
    return {
        user: user,
        currentUser: currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, null)(ReviewListItem);