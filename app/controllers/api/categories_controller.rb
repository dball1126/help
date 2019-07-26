class Api::CategoriesController < ApplicationController

    def new
        @category = Category.new
    end

    def index
        @categories = Category.all
    end
    
    def create
        @category = Category.create(category_params)
        render :show
    end
    
    def show
        @category = Category.find(params[:id])
        render :show
    end

    private

    def category_params
        params.require(:category).permit(:name)
    end
end