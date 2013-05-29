module SessionsHelper
	
	def sign_in(token)
		self.current_client = Instagram.client(access_token: token)
		user = User.authenticated(self.current_client)
		self.current_user = user
	end
	
	def sign_in_and_redirect(token, default)
		sign_in token
		redirect_to(session[:return_to] || default)
    session.delete(:return_to)
	end
	
	def signed_in?
		!current_user.nil?
	end

	def current_user
		@current_user ||= User.find_by_token(session[:access_token])
	end
	
	def current_client
		@current_client ||= Instagram.client(access_token: session[:access_token])
	end
	
	def current_user=(user)
		@current_user = user
	end
	
	def current_client=(client)
		@current_client = client
	end
	
	def store_location
		session[:return_to] = request.url
	end
	
	def signed_in_user
		unless signed_in?
			store_location
			redirect_to in_url
		end
	end
	
	def sign_out
		self.current_user = nil
		session.delete(:access_token)
	end

end