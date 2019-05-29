import React from 'react';
import {Router, Switch, Link, Route } from 'react-router-dom';
import LoginformContainer from '../components/session_form/login_form_container';
import SignUpformContainer from '../components/session_form/signup_form_container';
import GreetingContainer from '../components/greeting/greeting_container';
import {AuthRoute, Protectedroute} from '../util/route_util';
const App = () => {
    return (
        <div>
            <header>
                <h1>Hello World</h1>
                <GreetingContainer />
            </header>
            <Switch>
                <AuthRoute path="/login" component={LoginformContainer} />
                <AuthRoute path="/signup" component={SignUpformContainer} />
            </Switch >
            
        </div>
    )
}

export default App;


