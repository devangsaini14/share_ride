class RolesController < ApplicationController
  before_filter :authenticate_user!
  before_filter :set_role, :only => [:show, :edit, :update, :destroy]
  load_and_authorize_resource

  respond_to :html

  def index
    @roles = Role.all
    respond_with(@roles)
  end

  def show
    if @role.users.length == 0
      @assosciated_users = "None"
    else
      @assosciated_users = @role.users.map(&:name).join(", ")
    end
    respond_with(@role)
  end

  def new
    @role = Role.new
    respond_with(@role)
  end

  def edit
  end

  def create
    @role = Role.new(params[:role])
    @role.save
    respond_with(@role)
  end

  def update
    @role.update_attributes(params[:role])
    respond_with(@role)
  end

  def destroy
    @role.destroy
    respond_with(@role)
  end

  private
    def set_role
      @role = Role.find(params[:id])
    end
end
