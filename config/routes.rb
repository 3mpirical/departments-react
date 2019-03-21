Rails.application.routes.draw do

  get "/api/products" => "api/products#index"
  get "/api/products/:id" => "api/products#show"
  get "/api/departments/:department_id/products" => "api/products#index_by_department"

  namespace :api do
    resources :departments do
      resources :products, except: [:index, :show]
    end

    resources :products, only: [] do
      resources :reviews
    end
  end
end
