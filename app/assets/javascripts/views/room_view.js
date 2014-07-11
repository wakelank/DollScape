var RoomView = Backbone.View.extend({
    // initialize: function(){
    //   //this.listenTo(this.model, 'all', this.render)
    // },
    render: function(){
      var room = this.model
      var width = 200;
      var height = 200;
      var xPos = 10;
      var yPos = 10;
      var margin = 5;

      switch (room.attributes.quadrant){
        case 2:
          xPos = xPos + width + margin;
          break;
        case 3:
          yPos = yPos + height + margin;
          break;
        case 4:
          xPos = xPos + width + margin;
          yPos = yPos + height + margin;
          break;
      }
      var room_image = s.rect(xPos, yPos, width, height);
      room_image.attr({
        fill : "#ffffff",
        stroke: "#000000",
        strokeWidth: "3",
      })

    var item_collection = new ItemCollection({
      // itemxPos: xPos + 10,
      // itemYPos: yPos - 10

    });
    item_collection.url = "/rooms/" + this.model.get("id") + "/items";

    var itemXPos= xPos + 10;
    var itemYPos= yPos + 20;
    var that = this;
    item_collection.fetch({
      success: function(){
        item_collection_view = new ItemCollectionView({
          collection: item_collection,
          itemXPos: itemXPos,
          itemYPos: itemYPos
        });
        debugger;
      //item_collection_view.render();
    }
  });


    }
});
