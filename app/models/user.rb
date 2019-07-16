class User < ApplicationRecord
    require 'open-uri'
    validates :email, :password_digest, :session_token, :first_name, :last_name, presence: true
    validates :password, length:{minimum: 8}, allow_nil: true
    validates :zip_code, length:{minimum: 5}

    attr_reader :password
    has_one_attached :image
    
    has_many :reviews,
        primary_key: :id, 
        foreign_key: :author_id,
        class_name: :Review

    before_save :profile_image_check

    after_initialize :ensure_session_token

    def photo_count
        count = 0;
        reviews.each do |review|
            count += 1 if review.image.attached?
        end
        count
    end

    def profile_image_check 
        
        if !image.attached?
            file1 = open('https://yap-dev.s3.amazonaws.com/profile_placeholder.jpg');
            image.attach(io: file1, filename: 'profile_placeholder.jpg')
        end
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            return user
        else
            return nil
        end
    end

    def is_password?(password)
        new_password = BCrypt::Password.new(self.password_digest)
        new_password.is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end
end