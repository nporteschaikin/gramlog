class BlogsController < ApplicationController
	
	def index
		
	end
	
	def show
		@blog = Blog.find(params[:id])
	end
	
	def new
		@blog = Blog.new(params[:blog])
		respond_to do |f|
			f.js { render layout: false }
			f.html
		end
	end
	
	def create
		@blog = Blog.create(blog_params)
		respond_to do |f|
			f.js { render layout: false }
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
	
	private
	
		def blog_params
			params.require(:blog).permit(:name, :slug)
		end
		
end