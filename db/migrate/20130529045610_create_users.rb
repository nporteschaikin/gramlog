class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :uid
      t.string :token
      t.string :username
      t.string :name
      t.string :website
      t.string :picture
      t.string :bio

      t.timestamps
    end
  end
end
