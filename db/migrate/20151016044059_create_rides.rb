class CreateRides < ActiveRecord::Migration
  def change
    create_table :rides do |t|
      t.string :source
      t.float :source_latitude
      t.float :source_longitude
      t.string :destination
      t.float :destination_latitude
      t.float :destination_longitude
      t.float :price
      t.date :date
      t.integer :seats
      t.integer :contact
      t.string :email

      t.timestamps
    end
  end
end
