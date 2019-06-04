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
        const business = this.props.business || "";

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