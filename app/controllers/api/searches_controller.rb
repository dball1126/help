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
        location = "new york" if location == "" 
        location = location.split(',')[0]
        locationStr = "LOWER(city) = '#{location.downcase}'" || "LOWER(state) = '#{location.downcase}'"

        @businesses = Business.where('(' + queryString + ')')
        
        @businesses = Business.all if @businesses.empty?
        render '/api/businesses/index'
    end
    end

    def business_start
        counter = (1...Business.count).to_a.sort_by{rand}[0...Business.count]
        bus1 = counter.first
        bus2 = counter.second
        bus3 = counter.third

        @businesses = Business.find(bus1, bus2, bus3)
        render '/api/businesses/index'
    end
end
