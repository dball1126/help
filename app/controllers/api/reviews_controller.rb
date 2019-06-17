class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all
        render :index
    end

    def show
        @review = Review.find(params[:id])
    end

    def new
        @review = Review.new
    end

    def create
        @review = Review.new(review_params)
        
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(user_id: params[:review][:user_id], business_id: params[:review][:business_id])
        if @review.update_attributes(review_params)
            render json: show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def edit
        @review = Review.find(params[:id])
    end

    def destroy
        @review = Review.find(params[:id])
        if @review.destroy 
            render json: {}
        end
    end

    def review_params
        params.require(:review).permit(:content, :author_id, :business_id, :rating)
    end
end