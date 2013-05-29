Gramlog::Application.routes.draw do
  
	root to: 'home#index'
	get '/in', to: "sessions#new"
	get '/oauth', to: 'sessions#create', as: "sessions_create"
	get '/feed', to: 'home#feed', as: "home"

end
