import React from 'react';

const ReviewListItem = ({user, review, business, currentUser}) => {
        let starCounter = review.rating;
        let starColor;
        
        const image = () => {
            if (!review.image){
                return "";
            } else {
                return (
                    <div>
                        <span><img src={review.image} className="review-image"></img></span>
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
                        <span className="review-user">{review.first_name}</span>
                    </div>
                    <div className="review-item-li-right-container">
                        <div className="review-item-rating-container">
                            <span>{stars()}</span>
                        </div>
                        <div className="review-item-content-container">
                            <span className="review-item-content">{review.content}</span>
                            
                            <span>{image()}</span>
                            
                        </div>
                        <div className="review-item-destroy-container">
                        </div>
                    </div>
                </div>
            </li>
        )
}


export default ReviewListItem;
