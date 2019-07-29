@business_categories.each do |business_category|
    json.business_categories do 
        json.set! business_category.id do
            json.partial! '/api/business_categories/business_category', business_category: business_category
        end
    end
end