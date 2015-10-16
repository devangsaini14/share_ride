class Ride < ActiveRecord::Base
  attr_accessible :contact, :date, :destination, :destination_latitude, :destination_longitude, :email, :price, :seats, :source, :source_latitude, :source_longitude
end
