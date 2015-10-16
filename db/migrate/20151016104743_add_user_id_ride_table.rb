class AddUserIdRideTable < ActiveRecord::Migration
  def up
    add_column:rides, :user_id, :integer
  end

  def down
    add_column:rides, :user_id
  end
end
