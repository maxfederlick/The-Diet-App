Rails.application.routes.draw do
  resources :users do
  resources :recipes do
  resources :foods
  end
end

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  # I need to make this method in the recipes controller
  # put '/recipes/:recipe_id/foods/:id', to: 'recipes#add_food'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  
end