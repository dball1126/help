json.business do 
    json.partial! '/api/businesses/business', business: @business
    json.imageLinks @business.images.map { |image| url_for(image) }
    json.reviewIds @business.reviews.pluck(:id)
end

@business.reviews.includes(:user).each do |review|
    json.reviews do
        json.set! review.id do
            json.partial! '/api/reviews/review', review: review
        end
    end

    json.users do
        json.set! review.user.id do
            json.partial! '/api/users/user', user: review.user
        end
    end
end