class HomeController < ApplicationController
	
	before_filter :signed_in_user, only: :feed
	
	def index
		if signed_in?
			@blogs = current_user.blogs
			render 'dashboard'
		end
	end
	
end