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
user4 = User.create(email: 'joeMone22233@email.com', password: 'password', first_name: "joe", last_name: "moet", zip_code: 11232)
user5 = User.create(email: 'charles9002233@email.com', password: 'password', first_name: "charles", last_name: "chingy", zip_code: 11212)
user6 = User.create(email: 'henry993123@email.com', password: 'password', first_name: "henry", last_name: "sunrise", zip_code: 11516)



business1 = Business.create(name: "Katz's Delicatessen", state: "NY", city: "New York", zipcode: 10002, address: "205 E Houston St", phone_number: "(212)254-2246", website: "www.katzsdelicatessen.com", latitude: "40.722345", longitude: "-73.9873614")
business2 = Business.create(name: "Roll N Roaster", state: "NY", city: "Brooklyn", zipcode: 11235, address: "2901 Emmons Ave", phone_number: "(718)502-9282", website: "www.rollnroaster.com", latitude: "40.5841462", longitude: "-73.9396418")
business3 = Business.create(name: "L & B Spumoni Gardens", state: "NY", city: "Brooklyn", zipcode: 11223, address: "2725 86th St", phone_number: "(718)449-1230", website: "www.spumonigardens.com", latitude: "40.594710", longitude: "-73.981340")
business4 = Business.create(name: "Julianas'S Pizza", state: "NY", city: "Brooklyn", zipcode: 11201, address: "19 Old Fulton St", phone_number: "(718)596-6700", website: "www.julianaspizza.com", latitude: "40.701553", longitude: "-73.992017")
business5 = Business.create(name: "Faith Chinese Food", state: "NY", city: "Brooklyn", zipcode: 11206, address: "170 Graham Ave", phone_number: "(718)599-2489", website: "www.faithsfoodbrooklyn.com", latitude: "40.707567", longitude: "-73.943018")
business6 = Business.create(name: "Shake Shack", state: "NY", city: "New York", zipcode: 10018, address: "1333 Broadway", phone_number: "(646)230-0696", website: "www.shakeshack.com", latitude: "40.751171", longitude: "-73.988129")
business7 = Business.create(name: "McDonald's", state: "NY", city: "New York", zipcode: 10022, address: "966 3rd Ave", phone_number: "(212)753-5360", website: "www.mcdonalds.com", latitude: "40.760850", longitude: "-73.967355")
business8 = Business.create(name: "Calexico", state: "NY", city: "Brooklyn", zipcode: 11215, address: "278 5th Ave", phone_number: "(347) 254-7644", website: "www.calexico.com", latitude: "40.674301", longitude: "-73.982407")
business9 = Business.create(name: "La Villa Pizzeria", state: "NY", city: "Brooklyn", zipcode: 11215, address: "261 5th Ave", phone_number: "(718) 499-9888", website: "www.lavillapizza.com", latitude: "40.674310", longitude: "-73.981630")
business10 = Business.create(name: "SUPERCOOLNYC", state: "NY", city: "Brooklyn", zipcode: 11209, address: "648 74th St", phone_number: "(929) 400-7665", website: "www.supercoolnyc.com", latitude: "40.627920", longitude: "-74.018860")
business11 = Business.create(name: "Chipotle Mexican Grill, Inc", state: "NY", city: "New York", zipcode: 10018, address: "28 W 4th Street", phone_number: "(212)302-0650", website: "www.chipotle.com", latitude: "40.658806899999995", longitude: "-73.978241")



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

file10 = open('https://yap-dev.s3.amazonaws.com/pizza1.jpg')
business4.images.attach(io: file10, filename: 'pizza1.jpg')
file11 = open('https://yap-dev.s3.amazonaws.com/pizza2.jpg')
business4.images.attach(io: file11, filename: 'pizza2.jpg')
file12 = open('https://yap-dev.s3.amazonaws.com/pizza3.jpg')
business4.images.attach(io: file12, filename: 'pizza3.jpg')

file13 = open('https://yap-dev.s3.amazonaws.com/chinese1.jpg')
business5.images.attach(io: file13, filename: 'chinese1.jpg')
file14 = open('https://yap-dev.s3.amazonaws.com/chinese2.jpg')
business5.images.attach(io: file14, filename: 'chinese2.jpg')
file15 = open('https://yap-dev.s3.amazonaws.com/chinese3.jpg')
business5.images.attach(io: file15, filename: 'chinese3.jpg')

file16 = open('https://yap-dev.s3.amazonaws.com/shack1.jpg')
business6.images.attach(io: file16, filename: 'shack1.jpg')
file17 = open('https://yap-dev.s3.amazonaws.com/shack2.jpg')
business6.images.attach(io: file17, filename: 'shack2.jpg')
file18 = open('https://yap-dev.s3.amazonaws.com/shack3.png')
business6.images.attach(io: file18, filename: 'shack3.png')

file19 = open('https://yap-dev.s3.amazonaws.com/mcdonalds1.jpg')
business7.images.attach(io: file19, filename: 'mcdonalds1.jpg')
file20 = open('https://yap-dev.s3.amazonaws.com/mcdonalds2.jpg')
business7.images.attach(io: file20, filename: 'mcdonalds2.jpg')
file21 = open('https://yap-dev.s3.amazonaws.com/mcdonalds3.jpg')
business7.images.attach(io: file21, filename: 'mcdonalds3.jpg')

file22 = open('https://yap-dev.s3.amazonaws.com/calexico1.jpg')
business8.images.attach(io: file22, filename: 'calexico1.jpg')
file23 = open('https://yap-dev.s3.amazonaws.com/calexico2.jpg')
business8.images.attach(io: file23, filename: 'calexico2.jpg')
file24 = open('https://yap-dev.s3.amazonaws.com/calexico3.jpeg')
business8.images.attach(io: file24, filename: 'calexico3.jpeg')

file25 = open('https://yap-dev.s3.amazonaws.com/lavilla1.jpg')
business9.images.attach(io: file25, filename: 'lavilla1.jpg')
file26 = open('https://yap-dev.s3.amazonaws.com/lavilla2.jpg')
business9.images.attach(io: file26, filename: 'lavilla2.jpg')
file27 = open('https://yap-dev.s3.amazonaws.com/lavilla3.jpg')
business9.images.attach(io: file27, filename: 'lavilla3.jpg')

file28 = open('https://yap-dev.s3.amazonaws.com/air1.jpg')
business10.images.attach(io: file28, filename: 'air1.jpg')
file29 = open('https://yap-dev.s3.amazonaws.com/air2.jpg')
business10.images.attach(io: file29, filename: 'air2.jpg')
file30 = open('https://yap-dev.s3.amazonaws.com/air3.jpeg')
business10.images.attach(io: file30, filename: 'air3.jpeg')

file31 = open('https://yap-dev.s3.amazonaws.com/chipotle1.jpg')
business11.images.attach(io: file31, filename: 'chipotle1.jpg')
file32 = open('https://yap-dev.s3.amazonaws.com/chipotle2.jpg')
business11.images.attach(io: file32, filename: 'chipotle2.jpg')
file33 = open('https://yap-dev.s3.amazonaws.com/chipotle3.jpg')
business11.images.attach(io: file33, filename: 'chipotle3.jpg')
#profile image url https://yap-dev.s3.amazonaws.com/profile_placeholder.jpg
# profile_placeholder.jpg     file name

review1 = Review.create(author_id: User.last.id, business_id: Business.last.id, content: "This place always pisses me off, and today was no different.  The lady rushes me and it just seems so rude.  It was a bad experience, and lately it's been like that the last two times i've been there", rating: 4)