class Api::V1::RidesController < ApplicationController
  before_action :set_ride, only: [:show, :update, :destroy]

  def index
    @rides = params[:search].present? ? Ride.search(params[:search]) : Ride.all
    render json: @rides
  end

  def show
    render json: @ride
  end

  def create
    @ride = Ride.new
    @json = JSON.parse(request.body.read)
    @ride.assign_attributes(@json['ride'])
    puts @ride.attributes
    if @ride.save
      render nothing: true, status: 200
    else
      render nothing: true, status: :bad_request
    end
  end

  def update
    @json = JSON.parse(request.body.read)
    @ride.assign_attributes(@json['ride'])
    if @ride.save
        render json: @ride, status: 200
    else
        render nothing: true, status: :bad_request
    end
  end

  def destroy
    @ride.destroy
    head :no_content
  end

  private

    def set_ride
      @ride = Ride.find(params[:id])
    end

    def ride_params
      params.require(:home_property).permit(:contact, :date, :destination, :destination_latitude, :destination_longitude, :email, :price, :seats, :source, :source_latitude, :source_longitude)
    end

end
