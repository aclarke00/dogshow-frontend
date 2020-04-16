# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


alyssa = User.create(username: "Alyssa", password: "abc123")


alyssa.dogs.create(
    name: "Stevie",
    breed: "Dachshund",
    size: "small",
    commands: "Sit, Stay",
    tricks: "Spin",
    image_url: "https://ei.marketwatch.com/Multimedia/2019/02/13/Photos/ZQ/MW-HD879_Westmi_20190213111041_ZQ.jpg?uuid=e9286088-2fa9-11e9-b27e-ac162d7bc1f7"



)