import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const Auth = ({component: Component, path, loggedIn, exact}) => {

    return (
    <Route path={path} 
           exact={exact}
           render={(props) => (
     loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )} />
)};
//try to rediret in the Auth route right above to go back to the business page wher you clicked write a review.

//REDIRECT TO signup FOR NOW   maybe switch to homepage at some point

const Protected = ({ component: Component, path, loggedIn, exact}) => {
    
    return (
    <Route path={path} 
           exact={exact} 
           render={(props) => (
    loggedIn ? <Component {...props} /> : <Redirect to="/login" path={path} exact={exact} /> 
    )}/>
)};

const mapStateToProps = (state) => {
    
    return {
        loggedIn: Boolean(state.session.id)
    }
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth))
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected))