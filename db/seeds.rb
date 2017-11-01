# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

city = City.new
city.name = 'Chicago'
city.save

city.name = 'Nuevo Laredo'
city.save

city.name = 'San Antonio'
city.save

state = State.new
state.name = 'Michigan'
state.save

state.name = 'California'
state.save

state.name = 'Nueva York'
state.save