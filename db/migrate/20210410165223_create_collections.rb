class CreateCollections < ActiveRecord::Migration[5.2]
  def change
    create_table :collections do |t|
      t.string :book, null: false
      t.timestamps
    end
    add_index :collections, :book, unique: true
  end
end
