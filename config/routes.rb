Rails.application.routes.draw do

  namespace :api do
    resources :departments do
      resources :products
    end

    resources :products, only: [] do
      resources :reviews
    end
  end
end
