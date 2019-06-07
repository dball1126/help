import React from 'react';

const ReviewListItem = ({user, review, business, currentUser}) => {
        
        return (
            <li key={business.id}>
                <span>{review.content}</span>
                <span>{review.rating}</span>
                <span>{}</span>
                <span>{business.name}</span>
            </li>
        )
}


export default ReviewListItem;
