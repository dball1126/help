class Api::SearchesController < ApplicationController
    

    def business_search
        query = params[:query][:query].gsub("'", "''")
        location = params[:query][:location]
        allBusinesses = params[:query][:allBusinesses]
       
        
    #     if query == ""
    #         @businesses = Business.all 
    #         render '/api/businesses/index'
    #     else
        
    #     queryString = query.split(' ').map do |string|
            
    #         string = "LOWER(name) LIKE '%#{string.downcase}%'"
    #     end.join(" OR ");
         
    #     location = params[:query][:location]
    #     location = "new york" if location == "" 
    #     location = location.split(',')[0]
    #     locationStr = "LOWER(city) = '#{location.downcase}'" || "LOWER(state) = '#{location.downcase}'"

    #     @businesses = Business.where('(' + queryString + ')')
        
    #     @businesses = Business.all if @businesses.empty?
    #     render '/api/businesses/index'
    # end
    
        if query == "" && location == ""
            @businesses = Business.all
            render '/api/businesses/index'
        elsif query != "" && location == ""
            
            queryString = query.split(' ').map do |string|
                string = "LOWER(name) LIKE '%#{string.downcase}%'"
            end.join(" OR ");
            if allBusinesses == "true"
                
                @businesses = Business.where('(' + queryString + ')')
            else
                @businesses = Business.where('(' + queryString + ')').limit(6)
            end
            render 'api/businesses/index'

        elsif query == "" && location != ""
            
            queryString = location.split(' ').map do |string|
                string = "LOWER(city) LIKE '%#{string.downcase}%'" + (" OR ") + ("LOWER(state) LIKE '%#{string.downcase}%'")
            end.join(" OR ");
            
            if allBusinesses == "true"
                
                @businesses = Business.where('(' + queryString + ')')
            else
                @businesses = Business.where('(' + queryString + ')').limit(6)
            end        
            render 'api/businesses/index'
        else 
            
            locationString = location.split(' ').map do |string|
                string = "LOWER(city) LIKE '%#{string.downcase}%'" + (" OR ") + ("LOWER(state) LIKE '%#{string.downcase}%'")
            end.join(" OR ")
            
            @locationBusinesses = Business.where('(' + locationString + ')')

            queryString = query.split(' ').map do |string|
                name = name.gsub("'", "''")
                debugger
                string = "LOWER(#{name}) LIKE '%#{string.downcase}%'"
            end.join(" OR ")

            if allBusinesses == "true"
                
                @businesses = Business.where('(' + queryString + ')')
            else
                @businesses = Business.where('(' + queryString + ')').limit(6)
            end
            
            if @businesses.empty?
                @businesses = [];
                # render json: @searches.errors.full_messages, status: 422
                
                render 'api/businesses/index'
            else
                render 'api/businesses/index'
            end
        end
    end

    

    def business_start
        # counter = (1...Business.count).to_a.sort_by{rand}[0...Business.count]
        # bus1 = counter.first
        # bus2 = counter.second
        # bus3 = counter.third


        @businesses = Business.find(1, 2, 3)
        render '/api/businesses/index'
    end
end
