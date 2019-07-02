import {connect } from 'react-redux';
import React from 'react';
import sessionForm from './session_form';
import {Link} from 'react-router-dom'
import {login, clearErrors} from '../../actions/session_actions';
import history from '../../util/browser_util';

const mapStateToProps = (state, ownProps) => {
        
        let reviewPathLocation = ownProps.history.location.reviewPathLocation || "";
    return {
        formType: 'Login',
        errors: state.errors.session,
        reviewPathLocation: reviewPathLocation
    }
}

const mapDispatchToProps = (dispatch) => { 
    return {
        processingForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors()),
        demoLogin: () => dispatch(login({ email: 'demo@demo.com', password: 'demouser' }))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps)(sessionForm);