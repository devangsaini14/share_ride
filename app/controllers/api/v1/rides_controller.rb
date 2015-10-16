class Api::V1::RidesController < ApplicationController
  before_filter :set_ride, only: [:show, :update, :destroy]

  def index
    @rides = Ride.all
    render json: @rides
  end

  def show
    render json: @ride
  end

  def create
    @ride = Ride.new(params[:ride])

    if @ride.save
      render json: @ride, status: :created, location: @ride
    else
      render json: @ride.errors, status: :unprocessable_entity
    end
  end

  def update
    
    if @ride.update(params[:ride])
      head :no_content
    else
      render json: @ride.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @ride.destroy
    head :no_content
  end

  # # def filter_fields
  # # 	@filter_values = {}
  # #   @filter_values[:request_category_id] = params[:category_id]
  # #   @filter_values[:filters] = HomeProperty.find_filter_values(params)
  # #   @filter_values[:home_types] = HomeType.all
  # #   @filter_values[:builderslist] = builder_data
  # #   render json: @filter_values
  # # end

  # def builder_data
  #   @builders = {}
  #   @builders[:count] = Builder.all.count
  #   @builders[:items] = Builder.all
  #   @builders
  # end

  private

    def set_ride
      @ride = Ride.find(params[:id])
    end

    # def ride_params
    #   params.require(:ride).permit(:source :source_latitude :source_longitude :destination :destination_latitude :destination_longitude :price :date :seats :contact :email)
    # end
end