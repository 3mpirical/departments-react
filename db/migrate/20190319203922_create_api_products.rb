class CreateApiProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.belongs_to :department, foreign_key: true
      t.string :name
      t.float :price
      t.text :description
      t.string :picture

      t.timestamps
    end
  end
end
