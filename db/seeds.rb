# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

City.create(
    [
        { name: 'Chicago' },
        { name: 'Washington' },
        { name: 'New York city' },
        { name: 'Phoenix' },
        { name: 'San Francisco' },
        { name: 'Boston' },
        { name: 'Detroit' },
        { name: 'Seattle' },
        { name: 'Baltimore' },
        { name: 'Portland' },
        { name: 'Boise' },
        { name: 'San Diego' },
        { name: 'Austin' }
    ]
)

State.create(
    [
        { name: 'Texas' },
        { name: 'California' },
        { name: 'Indiana' },
        { name: 'Virgina' },
        { name: 'Florida' },
        { name: 'Colorado' },
        { name: 'Ohio' },
        { name: 'Georgia' },
        { name: 'Arizona' },
        { name: 'Alabama' },
        { name: 'Illinois' },
        { name: 'Tennessee' },
        { name: 'Michigan' }
    ]
)