class AddTimeStampsToUsers < ActiveRecord::Migration[5.2]
  def change
  
  add_timestamps :users, null: true 

  
  long_ago = DateTime.new(2000, 1, 1)
  User.update_all(created_at: long_ago, updated_at: long_ago)

  # change not null constraints
  change_column_null :users, :created_at, false
  change_column_null :users, :updated_at, false
end
end
