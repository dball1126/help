class Api::SearchesController < ApplicationController

    def business_search
        query = params[:query][:query]
        queryString = query.split(" ").map do |string|
            string = "LOWER(name) LIKE '%#{string.downcase}%'"
        end
    end
end