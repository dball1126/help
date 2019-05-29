import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({logout, currentUser}) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            <br />
            <Link to="/signup">Sign up</Link>
        </nav>
    )
}


const PersonalGreeting = ({}) => {


}


export default Greeting;