class Post < ActiveRecord::Base
  
	belongs_to :blog
	has_many :grams
	
end
