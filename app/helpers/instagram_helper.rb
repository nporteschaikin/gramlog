module InstagramHelper
	
	def instagram_image(gram)
		raw "<img src='?' />".gsub('?', gram['images']['standard_resolution']['url'])
	end
	
	def instagram_user_link(gram)
		link_to "@" + instagram_user(gram), "http://www.instagram.com/" + instagram_user(gram)
	end
	
	def instagram_user(gram)
		gram["user"]["username"]
	end
	
end