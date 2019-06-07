# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
Business.destroy_all
User.destroy_all
Review.destroy_all

user1 = User.create(email: 'demo@demo.com', password: 'demouser', first_name: "demo", last_name: "demo", zip_code: 11215)
user2 = User.create(email: 'demo2@demo.com', password: 'demouser2', first_name: "demo", last_name: "demo", zip_code: 11215)
user3 = User.create(email: 'demo3@demo.com', password: 'demouser3', first_name: "demo", last_name: "demo", zip_code: 11215)


business1 = Business.create(name: "Katz's Delicatessen", state: "NY", city: "New York", zipcode: 10002, address: "205 E Houston St", phone_number: "(212)254-2246", website: "www.katzsdelicatessen.com", latitude: "40.722345", longitude: "-73.9873614")
business2 = Business.create(name: "Roll N Roaster", state: "NY", city: "Brooklyn", zipcode: 11235, address: "2901 Emmons Ave", phone_number: "(718)502-9282", website: "www.rollnroaster.com", latitude: "40.752789", longitude: "-73.987862")
business3 = Business.create(name: "L & B Spumoni Gardens", state: "NY", city: "Brooklyn", zipcode: 11223, address: "2725 86th St", phone_number: "(718)449-1230", website: "www.spumonigardens.com", latitude: "40.594710", longitude: "-73.981340")




# business3.images.attach(io: File.open('./app/assets/images/spumoni1.jpg'), filename: 'spumoni1.jpg')
# business3.images.attach(io: File.open('./app/assets/images/spumoni2.jpg'), filename: 'spumoni2.jpg')
# business3.images.attach(io: File.open('./app/assets/images/spumoni3.jpg'), filename: 'spumoni3.jpg')
file1 = open('https://yap-dev.s3.amazonaws.com/spumoni1.jpg')
business3.images.attach(io: file1, filename: 'spumoni3.jpg')
file2 = open('https://yap-dev.s3.amazonaws.com/spumoni2.jpg')
business3.images.attach(io: file2, filename: 'spumoni3.jpg')
file3 = open('https://yap-dev.s3.amazonaws.com/spumoni3.jpg')
business3.images.attach(io: file3, filename: 'spumoni3.jpg')


file4 = open('https://yap-dev.s3.amazonaws.com/roll1.JPG')
business2.images.attach(io: file4, filename: 'roll1.jpg')
file5 = open('https://yap-dev.s3.amazonaws.com/roll2.jpeg')
business2.images.attach(io: file5, filename: 'roll2.jpg')
file6 = open('https://yap-dev.s3.amazonaws.com/roll3.jpeg')
business2.images.attach(io: file6, filename: 'roll3.jpg')


file7 = open('https://yap-dev.s3.amazonaws.com/katz1.jpg')
business1.images.attach(io: file7, filename: 'katz1.jpg')
file8 = open('https://yap-dev.s3.amazonaws.com/katz2.jpg')
business1.images.attach(io: file8, filename: 'katz2.jpg')
file9 = open('https://yap-dev.s3.amazonaws.com/katz3.jpg')
business1.images.attach(io: file9, filename: 'katz3.jpg')


