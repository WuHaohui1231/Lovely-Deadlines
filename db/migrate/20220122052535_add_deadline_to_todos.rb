class AddDeadlineToTodos < ActiveRecord::Migration[6.1]
  def change
    add_column :todos, :deadline, :string
  end
end
