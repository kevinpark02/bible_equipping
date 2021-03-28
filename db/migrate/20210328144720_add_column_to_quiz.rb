class AddColumnToQuiz < ActiveRecord::Migration[5.2]
  def change
    add_column :quizzes, :submitted, :boolean, default: false
  end
end
