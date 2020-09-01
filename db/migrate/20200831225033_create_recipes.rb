class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name, limit: 100, null: false
      t.text :ingredients, null: false
      t.text :instructions, null: false
      t.string :image_url, limit: 200

      t.timestamps
    end
  end
end
