# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Business.destroy_all
business1 = Business.create(name: "Joe's Pizza", state: "NY", city: "New York", zipcode: 10018, address: "1435 Broadway", phone_number: "(646)559-4878", website: "www.joespizzany.com", latitude: "40.754711", longitude: "-73.987022")
business2 = Business.create(name: "CAVA", state: "NY", city: "New York", zipcode: 10018, address: "1385 Broadway", phone_number: "(718)502-9282", website: "www.cava.com", latitude: "40.752789", longitude: "-73.987862")
business3 = Business.create(name: "L & B Spumoni Gardens", state: "NY", city: "Brooklyn", zipcode: 11223, address: "2725 86th St", phone_number: "(718)449-1230", website: "www.spumonigardens.com", latitude: "40.594710", longitude: "-73.981340")

bus.images.attach(io: File.open('./app/assets/images/spumoni1.jpg'), filename: 'spumoni1.jpg')
business3.images.attach(io: File.open('./app/assets/images/spumoni2.jpg'), filename: 'spumoni2.jpg')
business3.images.attach(io: File.open('./app/assets/images/spumoni3.jpg'), filename: 'spumoni3.jpg')