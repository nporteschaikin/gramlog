module Sessions
	
	extend ActiveSupport::Concern
	
	def sign_in
		instagram = Instagram.client(access_token: session[:access_token])
		u = instagram.user()
		puts u
		user = User.find_or_create_by(uid: user[:id], bio: user[:bio], name: user[:full_name], picture: user[:profile_picture])
		user.update_attributes(token: session[:access_token])
		self.current_user = user
	end
	
	def sign_in_and_redirect
		sign_in
		redirect_to(session[:return_to] || default)
    session.delete(:return_to)
	end
	
	def current_user
		@current_user ||= User.find_by_token(session[:access_token])
	end
	
end