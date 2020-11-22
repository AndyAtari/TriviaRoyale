# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

movie = Category.create(:name => "Movies")

question_1 = Question.create(:category_id => 1, :difficulty => "medium", 
    :trivia => "The Xenomorph from the sci-fi film 'Alien' has acidic blood.",
    :answers => "False", :correct_answer => "True")
