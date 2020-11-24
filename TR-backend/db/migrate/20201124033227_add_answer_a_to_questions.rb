class AddAnswerAToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :answer_a, :string
  end
end
