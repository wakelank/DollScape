# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Doll.create({ xPos: 100, yPos: 100, color: '#E8CB7C', name: 'Lichard', file_name: "doll1.svg"})


home = Room.create({ name: "Room", quadrant: 1, file_name: "room.svg" })
beach = Room.create ({ name: "Beach", quadrant: 2, file_name: "beach.svg"  })
picnic = Room.create({ name: "Park", quadrant: 3, file_name: "park.svg" })
lab = Room.create({ name: "Party", quadrant: 4, file_name: "party.svg" })

Item.create(name: "shirt1", itemType:"shirt", color:"#E8E27C", room: home, file_name: "shirt1.svg")
Item.create(name: "pants1", itemType:"pants", color:"#E87CD2", room: home, file_name: "pants1.svg")
Item.create(name: "glasses1", itemType:"accessory", color:"#7C99E8", room: beach, file_name: "glasses1.svg")

