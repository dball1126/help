import React from 'react';
import {Link} from 'react-router-dom';

const ReviewListItem = ({user, review, business, currentUser, deleteReview, listener}) => {
        let starCounter = review.rating;
        let starColor;
        
        const deleteButton = () => {
            if (!user){
                return "";
            } else {
                return (
                    <div className="delete-review">
                        <button className="editReviewButton"><Link to={`/businesses/${review.business_id}/edit/${review.id}`}>Edit Review</Link></button>
                        <button onClick={() => deleteReview(review.id)} className="deleteReviewButton">Delete Review</button>
                    </div>
                )
            }
        }
        const image = () => {
            
            if (!review.image){
                return "";
            } else {
                return (
                    <div className="review-item-content-img">
                        <div className="review-item-img-box"><img src={review.image} className="review-image image" id="imageid"></img></div>
                    </div>
                )
            }
        }
        const stars = () => {
           
            return (
                <div className="star-review-item-rating" >
                    {[...Array(5)].map((ele, i) => { 
                        starCounter -= 1;
                        if(starCounter < 0 ) starColor = "stary";
                        return (
                            <div className="star-box" key={i}>
                                <span className="fa fa-star" id={starColor} ></span> 
                            </div>             
                        )
                    })}
                </div>
            )
            
        }
            
        
        return (
            
            <li  key={review.id} className="review-business-show-li">
               
                <div className="review-item-li-container">
                    <div className="review-item-li-left-container">
                        <div className="review-user-image-box"><img className="review-user-image"  src={review.user_image}></img></div>
                        <span className="review-user">{review.name}<br/>
                            <p className="review-user-count">{review.user_reviews} reviews</p>
                        </span>
                        
                    </div>
                    <div className="review-item-li-right-container">
                        <div className="review-item-rating-container">
                            <span>{stars()}</span>
                        </div>
                        <div className="review-item-content-container">
                            <span className="review-item-content">{review.content}</span>
                            
                            <span className="review-item-content-img">{image()}</span>
                            {listener()}
                        </div>
                        <div className="review-item-destroy-container">
                            
                            <span>{deleteButton()}</span>
                        </div>
                    </div>
                </div>
            </li>
        )
}


export default ReviewListItem;
