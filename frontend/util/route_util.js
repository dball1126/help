import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


const Auth = (state, ownProps) => {
    const path = state.path;
    const exact = state.exact;
    const Component = state.component;
    const loggedIn = state.loggedIn;
    let relocater = state.location.reviewPathLocation;
   
    if (relocater === undefined) relocater = "/";
    
    return (
    <Route path={path}
           relocater={relocater}
           exact={exact}
           
           render={(props) => (
     loggedIn ? <Redirect to={{pathname: relocater}} /> : <Component {...props} />
    )} />
)};


// instead of Redirect    try props.history.push     
// it appears Redirect might be wiping out the history.
//try to rediret in the Auth route right above to go back to the business page wher you clicked write a review.

//REDIRECT TO signup FOR NOW   maybe switch to homepage at some point
//{ component: Component, path, loggedIn, exact}
const Protected = (state, ownProps) => {

    const path = state.path
    const exact = state.exact
    const Component = state.component
    const loggedIn = state.loggedIn
    let reviewPathLocation;
    let businessId;
    const reviewLocation = "/businesses/:businessId/reivew";
    
    if (state.location.pathname.match(/\d+/g) !== null && !loggedIn){
        businessId = state.location.pathname.match(/\d+/g).map(Number)[0];
        reviewPathLocation = `/businesses/${businessId}/review`
    }
    
    
    return (
    <Route path={path} 
            
           exact={exact} 
           render={(props) => (
    loggedIn ? <Component {...props} /> : <Redirect to={{pathname: "/login",
                                                         reviewPathLocation: reviewPathLocation}}  /> 
    )}/>
)};

const mapStateToProps = (state) => {
    
    return {
        loggedIn: Boolean(state.session.id),
        
    }
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth))
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected))