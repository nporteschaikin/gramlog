class CreateGrams < ActiveRecord::Migration
  def change
    create_table :grams do |t|
      t.references :post, index: true
      t.integer :gid

      t.timestamps
    end
  end
end
