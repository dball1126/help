json.business do 
    json.partial! '/api/businesses/business', business: @business
    json.imageLinks @business.images.map { |image| url_for(image) }
end