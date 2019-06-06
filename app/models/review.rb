class Review < ApplicationRecord
    validates :content, :rating, presence: true

    belongs_to :business
    
    belongs_to :author,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end