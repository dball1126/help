import React from 'react';
import Search from '../search/search';
import RedBanner from '../greeting/top_banner_red';
import {Link} from 'react-router-dom';
class BusinessShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
        this.props.fetchBusiness(this.props.businessId);
    }

    

    render(){
        const business = this.props.business || "";

        return (
            <div>
                <RedBanner />
                <div className="business-show-header">
                    <div className="business-header-container">
                        <div className="business-header-logo">
                        </div>
                        <div className="business-search-container">
                            <form method="get" className="business-show-search">
                                <div className="business-show-search-left">
                                    <label htmlFor="" className="searchbar-left-label">
                                        <div className="searchbar-left-inside">
                                            <span className="find-searchbar-left">Find</span>
                                            <span className="input-searchbar-left">
                                                <input type="text"
                                                    placeholder="ac repair, burgers, bars, spas..."
                                                    className="business-search" />
                                            </span>
                                        </div>
                                    </label>
                                </div>
                                <div className="business.show-search-right">
                                    <label htmlFor="" className="searchbar-right-label">
                                        <div className="searchbar-right-inside">
                                            <span className="near-searchbar-right">Near</span>
                                            <span className="input-searchbar-right">
                                                <input type="text"
                                                    placeholder="Manhattan, NY"
                                                    className="location-search" />
                                            </span>
                                        </div>
                                    </label>
                                </div>
                                <div className="business-show-search-button">
                                    <button type="submit" className="search-button-business-show">
                                        <div className="business-show-search-image"></div>
                                    </button>
                                </div>
                            </form>
                        </div>
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
                
                    
                    
                
                <ul className="ul-business-info">
                    <li>HELLO</li>
                    <li>{business.name}</li>
                    <li>{}</li>
                </ul>
            </div>
        );
    }
}



export default BusinessShow;