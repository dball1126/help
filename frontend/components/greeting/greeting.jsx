import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({logout, currentUser}) => {
    const sessionLinks = () => (
        <ul className="login-signup">
            <li className="login"><Link to="/login">Log In</Link></li>
            <li className="signup"><Link to="/signup"><span className="signup-word">Sign up</span></Link></li>
        </ul>
    );

    const personalGreeting = () => (
        <div>
            <h1>{currentUser.email}</h1>
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