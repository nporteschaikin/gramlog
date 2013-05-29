class HomeController < ApplicationController
	
	def index
		#puts Instagram.user()
		puts session[:access_token]
	end
	
end