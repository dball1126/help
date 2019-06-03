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
                            </div>
                        </div>
                        <div className="main-search-form">
                           <form method="get" className="main-business-search">
                               <div className="searchbar-left">
                                   <label htmlFor="" className="searchbar-left-label">
                                       <div className="searchbar-left-inside">
                                        <span className="find-searchbar-left">Find</span>
                                        <span className="input-searchbar-left">
                                            <input type="text"
                                                placeholder="ac repair, burgers, bars, spas..."
                                                className="business-search"/>
                                            </span>
                                        </div>
                                    </label>
                                </div>
                                <div className="searchbar-right">
                                    <label htmlFor="" className="searchbar-right-label">
                                        <div className="searchbar-right-inside">
                                            <span className="near-searchbar-right">Near</span>
                                            <span className="input-searchbar-right">
                                            <input type="text"
                                                  placeholder="Manhattan, NY"
                                                  className="location-search"/>
                                            </span>
                                        </div>      
                                    </label>      
                                </div>
                                <div className="main-search-button">
                                    <button type="submit" className="search-button">
                                        <div className="search-image"></div>
                                    </button>
                                </div>
                            </form>
                        </div>
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
                            </nav>
                            <div className="main-header-credits">
                                <div className="business-credit">Pancake Man</div>
                                <div className="name-credit">Photo by Johanna L</div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}


export default homepage;