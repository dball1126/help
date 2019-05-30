import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({logout, currentUser}) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            <br />
            <Link to="/signup">Sign up</Link>
        </nav>
    );

    const personalGreeting = () => (
        <div>
            <h1>currentUser.email</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );

        if (currentUser){
           return personalGreeting()
        } else {
           return sessionLinks();
        }
}

export default Greeting;