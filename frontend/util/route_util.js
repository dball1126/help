import React from 'react';
import {Link, Redirect, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (<Component {...props} />) :
                    (<Redirect to="/signup" />)
                    
    )} />
);
//REDIRECT TO signup FOR NOW   maybe switch to homepage at some point

const Protected = ({ component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (<Component {...props} />) :
                    (<Redirect to="/signup" />)
    )}/>
);

const mapStateToProps = (state) => {
    return {
        loggedIn: Boolean(state.session.currentUser)
    }
}

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth))
export const ProtectedRoute = withRouter(connect(mapStateToProps, undefined)(Protected))


