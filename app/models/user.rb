class User < ActiveRecord::Base
	
	has_many :blogs
	has_many :posts, through: :blogs
	
	def self.authenticated(client)
		instagram = client.user()
		user = self.find_or_create_by(uid: instagram[:id])
		user.update_attributes(token: client.access_token, username: instagram[:username], name: instagram[:full_name], bio: instagram[:bio], picture: instagram[:profile_picture], website: instagram[:website])
		user
	end
	
end
