class Business < ApplicationRecord
    validates :name, :address, :city, :state, :zipcode,
    :phone_number, :website, :latitude, :longitude, presence: true

    has_many_attached :images
   

    has_many :reviews,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Review

    def average_rating
        
       if reviews.average(:rating) == nil
        
        return 0
       else
        
        return reviews.average(:rating).ceil
       end
    end

    def reviews_count
        reviews.count
    end
end