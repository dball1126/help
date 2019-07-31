json.category do
    json.partial! 'api/categories/category', category: @category
    json.businesses do
        @category.businesses.each do |business|
            json.set! business.id do  
                json.partial! '/api/businesses/business', business: business
                json.imageLinks business.images.map { |image| url_for(image) }
                if business.reviews.any?
                    json.review business.reviews.map{|x| x.content}.max
                end

                if business.categories.any?
                    json.category business.categories.map{|x| x.name}
                end
            end
        end
    end
end