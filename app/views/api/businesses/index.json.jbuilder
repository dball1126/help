@businesses.each do |business|
    json.businesses do 
        json.set! business.id do
            json.partial! '/api/businesses/business', business: business
            json.imageLinks business.images.map { |image| url_for(image) }
            
            if business.reviews.any?
                json.review business.reviews.map{|x| x.content}.max
            end
            if business.categories.any?
                json.category business.categories
            end
        end
    end
end