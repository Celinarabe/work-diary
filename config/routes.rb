Rails.application.routes.draw do
  get 'page/new'
  get 'page/create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'page#index'
 

  resources :entries do
    resources :tasks
  end

  namespace :api do
    namespace :v1 do
      resources :entries do
        resources :tasks
      end 
    end
  end

end
