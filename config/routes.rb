Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :entries do
    resources :tasks
  end
  resources :tasks
  resources :labels

end
