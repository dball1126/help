import { connect } from 'react-redux';
import React from 'react';
import sessionForm from './session_form';
import { Link } from 'react-router-dom'
import {signup, clearErrors, login} from '../../actions/session_actions';

const mapStateToProps = ({errors}) => {
    
    return {
        formType: 'Sign Up',
        errors: errors.session 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processingForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors()),
        demoLogin: () => dispatch(login({ email: 'demo@demo.com', password: 'demouser' }))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps)(sessionForm);