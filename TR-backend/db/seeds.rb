# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

movie = Category.create(:name => "Movies")

Question.create(:category_id => 1, 
    :trivia => "The Xenomorph from the sci-fi film 'Alien' has acidic blood.",
    :answer_a => "True", :answer_b => "False", :correct_answer => "True")

Question.create(:category_id => 1,
    :trivia => "Leonardo DiCaprio won an Oscar for Best Actor in The Aviator.",
    :answer_a => "True", :answer_b => "False", :correct_answer => "False")

Question.create(:category_id => 1,
    :trivia => "'Cube','Cube2: Hypercube', and 'Cube Zero' were directed by the same person.",
    :answer_a => "True", :answer_b => "False", :correct_answer => "False")