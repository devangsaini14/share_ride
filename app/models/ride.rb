class Ride < ActiveRecord::Base
  validates :destination, :source, :price, :seats, :presence => true
  validates :email, :format => { :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i}
  validates :price, :seats, :numericality => true
  # validates_format_of :destination, :source, :with => /^([^\d\W]|[-])*$/
  validate :expiration_date_cannot_be_in_the_past
  belongs_to :user
  scope :source, lambda {|source|  where("source like ?", "%#{source}%")}
  scope :destination, lambda {|destination|  where("destination like ?", "%#{destination}%")}
  scope :seats, lambda { |seats| where(:seats => seats) }

  def self.search(search)
    @rides = Ride.where('date >= ?', DateTime.now)
    @rides = @rides.source(search['source']) if search['source'].present?
    @rides = @rides.destination(search['destination']) if search['destination'].present?
    @rides = @rides.seats(search['seats']) if search['seats'].present?
    return @rides
  end
  
  def expiration_date_cannot_be_in_the_past
    errors.add(:date, "can't be in the past") if self.date < Date.today
  end
end
