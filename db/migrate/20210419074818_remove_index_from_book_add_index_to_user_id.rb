class RemoveIndexFromBookAddIndexToUserId < ActiveRecord::Migration[5.2]
  def change
    remove_index :collections, :book
    add_index :collections, :user_id
  end
end
