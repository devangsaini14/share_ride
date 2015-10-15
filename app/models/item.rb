class Item < ActiveRecord::Base
  belongs_to :user
  attr_accessible :description, :name, :price, :user_id
end
