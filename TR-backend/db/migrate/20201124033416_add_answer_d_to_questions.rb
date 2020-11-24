class AddAnswerDToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :answer_d, :string
  end
end
