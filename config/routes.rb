Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      get 'article' => "article#index"
      get 'article/:id' => "article#show"
    end
  end
  
  root 'home#index'
  
end
