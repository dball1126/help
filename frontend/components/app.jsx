import React from 'react';
import {Router, Switch, Link, Route } from 'react-router-dom';
import LoginformContainer from '../components/session_form/login_form_container';
import SignUpformContainer from '../components/session_form/signup_form_container';
import {AuthRoute, Protectedroute} from '../util/route_util';
import Homepage from './greeting/homepage';
const App = () => {
    return (
        <div>    
            <Switch>
                <Route exact path="/" component={Homepage} />
                <AuthRoute exact path="/login" component={LoginformContainer} />
                <AuthRoute exact path="/signup" component={SignUpformContainer} />
            </Switch >
            
        </div>
    )
}

export default App;


