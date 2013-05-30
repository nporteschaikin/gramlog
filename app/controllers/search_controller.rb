class SearchController < ApplicationController
	
	def person
		@user = current_client.user_search(params[:search][:q]).first
		@media = current_client.user_recent_media(Integer(@user['id']), count: 16)
		
		respond_to do |f|
			f.js { render layout: false }
		end
	end
	
	def tag
		@tag = params[:search][:q]
		@media = current_client.tag_recent_media(@tag, min: 16)
		
		respond_to do |f|
			f.js { render layout: false }
		end
	end
	
	def place
		@place = Geocode.find_or_create_by(address: params[:search][:q])
		@media = current_client.media_search(@place.latitude.to_s, @place.longitude.to_s, count: 16)
		
		respond_to do |f|
			f.js { render layout: false }
		end
	end
	
end