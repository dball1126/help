Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

    namespace :api, defaults: {format: 'json'} do
      resources :users, only: [:new, :create, :show]
      resources :reviews
      post 'businesses/search', to: 'searches#business_search'
      get 'businesses/live_search', to: 'searches#live_search'
      get 'businesses/start', to: 'searches#business_start'
      get 'categories/search', to: 'searches#category_search' 
      resources :businesses, only: [:index, :show, :create, :destroy]
      resource :session, only: [:new, :create, :destroy]
      resources :categories, only: [:new, :create, :show, :index]
      resources :business_categories, only: [:new, :create, :show, :index]
    end
end
