class CreateDolls < ActiveRecord::Migration
  def change
    create_table :dolls do |t|
      t.string :name
      t.string :color
      t.integer :xPos
      t.integer :yPos

      t.timestamps
    end
  end
end
