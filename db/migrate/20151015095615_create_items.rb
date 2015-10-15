class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.text :description
      t.decimal :price, :precision => 5, :scale => 2
      t.belongs_to :user

      t.timestamps
    end
    add_index :items, :user_id
  end
end
