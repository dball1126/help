class Business < ApplicationRecord
    validates :name, :address, :city, :state, :zipcode,
    :phone_number, :website, :latitude, :longitude, presence: true

end