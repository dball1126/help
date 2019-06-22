class Api::SearchesController < ApplicationController
    def business_search
        query = params[:query][:query]
        
        queryString = query.split(' ').map do |string|
            
            string = "LOWER(name) LIKE '%#{string.downcase}%'"
        end.join(" OR ");

        location = params[:query][:location]
        location = location.split(',')[0]
        locationStr = "LOWER(city) = '#{location.downcase}'"

        @businesses = Business.where('(' + queryString + ')')
        
        @businesses = Business.all if @businesses.empty?
        render '/api/businesses/index'
    end

    def category_search
        query = params[:query][:category]
        @businesses = Category.find_by(name: query).businesses
        render '/api/businesses/index'
    end
end
