class Review < ApplicationRecord
    validates :content, :author_id, :business_id, :rating, presence: true

    belongs_to :business
    belongs_to :user
end