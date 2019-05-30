import React from 'react';
import { Route } from 'react-router-dom';
import LoginformContainer from '../components/session_form/login_form_container';
import SignUpformContainer from '../components/session_form/signup_form_container';
import { AuthRoute, Protectedroute } from '../util/route_util';
import Homepage from './greeting/homepage';
const App = () => {
    return (
        <div> 
             <Homepage />
             <AuthRoute exact path="/login" component={LoginformContainer} />
             <AuthRoute exact path="/signup" component={SignUpformContainer} />
        </div>
    )
}

export default App;


