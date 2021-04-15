class RemoveNullFalseFromQuiz < ActiveRecord::Migration[5.2]
  def change
    remove_column :quizzes, :collection_id
  end
end
