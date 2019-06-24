class Api::SearchesController < ApplicationController
    def business_search
        query = params[:query][:query]
        if query == ""
            @businesses = Business.all 
            render '/api/businesses/index'
        else
            
        queryString = query.split(' ').map do |string|
            
            string = "LOWER(name) LIKE '%#{string.downcase}%'"
        end.join(" OR ");

        location = params[:query][:location]
        location = location.split(',')[0]
        locationStr = "LOWER(city) = '#{location.downcase}'" || "LOWER(state) = '#{location.downcase}'"

        @businesses = Business.where('(' + queryString + ')')
        
        @businesses = Business.all if @businesses.empty?
        render '/api/businesses/index'
    end
    end

end
