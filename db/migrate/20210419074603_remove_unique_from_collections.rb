class RemoveUniqueFromCollections < ActiveRecord::Migration[5.2]
  def change
      remove_index :collections, :book
      add_index :collections, :book
  end
end
