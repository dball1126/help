class Api::BusinessCategoriesController < ApplicationController
    def new
        @business_category = BusinessCategory.new
    end

    def show
        @business_category = BusinessCategory.find(params[:id])
    end

    def create
        @business_category = BusinessCategory.create(business_category_params)
    end

    def index
        @business_categories = BusinessCategory.all
    end

    def find_matches
        
    end

    private

    def business_category_params
        params.require(:business_category).permit(:category_id, :business_id)
    end
end