class Api::V1::RidesController < BaseApiController
  before_filter :set_ride, only: [:show, :update, :destroy]

  def index
    @rides = Ride.all
    render json: @rides
  end

  def show
    render json: @ride
  end

  def create
    @ride = Ride.new
    @ride.assign_attributes(@json['ride'])
    if @ride.save
      render nothing: true, status: 200
    else
      render nothing: true, status: :bad_request
    end
  end

  def update
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

end