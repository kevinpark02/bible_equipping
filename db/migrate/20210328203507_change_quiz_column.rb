class ChangeQuizColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :quizzes, :submitted
    add_column :quizzes, :submitted, :boolean, default: false, null: false
  end
end
