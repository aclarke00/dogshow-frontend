Rails.application.routes.draw do
  # resources :dogs
  post "/login", to: 'users#login'
  resources :users, only: [:show, :create]
  resources :dogs, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
