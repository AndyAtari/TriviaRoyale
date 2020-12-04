Rails.application.routes.draw do
  resources :high_scores
  resources :questions

  resources :categories do 
    resources :questions 
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
