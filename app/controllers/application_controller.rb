class ApplicationController < ActionController::Base
    helper_method: 

    def login!(user)
    end

    def logout!
    end

    def ensure_logged_in?
        redirect_to 
    end

    def current_user
    end

    def logged_in?
        !!current_user
    end
end
