class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.string :color
      t.string :itemType
      t.integer :xPos
      t.integer :yPos
      t.references :doll
      t.references :room
    end
  end
end
