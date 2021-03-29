class AddAnswerToVerse < ActiveRecord::Migration[5.2]
  def change
    add_column :verses, :answer, :integer
  end
end
