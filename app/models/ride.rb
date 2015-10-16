class Ride < ActiveRecord::Base
  attr_accessible :contact, :date, :destination, :destination_latitude, :destination_longitude, :email, :price, :seats, :source, :source_latitude, :source_longitude

  scope :source, lambda {|source|  where("source like ?", "%#{source}%")}
  scope :destination, lambda {|destination|  where("destination like ?", "%#{destination}%")}
  scope :seats, lambda { |seats| where(:seats => seats) }

  def self.search(search)
    @rides = Ride.source(search['source']) if search['source'].present?
    @rides = @rides.destination(search['destination']) if search['destination'].present?
    @rides = @rides.seats(search['seats']) if search['seats'].present?
    return @rides
  end
  
end
