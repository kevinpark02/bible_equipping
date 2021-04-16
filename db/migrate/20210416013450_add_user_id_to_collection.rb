class AddUserIdToCollection < ActiveRecord::Migration[5.2]
  def change
    add_column :collections, :user_id, :integer, null: false
  end
end
