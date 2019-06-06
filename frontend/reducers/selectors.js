export const selectBusiness = ({businesses}, businessId) => {
    return businesses[businessId] || { reviewIds: [] }
}

export const selectBusinessReviews = ({reviews}, business) => {
    
    return business.reviewIds.map(reviewId => reviews[reviewId]);
}