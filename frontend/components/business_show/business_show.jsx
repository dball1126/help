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
        website: "", latitude: "", longitude: "", imageLinks: [""]}
        const business = this.props.business || defaultBusiness;

        const images = () => {
            if (!business.imageLinks){
                return "";
            }   else {
                return (
                    <div>
                        <ul className="ul-images">
                            {business.imageLinks.map((image, i) => {
                                return (
                                    <li key={i}><img src={image} className="image"></img></li>
                                )
                            })}
                        </ul>
                    </div>
                )
            }
        }

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
                <div className="business-main-content-container">
                    <div className="business-content-container">
                        <div className="actual-business-header">
                            <div className="business-name-header">
                                <div className="business-name">{business.name}
                                </div>
                                    <div className="business-ratings">
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="reviews-count"> 0 reviews</span>
                                    </div>
                                </div>
                                <div className="business-review-header">
                                    <button className="write-a-review-button">Write a Review</button>
                                    <button className="add-photo-button">Add Photo</button>
                                    <button className="share-photo-button">Share</button>
                                    <button className="save-button">Save</button>
                                </div>
                            </div>
                        <div className="business-show-sub-header">
                            <div className="business-show-map">
                                <div className="image-placeholder">
                                </div>
                                <div className="address-box">
                                    <span className="full-address">{business.address}</span><br />
                                    <span className="full-address">{business.city}, {business.state} {business.zipcode}</span><br />
                                    <span>{business.phone_number}</span><br />
                                    <span><Link to={business.website}>{business.website}</Link></span>
                                </div>
                            </div>
                            <div className="business-pictures-container">
                                <div className="business-pictures-showcase">
                                    {images()}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}



export default BusinessShow;