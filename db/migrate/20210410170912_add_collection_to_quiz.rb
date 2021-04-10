class AddCollectionToQuiz < ActiveRecord::Migration[5.2]
  def change
    add_column :quizzes, :collection_id, :integer, null: false
    add_index :quizzes, :collection_id
  end
end
