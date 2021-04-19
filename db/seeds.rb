# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Quiz.delete_all
Verse.delete_all
Collection.delete_all

# User seed
    u1 = User.create(email: "kevin.park02@gmail.com", username: "kpark02", password: "test1234")
    
# Quiz Seed
    # q1 = Quiz.create(book: "Acts", user_id: u1.id)
    # q2 = Quiz.create(book: "Romans", user_id: u1.id)
    # q3 = Quiz.create(book: "1 Corinthians", user_id: u1.id)
    # q4 = Quiz.create(book: "2 Corinthians", user_id: u1.id)

# Verse Seed
    # v1 = Verse.create(verse: "verse 1", chapter: 1, quiz_id: q1.id)
    # v2 = Verse.create(verse: "verse 2", chapter: 2, quiz_id: q1.id)
    # v3 = Verse.create(verse: "verse 3", chapter: 3, quiz_id: q2.id)
    # v4 = Verse.create(verse: "verse 4", chapter: 4, quiz_id: q2.id)
    # v5 = Verse.create(verse: "verse 5", chapter: 5, quiz_id: q3.id)
    # v6 = Verse.create(verse: "verse 6", chapter: 6, quiz_id: q3.id)
    # v7 = Verse.create(verse: "verse 7", chapter: 7, quiz_id: q4.id)
    # v8 = Verse.create(verse: "verse 8", chapter: 8, quiz_id: q4.id)
