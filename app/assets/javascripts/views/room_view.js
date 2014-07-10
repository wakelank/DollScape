var RoomView = Backbone.View.extend({
    initialize: function(){
      this.listenTo(this.model, 'all', this.render)
    },
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
        strokeWidth: "3"
      })

    var item_collection = new ItemCollection();
    item_collection.url = "/rooms/" + this.model.get("id") + "/items";
    item_collection.fetch({
    success: function(){
      console.log(item_collection);
      item_collection_view = new ItemCollectionView({
        collection: item_collection
      });
      item_collection_view.render();
    }
  });


    }
});
