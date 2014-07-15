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

    Snap.load("assets/" + item.attributes.file_name, function(f){
      item_image = g.append(f);
      var matrix = room_image.transform().globalMatrix;
      item_image.transform("s0.25")
      matrix.scale(.25)
      item_image.attr({
        id: item.get("itemType") + item.get("id"),
        class: "item"
      });
      //item_image.transform(matrix);

     
        item_image.cx = 40;
        item_image.cy = 140;
        item_image.ox = 0;
        item_image.oy = 0;

        item_image.drag(dragging, startDrag, function(evt) {
            console.log("dropped at: "+ evt.x + ", " + evt.y);
        });


    });


        startDrag = function(posx, posy) {
          this.ox = posx - this.cx;
          this.oy = posy - this.cy;
        }

        dragging = function(dx, dy, posx, posy) {
          this.cx = posx - this.ox;
          this.cy = posy - this.oy;
          t = 't' + this.cx + ',' + this.cy;
          this.transform(t);
          
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
