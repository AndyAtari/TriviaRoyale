class AddAnswerBToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :answer_b, :string
  end
end
