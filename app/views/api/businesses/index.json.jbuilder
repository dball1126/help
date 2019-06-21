@businesses.each do |business|
    json.businesses do 
        json.set! business.id do
            json.partial! '/api/businesses/business', business: business
            json.imageLinks business.images.map { |image| url_for(image) }
        end
    end
end