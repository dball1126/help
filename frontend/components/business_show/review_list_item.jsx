import React from 'react';

const ReviewListItem = ({author, review, business}) => {
    
        return (
            <li>
                <span>{review.content}</span>
                <span>{review.rating}</span>
                <span>{author.email}</span>
                <span>{business.name}</span>
            </li>
        )
}


export default ReviewListItem;
