@businesses.each do |business|
    json.businesses do 
        json.set! business.id do
            json.partial! '/api/businesses/business', business: business
        end
    end
end