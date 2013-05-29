class SessionsController < ApplicationController
	
	require 'instagram'
	
	def new
		puts sessions_create_url
		redirect_to Instagram.authorize_url(:redirect_uri => sessions_create_url)
	end
	
	def create
		response = Instagram.get_access_token(params[:code], :redirect_uri => sessions_create_url)
		session[:access_token] = response.access_token
		sign_in_and_redirect
	end
	
end