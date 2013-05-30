class BlogsController < ApplicationController
	
	def index
		
	end
	
	def show
		@blog = Blog.find(params[:id])
	end
	
	def new
		@blog = Blog.new(params[:blog])
		respond_to do |f|
			f.js { render 'blog/new', layout: false }
			f.html
		end
	end
	
	def create
		@blog = Blog.create(params[:blog])
		respond_to do |f|
			f.js { render 'blog/new', layout: false }
			f.html
		end
	end
	
	def edit
		@blog = Blog.new(params[:blog])
	end
	
	def update
		@blog = Blog.find(params[:id])
		@blog.update_attributes(params[:blog])
	end
	
	def destroy
		@blog = Blog.find(params[:id])
		@blog.destroy
	end
	
end