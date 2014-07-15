class AddFileNameToItems < ActiveRecord::Migration
  def change
    add_column :items, :file_name, :string
  end
end
