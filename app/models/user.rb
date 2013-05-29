class User < ActiveRecord::Base
	
	def self.authenticated(token)
		instagram = Instagram.client(access_token: token).user()
		user = User.find_or_create_by(uid: instagram[:id])
		user.update_attributes(token: token, username: instagram[:username], name: instagram[:full_name], bio: instagram[:bio], picture: instagram[:profile_picture], website: instagram[:website])
		user
	end
	
end
