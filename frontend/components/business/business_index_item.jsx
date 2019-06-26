import React from 'react'
import {Link} from 'react-router-dom';
class BusinessIndexItem extends React.Component {
    
    render(){
        const stars = () => {
            let starColorTop;
            let starCounter = business.average_rating;
            return (
                <div className="star-review-item-rating" >
                    {[...Array(5)].map((ele, i) => {
                        starCounter -= 1;
                        if (starCounter < 0) starColorTop = "stary";
                        return (
                            <div className="star-box" key={i}>
                                <span className="fa fa-star" id={starColorTop} ></span>
                            </div>
                        )
                    })}
                </div>
            )

        }
        const images = () => {
            if (!business.imageLinks) {
                return "";
            } else {
                return (
                    <div>
                        <ul className="ul-images">
                            {business.imageLinks.map((image, i) => {
                                return (
                                    <li key={i} ><img src={image} className="image"></img></li>
                                )
                            })}
                        </ul>
                    </div>
                )
            }
        }
        const business = this.props.business;
        const image = business.imageLinks[Math.ceil(Math.random() * 2)];
        
        console.log(image)
        return (
            <li className="business-index-li">
                <div className="index-li-picture">
                    <div className="index-li-img">
                        <img src={image} className="index-image"></img>
                    </div>
                </div>
                    <div className="index-li-info-container">
                        <div className="index-li-top-container">
                            <div className="index-li-top-left">
                            <div className="index-name-div">
                            <Link to={`/businesses/${business.id}`} className="business-index-show-link">{business.name}</Link>
                            </div>
                            <div className="star-index-box">
                            {stars()}<span className="span-reviews-count">{business.reviews_count} Reviews</span>
                            </div>
                        </div>
                        <div className="index-li-top-right">
                            <span className="index-address-top">{business.phone_number}</span>
                            <span className="index-address">{business.address}</span>
                            <span className="index-address">{business.city}</span>
                        </div>
                    </div>
                    <div className="index-li-bottom-container">
                        
                    </div>
                </div>
            </li>
        )
    }
}

export default BusinessIndexItem;