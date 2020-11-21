class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :type
      t.string :difficulty
      t.string :trivia
      t.string :answers
      t.string :correct_answer
      t.string :category_id

      t.timestamps
    end
  end
end
