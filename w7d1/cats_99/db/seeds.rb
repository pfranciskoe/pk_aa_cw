# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#   create_table "cats", force: :cascade do |t|
#     t.date "birth_date", null: false
#     t.string "color"
#     t.string "name", null: false
#     t.string "sex", limit: 1, null: false
#     t.text "description"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#   end

Cat.create(birth_date: '2015/01/20', color: 'brown', name: 'Kitty', sex: 'F', description: 'Its a cat!')
Cat.create(birth_date: '2018/04/12', color: 'white', name: 'Fluffy', sex: 'M', description: 'Its not a cat!')
Cat.create(birth_date: '2009/10/08', color: 'black', name: 'Smol', sex: 'F', description: 'Its really is a cat!')