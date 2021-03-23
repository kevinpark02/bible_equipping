class CreateVerses < ActiveRecord::Migration[5.2]
  def change
    create_table :verses do |t|
      t.string :verse, null: false
      t.integer :chapter, null: false
      t.integer :quiz_id, null: false
      t.timestamps
    end
    add_index :verses, :quiz_id
  end
end
