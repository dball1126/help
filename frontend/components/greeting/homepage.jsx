import GreetingContainer from './greeting_container';
import React from 'react';

const homepage = () => {
   
    return (
        <div>
            
            <div className="homepage-main-container">
                <div className="homepage-main-inner-container">
                    <div className="homepage-main-nav-container">
                        <nav className="homepage-nav-reviews">
                            <ul className="ul-nav-reviews">
                                <li className="nav-review-link">Write a Review</li>
                                <li className="nav-events-link">Events</li>
                                <li className="nav-talk-link">Talk</li>
                            </ul>
                        </nav>
                        <nav className="home-page-nav-session">
                            <GreetingContainer path="homepage" />
                        </nav>
                    </div>
                    <div className="homepage-main-inner-inner-container">
                        <div className="main-logo">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}


export default homepage;