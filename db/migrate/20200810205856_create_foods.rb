class CreateFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :foods do |t|
      t.string :name
      t.string :quantity
      t.references :recipe, null: false, foreign_key: true

      t.timestamps
    end
  end
end
