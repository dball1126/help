import React from 'react';
import Search from '../search/main_search';
import RedBanner from '../greeting/top_banner_red';
import {Link} from 'react-router-dom';
import BusinessShowSearch from '../search/business_show_search';
class BusinessShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
        this.props.fetchBusiness(this.props.businessId);
    }

    

    render(){
        const defaultBusiness = {name: "", address: "", city: "", state: "", zipcode: "", phone_number: "",
        website: "", latitude: "", longitute: ""}
        const business = this.props.business || defaultBusiness;

        return (
            <div>
                <RedBanner />
                <div className="business-show-header">
                    <div className="business-header-container">
                        <div className="business-header-logo">
                        </div>
                        <BusinessShowSearch  />
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
                <div className="categories-main-header">
                    <div className="business-show-categories-container">
                        <ul className="ul-categories-business-show">
                            <li className="categories-restaurants"><span className="restaurants">Restaurants</span></li>
                            <li className="categories-home-services"><span>Home Services</span></li>
                            <li className="categories-auto-services"><span>Auto Services</span></li>
                            <li className="categories-more"><span>More</span></li>
                            <li className="categories-separator"></li>
                            <li className="categories-review"><span>Write a Review</span></li>
                            <li className="categories-business"><span>For Businesses</span></li>
                        </ul>
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