Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:show, :create]
    resources :quizzes, only: [:show, :create, :update]
    resources :verses, only: [:create, :update]
    resources :collections, only: [:show, :create]

    resource :session, only: [:create, :destroy]
  end
end
