class Api::BusinessesController < ApplicationController
    
    def new
        @business = Business.new
    end

    def index
        @businesses = Business.all
        render :index
    end

    def create
        @business = Business.create(business_params)
        render :show
    end

    def show
        
        @business = Business.find(params[:id])
        
        render :show
    end

    
    def business_params
        params.require(:business).permit(:name, :address, :city, :state, :zipcode,
        :phone_number, :website, :latitude, :longitude)
    end
end
