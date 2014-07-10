class Item < ActiveRecord::Base
  belongs_to :doll
  belongs_to :room
end
