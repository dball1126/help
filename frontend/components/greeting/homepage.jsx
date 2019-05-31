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
                                    <button type="submit" className="search-button">
                                    
                                        <img src="https://i.imgur.com/6nfeJt3.png" width="19" height="19"></img>
                                    </button>
                                </div>
                            </form>
                        </div>
                                <nav className="main-nav-categories">
                                    <ul className="ul-nav-categories">
                                        <li className="cooling-services">
                                    <img src="/assets/home-heating-icon.png" width="20" height="20"></img>
                                            Heating & Air Conditioning
                                        </li>
                                        <li className="restaurants">
                                    <img src="/assets/utensil.png" width="20" height="20"></img>
                                            Restaurants
                                        </li>
                                        <li className="home-services">
                                 <img src="/assets/home-icon.png" width="20" height="20"></img>
                                            Home Services
                                        </li>
                                        <li className="Delivery">
                                    <img src="/assets/delivery-scooter.png" width="20" height="20"></img>
                                            Deilvery
                                        </li>
                                    </ul>
                                </nav>
                    </div>
                </div>
            </div>
        </div>
    )
    
}


export default homepage;