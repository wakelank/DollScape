var DollView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'all', this.render)
  },

  render: function(){

    var doll = this.model;
    var g = s.group();
    // var doll_image = s.circle(doll.get("xPos"), doll.get("yPos"), 50);
    // doll_image.attr({
    //   fill: this.model.attributes.color,
    //   id: doll.get("name"),
    //   class: "doll"
    // });

    Snap.load("images/" + doll.attributes.file_name, function(f){
      var doll_image = g.append(f);
      var matrix = doll_image.transform().globalMatrix;
      var browserWidth = window.innerWidth;
      var doll_path = Snap.select('#doll_path');
      matrix.scale(.4);
      matrix.translate(browserWidth/4, -10)
      doll_image.transform(matrix);
      Snap.path.map(doll_path, matrix);

      // doll_image.drag(dragging, startDrag);
    
      doll_image.cx = -200;
      doll_image.cy = -100;
      doll_image.ox = 0;
      doll_image.oy = 0;

     doll_image.drag(draggingDoll,startDragDoll);
     //doll_image.drag();

    });



      startDragDoll = function(posx, posy) {
        this.ox = posx - this.cx;
        this.oy = posy - this.cy;
      }

      draggingDoll = function(dx, dy, posx, posy) {

        this.cx = posx - this.ox;
        this.cy = posy - this.oy;
        t = 't' + this.cx + ',' + this.cy + " S0.4";
        this.transform(t)
        var itemsArr = doll_items.models;
    // //TODO see if an each function would work
        for (var i = 0; i < itemsArr.length; i++ ){
          itemsArr[i].transform(t);
        }


      }
      // stopDrag = function(posx, posy){
      //   c = s.circle(posx.x, posx.y, 30);
      //   s.append(c);
      // }

  //   var moveFunc = function( dx, dy, posx, posy){
  //     //TODO this  y-100 is to take into account the header
  //     //need to use the x, y values of the Snap paper, not 
  //     //page.  maybe this.arr("x"), this.attr("y")
  //     this.attr({ cx: posx, cy: posy-100})

  //     var itemsArr = doll_items.models;
  // // //TODO see if an each function would work
  //   for (var i = 0; i < itemsArr.length; i++ ){
  //     itemsArr[i].attributes.attr({ x: posx, y: posy-100 })
  //   }
  

  //   }

    

    return this;
  }
});
