import GreetingContainer from './greeting_container';
import React from 'react';
// import MainSearch from '../search/main_search';
import SearchContainer from '../search/search_container';
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
                            </div>
                        </div>
                        <SearchContainer />
                            <nav className="main-nav-categories">
                                <ul className="ul-nav-categories">
                                    <li className="cooling-services">
                                        Heating & Air Conditioning
                                    </li>
                                    <li className="restaurants">
                                        Restaurants
                                    </li>
                                    <li className="home-services">
                                        Home Services
                                    </li>
                                    <li className="Delivery">
                                        Deilvery
                                    </li>
                                </ul>
                            <div className="main-header-credits">
                                <div className="business-credit">Pancake Man</div>
                                <div className="name-credit">Photo by Larry J</div>
                            </div>
                            </nav>
                    </div>
                </div>
            </div>

            <div className="homepage-main-footer-container">
                <div className="homepage-footer-inner-container">
                    <div className="footer-content-wrapper">

                    </div>
                    <div className="footer-img-wrapper">
                        <div className="footer-img"></div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}


export default homepage;