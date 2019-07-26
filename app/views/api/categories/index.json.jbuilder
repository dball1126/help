@categories.each do |category|
    json.categories do
        json.set! category.id do
            json.partial! '/api/categories/category'
        end
    end
end