# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Doll.create({ xPos: 100, yPos: 100, color: '#E8CB7C', name: 'Lichard'})


home = Room.create({ name: "Room", quadrant: 1 })
beach = Room.create ({ name: "Beach", quadrant: 2 })
picnic = Room.create({ name: "Picnic", quadrant: 3 })
lab = Room.create({ name: "Lab", quadrant: 4 })

Item.create(name: "shirt1", itemType:"shirt", color:"#E8E27C", room: home)
Item.create(name: "box1", itemType:"box", color:"#E87CD2", room: beach)
Item.create(name: "ball1", itemType:"ball", color:"#7C99E8", room: beach)

