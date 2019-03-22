Rails.application.routes.draw do

  get "/api/products/newest" => "api/products#index_by_newest"
  get "/api/departments/:department_id/products/newest" => "api/products#index_by_newest"

  get "/api/products/oldest" => "api/products#index_by_oldest"
  get "/api/departments/:department_id/products/oldest" => "api/products#index_by_oldest"

  get "/api/products/alphabetical" => "api/products#index_by_alphabetical"
  get "/api/departments/:department_id/products/alphabetical" => "api/products#index_by_alphabetical"

  get "/api/products/price_high" => "api/products#index_by_price_high"
  get "/api/departments/:department_id/products/price_high" => "api/products#index_by_price_high"
  
  get "/api/products/price_low" => "api/products#index_by_price_low"
  get "/api/departments/:department_id/products/price_low" => "api/products#index_by_price_low"
  
  get "/api/products/:id" => "api/products#show"

  namespace :api do
    resources :departments do
      resources :products, except: [:index, :show]
    end

    resources :products, only: [] do
      resources :reviews
    end
  end
end
