class Room < ActiveRecord::Base
  has_many :items
end