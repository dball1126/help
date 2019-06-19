class Review < ApplicationRecord
    validates :content, :rating, presence: true

    has_one_attached :image

     before_save :grab_image

    def grab_image
        return image.service_url
    end
    
    belongs_to :business,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Business
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
end