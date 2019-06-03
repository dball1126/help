import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({logout, currentUser, demoLogin}) => {
    const sessionLinks = () => (
        <ul className="login-signup">
            <li className="login"><Link to="/login">Log In</Link></li>
            <Link to="/signup" className="signup">Sign up</Link>
            <li><button className="demo-button" onClick={demoLogin}>Demo Log in</button></li>
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