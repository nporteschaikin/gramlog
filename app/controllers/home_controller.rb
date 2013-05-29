class HomeController < ApplicationController
	
	before_filter :signed_in_user, only: :feed
	
	def index
		if signed_in?
			@feed = current_client.user_media_feed
			@popular = current_client.media_popular(count: 16)
			render 'feed'
		end
	end
	
end