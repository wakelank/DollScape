class AddFileNameToRooms < ActiveRecord::Migration
  def change
    add_column :rooms, :file_name, :string
  end
end
