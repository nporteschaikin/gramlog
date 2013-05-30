class Geocode < ActiveRecord::Base
	
	geocoded_by :address
	before_validation :geocode
	validates :address, uniqueness: { case_sensitive: false }
	validates :latitude, presence: true
	validates :longitude, presence: true
	
end
