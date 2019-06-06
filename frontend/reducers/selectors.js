export const selectBusiness = ({businesses}, businessId) => {
    return businesses[businessId] || { review_ids: [] }
}

export const selectBusinessReviews = ({reviews}, business) => {
    
    return business.review_ids.map(reviewId => reviews[reviewId]);
}