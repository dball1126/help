import React from 'react';
import {connect} from 'react-redux';
import ReviewListItem from './review_list_item';

const mapStateToProps = (state, ownProps) => {
    const author = state.entities.users[ownProps.match.params.author_id]
    return {
        author: author
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, null)(ReviewListItem);