Gramlog::Application.routes.draw do
  
	root to: 'home#index'
	get '/in', to: "sessions#new"
	get '/oauth', to: 'sessions#create', as: "sessions_create"
	get '/feed', to: 'home#feed', as: "home"
	
	post '/search/person/', to: "search#person", as: "search_person"
	post '/search/tag/', to: "search#tag", as: "search_tag"
	post '/search/place/', to: "search#place", as: "search_place"
	
	resources :blogs do
		resources :posts
	end

end
