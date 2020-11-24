class AddAnswerCToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :answer_c, :string
  end
end
