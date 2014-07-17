var RoomView = Backbone.View.extend({
  initialize: function(options) {
    this.options = options || {};
  },

  render: function(){    
    var room = this.model;
    var g = s.group();
    var browserWidth = window.innerWidth;
    var browserHeight = window.innerHeight;

      Snap.load("images/" + room.attributes.file_name, function(f){
    
        room_image = g.append(f);
        roomArr.push(room_image);
        // if (topRoom != "none")
        // var y = topRoom.getBBox().height || room_image.getBBox().height;
        // var x = topRoom.getBBox().width || room_image.getBBox().width;
        //TODO room.get would probably work here
        switch (room.attributes.quadrant){

          case 1:
            makeTopRoom(room_image);
            break;
          case 2:
            makeSmallRoom(room_image,1);

            break;
          case 3:
            makeSmallRoom(room_image,2);


            break;
          case 4:
            makeSmallRoom(room_image,3);

          break;
        }
        room_image.attr({
            id : room.get("name"),
            class : "room"
        });
    
     });
      




    //TODO DollView should be get rooms/:id/dolls/ 
    //so we don't need this if statement and 
    //the last location of the doll can be saved.

    if (room.attributes.quadrant == 4){
      var doll = new Doll(this.options.doll);
      dollView = new DollView({model: doll});
      dollView.render();
    }



      

     // item_collection.url = "/rooms/" + this.model.get("id") + "/items";
  //     item_collection.fetch({
  //     success: function(){
  //       // console.log(item_collection);
  //       item_collection_view = new ItemCollectionView({
  //         collection: item_collection,
  //         itemXPos: 10,
  //         itemYPos: 10
  //   })
  // }

    var item_collection = new ItemCollection({});
    item_collection.url = "/rooms/" + this.model.get("id") + "/items";

  //   var itemXPos= xPos + 10;
    //var itemYPos= yPos + 20;
    //var that = this;
    item_collection.fetch({
      success: function(){
        item_collection_view = new ItemCollectionView({
          collection: item_collection,
          room: room.get("name")
        });

      item_collection_view.render();
      }
     });
  }
});

