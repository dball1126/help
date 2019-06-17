import React from 'react';

const ReviewListItem = ({user, review, business, currentUser}) => {
        
        const stars = () => {
            if(!review.rating){
                return "";
            } else {
                const num = review.rating;
            return (
                <div className="star-review-item-rating" >
                    {[...Array(num)].map((ele, i) => {
                        return (
                                <span className="fa fa-star" key={i}></span>              
                        )
                    })}
                </div>
            )
            }
        }
        
        return (
            
            <li  key={review.id} className="review-business-show-li">
                <div className="review-item-li-container">
                    <div className="review-item-li-left-container">
                    </div>
                    <div className="review-item-li-right-container">
                        <div className="review-item-rating-container">
                            <span>{stars()}</span>
                        </div>
                        <div className="review-item-content-container">
                            <span className="review-item-content">{review.content}</span>
                            {/* <span>{user.first_name}</span> */}
                            <span>{}</span>
                            
                        </div>
                        <div className="review-item-destroy-container">
                        </div>
                    </div>
                </div>
            </li>
        )
}


export default ReviewListItem;
