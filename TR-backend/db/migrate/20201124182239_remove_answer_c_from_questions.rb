class RemoveAnswerCFromQuestions < ActiveRecord::Migration[6.0]
  def change
    remove_column :questions, :answer_c, :string
  end
end
