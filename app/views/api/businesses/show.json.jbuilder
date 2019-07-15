json.business do 
    json.partial! '/api/businesses/business', business: @business
    json.imageLinks @business.images.map { |image| url_for(image) }
   
        json.reviews do 
            @business.reviews.each do |review|
                json.set! review.id do  
                    json.extract! review, :id, :content, :author_id, :business_id, :rating, :created_at, :updated_at
                    json.name review.user.first_name.capitalize + " " + review.user.last_name.capitalize
                    json.user_reviews review.user.reviews.count  # places the first_name in the reviews state under businesses
                    json.user_image url_for(review.user.image)
                      if (review.image.attached?)
                         json.image url_for(review.image)
                      end
    
                end
            end
        end
    
end

