var ItemView = Backbone.View.extend({
  initialize: function(options){

    this.options = options || {}
    // this.listenTo(this.model, 'all', this.render)
    console.log("itemview init" + this.options)
    

    this.render(options)
  },
  render: function(options){
    var room_name = options.room;

    var item = this.model;
    var color = item.get("color");
    var g = s.group();
    var browserWidth = window.innerWidth;
    var browserHeight = window.innerHeight;

    Snap.load("images/" + item.attributes.file_name, function(f){
      item_image = g.append(f);
      var matrix = room_image.transform().localMatrix;
      item_image.transform("s0.1")
      item_image.attr({
        id: item.get("itemType") + item.get("id"),
        class: "item"
      });


        item_image.cx = 0;
        item_image.cy = 0;
        item_image.ox = 0;
        item_image.oy = 0;

        item_image.drag(dragging, startDrag);

    });

        startDrag = function(posx, posy) {
          this.ox = posx - this.cx;
          this.oy = posy - this.cy;
        }

        dragging = function(dx, dy, posx, posy){
          this.cx = posx - this.ox;
          this.cy = posy - this.oy;
          this.posx = posx;
          this.posy = posy;
          t = 't' + this.cx + ',' + this.cy + " S0.1";
          var matrix = this.transform().localMatrix;
          this.transform(t);
        }

  } 

  
});
