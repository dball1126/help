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
                        <div className="main-logo-containter">
                            <div className="main-logo">
                                <img src="/assets/help-logo.png" width="150" height="150"></img>
                            </div>
                        </div>
                        <div className="main-search-form">
                           <form method="get" className="main-business-search">
                                <input type="text"
                                       placeholder="Find ac repair, burgers, bars, spas..."
                                       className="business-search"/>
                                <input type="text"
                                       placeholder="Near Manhattan, NY"
                                       className="location-search"/>
                                <div className="main-search-button">
                                    <button type="submit" className="search-button">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}


export default homepage;