class CreateApiReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.belongs_to :product, foreign_key: true
      t.integer :rating
      t.string :text

      t.timestamps
    end
  end
end
