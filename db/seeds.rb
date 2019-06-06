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


business1 = Business.create(name: "Joe's Pizza", state: "NY", city: "New York", zipcode: 10018, address: "1435 Broadway", phone_number: "(646)559-4878", website: "www.joespizzany.com", latitude: "40.754711", longitude: "-73.987022")
business2 = Business.create(name: "CAVA", state: "NY", city: "New York", zipcode: 10018, address: "1385 Broadway", phone_number: "(718)502-9282", website: "www.cava.com", latitude: "40.752789", longitude: "-73.987862")
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


