var ItemView = Backbone.View.extend({
  initialize: function(options){

    this.options = options || {}
    // this.listenTo(this.model, 'all', this.render)
    console.log("itemview init" + this.options)
    

    this.render(options)
  },
  render: function(options){
    var item = this.model;
    var color = item.get("color");
    var g = s.group();
    var browserWidth = window.innerWidth;
    var browserHeight = window.innerHeight;

    Snap.load("images/" + item.attributes.file_name, function(f){
      item_image = g.append(f);
      var matrix = room_image.transform().localMatrix;
      item_image.transform("s0.1")
     // matrix.scale(.2)
      item_image.attr({
        id: item.get("itemType") + item.get("id"),
        class: "item"
      });
      //item_image.transform(matrix);

        item_image.cx = 0;
        item_image.cy = -100;
        item_image.ox = 0;
        item_image.oy = 0;

        item_image.drag(dragging, startDrag);

    });

        startDrag = function(posx, posy) {
          this.ox = posx - this.cx;
          this.oy = posy - this.cy;
        }

        dragging = function(dx, dy, posx, posy) {
          this.cx = posx - this.ox;
          this.cy = posy - this.oy;
          this.posx = posx;
          this.posy = posy;
          t = 't' + this.cx + ',' + this.cy + " S0.1";
          var matrix = this.transform().localMatrix;
          this.transform(t);
          // var doll_path = Snap.select('#doll_path');
          // console.log(posx + "::" + posy)
          // if (Snap.path.isPointInside(doll_path, posx, posy)){
          //         doll_items.push(this);
          //         console.log(doll_items);
                  
          // }

        }




    





 
    //debugger;
    // var dollArr = document.getElementsByClassName("doll");
    var oldX = 0;
    var oldY = 0;
    // var dollBox = dollArr[0].getBBox()
    var moveFunc = function( dx, dy, posx, posy){
      //TODO this  y-100 is to take into account the header
      //need to use the x, y values of the Snap paper, not 
      //page.  maybe this.arr("x"), this.attr("y")

      var newX = oldX - posx;
      var newY = oldY - posy;
      oldX = newX;
      oldY = newY;
      console.log(newX+":"+newY)
      var matrix = this.transform().globalMatrix;
      matrix.translate(newX, newY);
      this.transform(matrix);

      // if (Snap.path.isPointInsideBBox(dollBox,this.attr("x"),this.attr("y"))){
      //   doll_items.push(this);
      // }

    }
    //item_image.drag()
    
  } 

  
});
