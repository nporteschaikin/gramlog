class HomeController < ApplicationController
	
	before_filter :signed_in_user, only: :feed
	
	def index
		if signed_in?
			@feed = current_client.user_media_feed
			render 'feed'
		end
	end
	
end