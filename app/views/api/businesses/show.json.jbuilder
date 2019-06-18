json.business do 
    json.partial! '/api/businesses/business', business: @business
    json.imageLinks @business.images.map { |image| url_for(image) }
    json.reviews @business.reviews do |review|
        json.extract! review, :id, :content, :author_id, :business_id, :rating, :created_at, :updated_at
        json.first_name = review.user.first_name  # places the first_name in the reviews state under businesses

    end
    json.reviewIds @business.reviews.pluck(:id)
   
end

# @business.reviews.each do |review|
    
#         json.set! review.id do
#             # json.extract! review, :id, :content, :author_id, :business_id, :rating, :updated_at, :created_at
#             json.first_name = review.user.first_name
#         end
    
# end




#  @business.reviews.includes(:user).each do |review|
#      json.reviews do
#          json.set! review.id do
#              json.partial! '/api/reviews/review', review: review
#         end
#     end
 
#     json.users do
#         json.set! review.user.id do
#             json.partial! '/api/users/user', user: review.user
#         end
#     end
# end

