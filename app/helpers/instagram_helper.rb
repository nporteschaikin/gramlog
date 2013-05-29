module InstagramHelper
	
	def image_instagram(gram)
		raw "<img src='?' />".gsub('?', gram['images']['standard_resolution']['url'])
	end
	
end