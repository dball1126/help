class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zipcode, null: false
      t.string :phone_number, null: false
      t.string :website, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false

      t.timestamps
    end
    add_index :businesses, :name, unique: true
    add_index :businesses, [:latitude, :longitude]
  end
end
