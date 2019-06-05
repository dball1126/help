class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
        t.string :content, null: false
        t.integer :author_id, null: false
        t.integer :business_id, null: false
        t.integer :rating, null: false

        t.timestamps
    end
      add_index :reviews, [:author_id, :business_id]

  end
end
