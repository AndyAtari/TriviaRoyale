class RemoveAnswerDFromQuestions < ActiveRecord::Migration[6.0]
  def change
    remove_column :questions, :answer_d, :string
  end
end
