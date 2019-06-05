class Business < ApplicationRecord
    validates :name, :address, :city, :state, :zipcode,
    :phone_number, :website, :latitude, :longitude, presence: true

    has_many_attached :images

    has_many :reviews
end