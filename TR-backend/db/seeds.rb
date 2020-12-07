# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# movie = Category.create(:name => "Movies")

# Question.create(:category_id => 1, 
#     :trivia => "The Xenomorph from the sci-fi film 'Alien' has acidic blood.",
#     :answer_a => "True", :answer_b => "False", :correct_answer => "True")

# Question.create(:category_id => 1,
#     :trivia => "Leonardo DiCaprio won an Oscar for Best Actor in The Aviator.",
#     :answer_a => "True", :answer_b => "False", :correct_answer => "False")

# Question.create(:category_id => 1,
#     :trivia => "'Cube','Cube2: Hypercube', and 'Cube Zero' were directed by the same person.",
#     :answer_a => "True", :answer_b => "False", :correct_answer => "False")

Question.create(:category_id => 1,
    :trivia => "The film Mad Max: Fury Road features the Dies Irae from which composer's requiem?",
    :answer_a => "Mozart", :answer_b => "Verdi", :correct_answer => "Verdi")

    Question.create(:category_id => 1,
        :trivia => "In 'Big Hero Six', what were Baymax's motions modeled after?",
        :answer_a => "Baby Penguins", :answer_b => "Baby Monkeys", :correct_answer => "Baby Penguins")

        Question.create(:category_id => 1,
            :trivia => "Which actress portrayed Dr.Grace Augustine in the James Cameron movie 'Avatar'?",
            :answer_a => "Sigourney Weaver", :answer_b => "Jessica Chastain", :correct_answer => "Sigourney Weaver")

            Question.create(:category_id => 1,
                :trivia => "Which actors made up the trio in 'The Good, the Bad, and the Ugly'?",
                :answer_a => "Yul Brynner, Steve McQueen, and Charles Bronson", :answer_b => "Clint Eastwood, Eli Wallach, and Lee Van Cleef", :correct_answer => "Clint Eastwood, Eli Wallach, and Lee Van Cleef")



# Category.create(:name => "Battle Royale")

# Question.create(:category_id => 2, 
#     :trivia => "You can play as Marvel's Wolverine in Fortnite.",
#     :answer_a => "True", :answer_b => "False", :correct_answer => "True")

#     Question.create(:category_id => 2, 
#         :trivia => "Battlefield 5 offered a BR mode.",
#         :answer_a => "True", :answer_b => "False", :correct_answer => "True")   

#         Question.create(:category_id => 2, 
#             :trivia => "When you respawn in Warzone, the 1v1 duel area is called:",
#             :answer_a => "Gulag", :answer_b => "Nuke Park", :correct_answer => "Gulag")

#             Question.create(:category_id => 2, 
#                 :trivia => "PlayerUnknown's Battlgrounds __ was the first playable map.",
#                 :answer_a => "Vikendi", :answer_b => "Erangel", :correct_answer => "Erangel")

#                 Question.create(:category_id => 2, 
#                     :trivia => "In the movie 'Battle Royale (2000)', none of the cast had any stunt doubles except for the lead, Tatsuya Fujiwara.",
#                     :answer_a => "True", :answer_b => "False", :correct_answer => "False")

#                     Question.create(:category_id => 2, 
#                         :trivia => "Hunger Games was written by:",
#                         :answer_a => "Veronica Roth", :answer_b => "Suzanne Collins", :correct_answer => "Suzanne Collins")

Category.create(:name => "Video Games")

Question.create(:category_id => 3,
    :trivia => "How many copies of the notorious E.T. game for the Atari 2600 did Atari end up selling?",
    :answer_a => "250,000", :answer_b => "1.5 Million", :correct_answer => "1.5 Million")