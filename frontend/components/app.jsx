import React from 'react';
import {Router, Switch, Link, Route } from 'react-router-dom';
import LoginformContainer from '../components/session_form/login_form_container';
import SignUpformContainer from '../components/session_form/signup_form_container';

const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <Route path="/login" component={LoginformContainer}/>
            <Route path="/signup" component={SignUpformContainer}/>
            <Link to="/signup">Signup</Link>
            <br />
            <br />
            <Link to="login">Login></Link>
        </div>
    )
}

export default App;