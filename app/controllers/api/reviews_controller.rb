class Api::ReviewsController < ApplicationController

    def index
        @review = Review.all
        render :index
    end

    def show
        @review = Review.find(params[:id])
    end

    def new
        @review = Review.new
    end

    def create
        @review = Review.create(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update_attributes(review_params)
            render json: show
        else
            render json: @review.errors.full_messages
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
        params.require(:review).permit(:content, images: [])
    end
end