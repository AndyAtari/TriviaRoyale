class RemoveTypeFromQuestions < ActiveRecord::Migration[6.0]
  def change
    remove_column :questions, :type, :string
  end
end
