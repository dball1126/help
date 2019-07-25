class Category < ApplicationRecord
    validates :name, presence: true
    
    has_many :business_categories

    has_many :businesses,
    through: :business_categories,
    source: :business

end