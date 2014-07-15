class AddFileNameToDolls < ActiveRecord::Migration
  def change
    add_column :dolls, :file_name, :string
  end
end
