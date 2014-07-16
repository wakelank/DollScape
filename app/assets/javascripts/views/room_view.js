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
        // if (topRoom != "none")
        // var y = topRoom.getBBox().height || room_image.getBBox().height;
        // var x = topRoom.getBBox().width || room_image.getBBox().width;
        //TODO room.get would probably work here
        switch (room.attributes.quadrant){
          case 1:
          debugger;
            x = 0 - room_image.getBBox().x-100;
            y = 0 - room_image.getBBox().y;
            translate = "t" + x + "," + y;
            scale = "s.8"
            topRoom = room_image

            break;
          case 2:
            var currentX = room_image.getBBox().x;
            var currentY = room_image.getBBox().y;
            var destX= (topRoom.getBBox().width/2) + 1000;
            var destY = topRoom.getBBox().height-1200;

            var scale = "s.25"
            var translate = "t"+(destX - currentX) + "," + (destY-currentY)
            break;
          case 3:
            var currentX = room_image.getBBox().x;
            var currentY = room_image.getBBox().y;
            var destX= (topRoom.getBBox().width/2) + 1000;
            var destY = topRoom.getBBox().height - 500;

            var scale = "s.25"
            var translate = "t"+(destX - currentX) + "," + (destY-currentY)


            break;
          case 4:
            var currentX = room_image.getBBox().x;
            var currentY = room_image.getBBox().y;
            var destX= (topRoom.getBBox().width/2) + 1000;
            var destY = topRoom.getBBox().height +300;

            var scale = "s.25"
            var translate = "t"+(destX - currentX) + "," + (destY-currentY)
          break;
        }
        room_image.attr({
            id : room.get("name"),
            class : "room"
        });
        room_image.transform(scale + " " + translate);
        room_image.drag();
    
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
          collection: item_collection
        });

      item_collection_view.render();
      }
     });
  }
});

function  moveRoomTo(room, x, y){
  //room = Snap.select('#'+roomId);
  room_box = room.getBBox();
  var cx = x - room_box.x;
  var cy = y - room_box.y;
  room.transform("t" + cx + "," + cy);
}

function scaleRoom(room, size){

  if(size == "big"){
    scale_factor = .5;
  }else{
    scale_factor = .3;
  }
  room.transform("s"+scale_factor);

}
