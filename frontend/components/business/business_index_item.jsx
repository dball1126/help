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
        
        const business = this.props.business;
        return (
            <li className="business-index-li">
                <div className="index-li-picture">
                    <span>dummy data</span>
                </div>
                    <div className="index-li-info-container">
                        <div className="index-li-top-container">
                            <div className="index-li-top-left">
                            <Link to={`/businesses/${business.id}`}>{business.name}</Link>
                            {stars()}
                        </div>
                        <div className="index-li-top-right">
                            <span>{business.phone_number}</span>
                            <span>{business.address}</span>
                            <span>{business.city}</span>
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