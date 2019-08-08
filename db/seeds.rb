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
Category.destory_all

user1 = User.create(email: 'demo@demo.com', password: 'demouser', first_name: "demo", last_name: "demo", zip_code: 11215)
user2 = User.create(email: 'demo2@demo.com', password: 'demouser2', first_name: "demo", last_name: "demo", zip_code: 11215)
user3 = User.create(email: 'demo3@demo.com', password: 'demouser3', first_name: "demo", last_name: "demo", zip_code: 11215)
user4 = User.create(email: 'joeMone22233@email.com', password: 'password', first_name: "joe", last_name: "moet", zip_code: 11232)
user5 = User.create(email: 'charles9002233@email.com', password: 'password', first_name: "charles", last_name: "chingy", zip_code: 11212)
user6 = User.create(email: 'henry993123@email.com', password: 'password', first_name: "henry", last_name: "sunrise", zip_code: 11516)

#profile image url https://yap-dev.s3.amazonaws.com/profile_placeholder.jpg
# profile_placeholder.jpg     file name

# profile image

userfile1 = open('https://yap-dev.s3.amazonaws.com/userprofile1.jpg')
user1.image.attach(io: userfile1, filename: 'userprofile1.jpg')

userfile2 = open('https://yap-dev.s3.amazonaws.com/userprofile2.jpg')
user2.image.attach(io: userfile2, filename: 'userprofile2.jpg')

userfile3 = open('https://yap-dev.s3.amazonaws.com/userprofile3.jpg')
user3.image.attach(io: userfile3, filename: 'userprofile3.jpg')

userfile4 = open('https://yap-dev.s3.amazonaws.com/userprofile4.jpg')
user4.image.attach(io: userfile4, filename: 'userprofile4.jpg')

userfile5 = open('https://yap-dev.s3.amazonaws.com/userprofile5.jpg')
user5.image.attach(io: userfile5, filename: 'userprofile5.jpg')

userfile6 = open('https://yap-dev.s3.amazonaws.com/userprofile6.jpg')
user6.image.attach(io: userfile6, filename: 'userprofile6.jpg')


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
business12 = Business.create(name: "Red Hot II", state: "NY", city: "Brooklyn", zipcode: 11215, address: "349 7th Ave", phone_number: "(718)369-2577", website: "www.redhot.com", latitude: "40.6661369", longitude: "-73.9820222")
business13 = Business.create(name: "Peter Luger Steak House", state: "NY", city: "Brooklyn", zipcode: 11211, address: "178 Broadway", phone_number: "(718)387-7400", website: "www.peterluger.com", latitude: "40.7098661", longitude: "-73.9625564")

business14 = Business.create(name: "Park Slope Armory YMCA", state: "NY", city: "Brooklyn", zipcode: 11215, address: "361 15th st", phone_number: "(212)912-2580", website: "www.ymcanyc.org/parkslopearmory", latitude: "40.662750", longitude: "-73.983280")
business15 = Business.create(name: "Harbor Fitness", state: "NY", city: "Brooklyn", zipcode: 11215, address: "191 15th st", phone_number: "(718)965-6200", website: "www.harborfitness.com", latitude: "40.666000", longitude: "-73.989970")

business16 = Business.create(name: "Slope Wellness", state: "NY", city: "Brooklyn", zipcode: 11215, address: "816 8th Ave", phone_number: "(718)415-0738", website: "www.slopewellnessny.com", latitude: "40.666130", longitude: "-73.979290")
business17 = Business.create(name: "Prospect Garden Spa", state: "NY", city: "Brooklyn", zipcode: 11238, address: "351 Flatbush Ave", phone_number: "(718)230-0226", website: "www.summerdayspa.com", latitude: "40.677110", longitude: "-73.972070")

business18 = Business.create(name: "All Security Locksmiths", state: "NY", city: "Brooklyn", zipcode: 11215, address: "500 2nd St", phone_number: "(718)435-9055", website: "www.allsecurity.tv", latitude: "40.671150", longitude: "-73.978380")
business19 = Business.create(name: "Amazon Locksmith", state: "NY", city: "New York", zipcode: 10025, address: "2669 Broadway", phone_number: "(888)645-4536", website: "www.amazonlocksmithnyc.com", latitude: "40.798380", longitude: "-73.969540")

business20 = Business.create(name: "iPhone Screen Repair Expert NYC", state: "NY", city: "New York", zipcode: 10018, address: "1441 Broadway", phone_number: "(917)668-2222", website: "www.iphoneexpertnyc.com", latitude: "40.755010", longitude: "-73.987170")
business21 = Business.create(name: "Fix and Accessorize", state: "NY", city: "New York", zipcode: 10016, address: "551 3rd Ave", phone_number: "(646)852-6593", website: "www.ifixandrepair.com/repair-services/", latitude: "40.747210", longitude: "-73.976630")





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

file34 = open('https://yap-dev.s3.amazonaws.com/redhot1.jpg')
business12.images.attach(io: file34, filename: 'redhot1.jpg')
file35 = open('https://yap-dev.s3.amazonaws.com/redhot2.jpg')
business12.images.attach(io: file35, filename: 'redhot2.jpg')
file36 = open('https://yap-dev.s3.amazonaws.com/redhot3.jpg')
business12.images.attach(io: file36, filename: 'redhot3.jpg')

file37 = open('https://yap-dev.s3.amazonaws.com/luger1.jpg')
business13.images.attach(io: file37, filename: 'luger1.jpg')
file38 = open('https://yap-dev.s3.amazonaws.com/luger2.jpg')
business13.images.attach(io: file38, filename: 'luger2.jpg')
file39 = open('https://yap-dev.s3.amazonaws.com/luger3.jpg')
business13.images.attach(io: file39, filename: 'luger3.jpg')

file40 = open('https://yap-dev.s3.amazonaws.com/ymca1.jpg')
business14.images.attach(io: file40, filename: 'ymca1.jpg')
file41 = open('https://yap-dev.s3.amazonaws.com/ymca2.jpg')
business14.images.attach(io: file41, filename: 'ymca2.jpg')
file42 = open('https://yap-dev.s3.amazonaws.com/ymca3.jpg')
business14.images.attach(io: file42, filename: 'ymca3.jpg')

file43 = open('https://yap-dev.s3.amazonaws.com/harbor1.jpg')
business15.images.attach(io: file43, filename: 'harbor1.jpg')
file44 = open('https://yap-dev.s3.amazonaws.com/harbor2.jpg')
business15.images.attach(io: file44, filename: 'harbor2.jpg')
file45 = open('https://yap-dev.s3.amazonaws.com/harbor3.jpg')
business15.images.attach(io: file45, filename: 'harbor3.jpg')

file46 = open('https://yap-dev.s3.amazonaws.com/slopewell1.jpg')
business16.images.attach(io: file46, filename: 'slopewell1jpg')
file47 = open('https://yap-dev.s3.amazonaws.com/slopewell2.jpg')
business16.images.attach(io: file47, filename: 'slopewell2.jpg')
file48 = open('https://yap-dev.s3.amazonaws.com/slopewell3.jpg')
business16.images.attach(io: file48, filename: 'slopewell3.jpg')

file49 = open('https://yap-dev.s3.amazonaws.com/spa1.jpg')
business17.images.attach(io: file49, filename: 'spa1jpg')
file50 = open('https://yap-dev.s3.amazonaws.com/spa2.jpg')
business17.images.attach(io: file50, filename: 'spa2.jpg')
file51 = open('https://yap-dev.s3.amazonaws.com/spa3.jpg')
business17.images.attach(io: file51, filename: 'spa3.jpg')


file52 = open('https://yap-dev.s3.amazonaws.com/allsecuritylocksmith1.jpg')
business18.images.attach(io: file52, filename: 'allsecuritylocksmith1.jpg')
file53 = open('https://yap-dev.s3.amazonaws.com/allsecuritylocksmith2.jpg')
business18.images.attach(io: file53, filename: 'allsecuritylocksmith2.jpg')
file54 = open('https://yap-dev.s3.amazonaws.com/allsecuritylocksmith3.jpg')
business18.images.attach(io: file54, filename: 'allsecuritylocksmith3.jpg')

file55 = open('https://yap-dev.s3.amazonaws.com/amazonlocksmith1.jpg')
business19.images.attach(io: file55, filename: 'amazonlocksmith1.jpg')
file56 = open('https://yap-dev.s3.amazonaws.com/amazonlocksmith2.png')
business19.images.attach(io: file56, filename: 'amazonlocksmith2.png')
file57 = open('https://yap-dev.s3.amazonaws.com/amazonlocksmith3.jpg')
business19.images.attach(io: file57, filename: 'amazonlocksmith3.jpg')


file58 = open('https://yap-dev.s3.amazonaws.com/iphonerepairone1.jpg')
business20.images.attach(io: file58, filename: 'iphonerepairone1.jpg')
file59 = open('https://yap-dev.s3.amazonaws.com/iphonerepairone2.jpg')
business20.images.attach(io: file59, filename: 'iphonerepairone2.jpg')
file60 = open('https://yap-dev.s3.amazonaws.com/iphonerepairone3.png')
business20.images.attach(io: file60, filename: 'iphonerepairone3.png')

file61 = open('https://yap-dev.s3.amazonaws.com/phonerepairtwo1.jpg')
business21.images.attach(io: file61, filename: 'phonerepairtwo1.jpg')
file62 = open('https://yap-dev.s3.amazonaws.com/phonerepairtwo2.jpg')
business21.images.attach(io: file62, filename: 'phonerepairtwo2.jpg')
file63 = open('https://yap-dev.s3.amazonaws.com/phonerepairtwo3.jpg')
business21.images.attach(io: file63, filename: 'phonerepairtwo3.jpg')


review1 = Review.create(author_id: User.last.id, business_id: Business.last.id, content: "This place always pisses me off, and today was no different.  The lady rushes me and it just seems so rude.  It was a bad experience, and lately it's been like that the last two times i've been there", rating: 4)
review2 = Review.create(author_id: User.last.id, business_id: Business.last.id, content: "This place is great, the black bean chicken is delicious!  The wonton soup is Fantastic as well, and add it with the wonderful spciy homemade mustard!", rating: 5)
review3 = Review.create(author_id: User.last.id, business_id: Business.last.id, content: "The steak is absolutely amazing! The tomato platter is big round and delicious, the bacon is thick fat and juicy!", rating: 5)

review4 = Review.create(author_id: User.fourth.id, business_id: 14, content: "The place has a very large race track where people can run freely.  There are basketball courts in the middle of the racetrack, and the location is located in a fantastic neighborhood!", rating: 3)
review5 = Review.create(author_id: User.fifth.id, business_id: 15, content: "This is actually a great gym.  It's open 24 hours a day, but they do close early on the weekends.  It has great amenities.", rating: 5)
review6 = Review.create(author_id: User.fifth.id, business_id: 16, content: "The people are nice, the beds are soft, and just an overall great experience.", rating: 4)
review7 = Review.create(author_id: User.fifth.id, business_id: 17, content: "Not so good!  I just got a really bad creepy vibe when I entered and wish I had left!", rating: 2)
review8 = Review.create(author_id: User.fifth.id, business_id: 18, content: "I was locked out of my car and this place showed up to save the day.", rating: 4)
review9 = Review.create(author_id: User.fourth.id, business_id: 19, content: "My door lock had to be changed since the key kept getting stuck in it.  The guy came, replaced the cylinder, which allowed me to keep most of the door lock.", rating: 4)
review10 = Review.create(author_id: User.fourth.id, business_id: 20, content: "This place is just OKAY.  They got the job done but didn't WOW me.", rating: 3)
review11 = Review.create(author_id: User.fourth.id, business_id: 21, content: "Best phone repair place in the city.  Prices are great and the job was done in a timely manner.", rating: 5)



category1 = Category.create(name: "Massage")
category2 = Category.create(name: "Gyms")
category3 = Category.create(name: "Locksmith")
category4 = Category.create(name: "Phone Repair")
category5 = Category.create(name: "Burgers")
category6 = Category.create(name: "Mexican")
category7 = Category.create(name: "Restaurants")
category8 = Category.create(name: "Italian")
Category9 = Category.create(name: "Chinese")
Category10 = Category.create(name: "Fast Food")
Category11 = Category.create(name: "Steakhouses")
Category12 = Category.create(name: "Bars")

businessCategory1 = BusinessCategory.create(business_id: 1, category_id: 7)

businessCategory2 = BusinessCategory.create(business_id: 2, category_id: 5)

businessCategory3 = BusinessCategory.create(business_id: 3, category_id: 8)
businessCategory4 = BusinessCategory.create(business_id: 3, category_id: 7)

businessCategory5 = BusinessCategory.create(business_id: 4, category_id: 8)

businessCategory6 = BusinessCategory.create(business_id: 5, category_id: 9)

businessCategory7 = BusinessCategory.create(business_id: 6, category_id: 5)

businessCategory9 = BusinessCategory.create(business_id: 7, category_id: 10)
businessCategory10 = BusinessCategory.create(business_id: 7, category_id: 5)

businessCategory11 = BusinessCategory.create(business_id: 8, category_id: 7)
businessCategory12 = BusinessCategory.create(business_id: 8, category_id: 6)

businessCategory13 = BusinessCategory.create(business_id: 9, category_id: 7)
businessCategory14 = BusinessCategory.create(business_id: 9, category_id: 8)

businessCategory15 = BusinessCategory.create(business_id: 11, category_id: 7)
businessCategory16 = BusinessCategory.create(business_id: 11, category_id: 6)

businessCategory17 = BusinessCategory.create(business_id: 12, category_id: 7)
businessCategory18 = BusinessCategory.create(business_id: 12, category_id: 9)

businessCategory19 = BusinessCategory.create(business_id: 13, category_id: 7)
businessCategory20 = BusinessCategory.create(business_id: 13, category_id: 11)



businessCategory21 = BusinessCategory.create(business_id: 14, category_id: 2)
businessCategory22 = BusinessCategory.create(business_id: 15, category_id: 2)

businessCategory23 = BusinessCategory.create(business_id: 16, category_id: 1)
businessCategory23 = BusinessCategory.create(business_id: 17, category_id: 1)

businessCategory24 = BusinessCategory.create(business_id: 18, category_id: 3)
businessCategory25 = BusinessCategory.create(business_id: 19, category_id: 3)

businessCategory26 = BusinessCategory.create(business_id: 20, category_id: 4)
businessCategory27 = BusinessCategory.create(business_id: 21, category_id: 4)


