var RoomView = Backbone.View.extend({
  render: function(){
    var room = this.model;
    var g = s.group();
    var browserWidth = window.innerWidth;
    var browserHeight = window.innerHeight;

      Snap.load("images/" + room.attributes.file_name, function(f){
    
        room_image = g.append(f);
        var matrix = room_image.transform().globalMatrix;
        matrix.scale(.5)
        //TODO room.get would probably work here
        switch (room.attributes.quadrant){
          case 2:
            matrix.translate(browserWidth, 0);
            break;
          case 3:
            matrix.translate(0,browserHeight);
            break;
          case 4:
          matrix.translate(browserWidth,browserHeight)
            break;
        }

        room_image.attr({
            id : room.get("name"),
            class : "room"
        });
        room_image.transform(matrix);
    
     });
      




    //TODO DollView should be get rooms/:id/dolls/ 
    //so we don't need this if statement and 
    //the last location of the doll can be saved.

    if (room.attributes.quadrant == 1){
      var doll = new Doll({id: "1"});

      doll.fetch({
        success: function(){
          dollView = new DollView({
            model: doll
          });
        }
      });
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
          collection: item_collection
        });

      item_collection_view.render();
      }
     });
  }
});
