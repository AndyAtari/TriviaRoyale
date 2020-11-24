class RemoveanswersFromQuestions < ActiveRecord::Migration[6.0]
  def change
    remove_column :questions, :answers, :string
  end
end
