class PostsController < ApplicationController
	
	def new
		@feed = current_client.user_media_feed
		@popular = current_client.media_popular(count: 16)
	end
	
end