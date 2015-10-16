class RidesController < ApplicationController
  before_filter :set_ride, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @rides = Ride.all
    respond_with(@rides)
  end

  def show
    respond_with(@ride)
  end

  def new
    @ride = Ride.new
    respond_with(@ride)
  end

  def edit
  end

  def create
    @ride = Ride.new(params[:ride])
    @ride.save
    respond_with(@ride)
  end

  def update
    @ride.update_attributes(params[:ride])
    respond_with(@ride)
  end

  def destroy
    @ride.destroy
    respond_with(@ride)
  end

  def find_rides
    if params[:search].present?
      @rides = Ride.search(params[:search])
      @search = true
      render :index
    end    
  end

  private
    def set_ride
      @ride = Ride.find(params[:id])
      @search = false
    end
end
