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

# business3.images.attach(io: File.open('./app/assets/images/spumoni1.jpg'), filename: 'spumoni1.jpg')
# business3.images.attach(io: File.open('./app/assets/images/spumoni2.jpg'), filename: 'spumoni2.jpg')
# business3.images.attach(io: File.open('./app/assets/images/spumoni3.jpg'), filename: 'spumoni3.jpg')
file = open("#{https://s3.amazonaws.com/yap-dev/WmCumDazfpPCCDtzRBL6SJbj?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luEEYaCXVzLWVhc3QtMSKAAj%2Bqbrjt61AZO4bhNxiZQVA%2FP7aQdD7azlMylNOu6pg4bdT%2FGXJ680LXPaD0qYdu0XVfk%2F%2FMxv0vByBl%2FMnFG19odVn0QsIcjecY56z%2Ft3yCUmfCzNNRb7drru3FYpiU5MhGYyxHCIsB%2BSfJnQ2tYNpRG%2B9l4prmBxNz2UAUG4XEoLwreHTjWfd0TkFxrqKoSNddNjs4B74KKqARXO7Oq%2F2t40RauElrdAa59T5Gqlz%2B8Ek03GQiPBs4QM4xgQGCv4hNx3hZM0YmnB8DLLWkiMGku31r6jojdI1Mqu4F%2B7ZNwettbg8hwgSss0tfTlD1xsh%2BV9H6Dbq2dFVelYhpCOMq2wMIGxAAGgw0MTYzMzU5ODIzNzAiDAYkw8qkhoHxJhVTDiq4A8qN2louSgmgicvGUO3mZMkMOOqLDmvf%2Fs3xQlUqxqPDuTIRKkcpvJpFprCAccI%2FF8%2BRs9VUMu8YpZBRgfEU3uxgrewaNZVWyiYjB%2B9zgZko16QWwT6LLCSqRnZa45%2BSbX3ZtECsaVBh56Dx7vfuCM2DwYx7pJ8anSJ779PwpoMpM9oSm%2Bm%2BmgMciERaxOeBUKASKzvGfnBVMNGooFN5P7cf4YmBs5R%2BK3UXF%2FwoAtZsLSar7WmF%2BVgtB%2F8lCC8Zx3R%2BNqWgSBxkXdfqutrmY44zzvbxvs3qD5LqzGlhQowInXfjfZ5M9McRaM6neAvXhKfdKkKD0f%2Bm7sLV75AnNEB94mhYOB5SH6o1xFcQgtJyohR4LQS2f1lSMC6kDHklhuXdkN%2B0Wf3Sza%2BMf4Hr8dNDuuI3jfuEycHBPgIVQVsO%2FXC%2FkT%2BKPnJhzO1r28hpuuj4nDWmLdbuw37W0ya6TwMqsc%2BtCNXu%2Bupa08uGYlNoIOCbkWS6cnPUXPq6KuA6kWS%2B4Th1C6cAuNalfrSw85PPajHnVwipPMc6eXUvevrOx9GNZpnI39rzuPzkn8ZBjlsZBX1Dh5lWMIqQ4OcF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190605T190828Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWB34O54RCQUYG5SV%2F20190605%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=98487f90b14832b38a3489e33399404dd8d28c0f2e60a2d80cedbdd01190749f}")
business3.images.attach(io: file, filename: 'spumoni3.jpg')


