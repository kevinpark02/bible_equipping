class CreateQuizzes < ActiveRecord::Migration[5.2]
  def change
    create_table :quizzes do |t|
      t.string :book, null: false
      t.integer :score
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :quizzes, :user_id
  end
end
