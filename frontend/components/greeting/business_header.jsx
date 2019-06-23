import React from 'react';
import { Link } from 'react-router-dom';
import BusinessShowSearch from '../search/business_show_search';
const businessHeader = () => {
    return (
        <div className="business-show-header">
            <div className="business-header-container">
                <div className="business-header-logo">
                </div>
                <BusinessShowSearch />
                <div className="business-show-login-signup">
                    <div className="business-show-login-box">
                        <Link to="/login" className="business-show-login">Log In</Link>
                    </div>
                    <div className="business-show-signup-box">
                        <Link to="/signup" className="business-show-signup">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default businessHeader;