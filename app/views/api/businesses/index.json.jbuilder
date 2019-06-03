@businesses .each do |business|
    json.businesses.each do 
        json.set! business.id do
            json.partial! '/api/businesses/business', business: business
        end
    end
end