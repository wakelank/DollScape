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

     doll_image.drag(draggingDoll,startDragDoll,stopDragDoll);
     //doll_image.drag();

    });

      var roomArr = Snap.selectAll('.room');

      startDragDoll = function(posx, posy) {
        this.ox = posx - this.cx;
        this.oy = posy - this.cy;
        c = s.circle(posx, posy, 100)
        c.attr({id:"circle"});
        s.append(c);
        var itemsArr = Snap.selectAll('.item');
        
        for (var i = 0; i < itemsArr.length; ++ i){
          if (Snap.path.isPointInsideBBox(c.getBBox(), itemsArr[i].posx, itemsArr[i].posy)){

            doll_items.push(itemsArr[i])
            console.log("push " + doll_items.length)
          }
        }
        for (var i = 0; i < doll_items.length; ++i){
           if (Snap.path.isPointInsideBBox(c.getBBox(), doll_items[i].posx, doll_items[i].posy)==false){
            var index = doll_items.indexOf(doll_items[i]);
            doll_items.splice(index,1);
            console.log ("splice " + doll_items.length)
          }

        }
         c.remove();

      }

      draggingDoll = function(dx, dy, posx, posy){

        this.cx = posx - this.ox;
        this.cy = posy - this.oy;
        this.posx = posx;
        this.posy = posy;
        t = 't' + this.cx + ',' + this.cy + " S0.4";
        this.transform(t);

        for (var i = 0; i < doll_items.length; i++ ){
          t = 't' + this.cx + ',' + this.cy + " S0.1";
        doll_items[i].transform(t);
        }
        

      }

      stopDragDoll = function(e){
        var bigRoom;
        smallScale = "S0.2";
        bigScale = "S0.9";

        for (var i = 0; i < roomArr.length; ++ i){
          roomBox = roomArr[i].getBBox();
          
          if (Snap.path.isPointInsideBBox(roomBox, e.x, e.y)) {
        
           console.log("in " + roomArr[i].node.id)
            roomArr[i].transform(bigScale);
          }else{
            roomArr[i].transform(smallScale);
           console.log("out " + roomArr[i].node.id)
          }
        }

      }      

    // //TODO see if an each function would work
    // todo items should be in a collection

        


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

    

    //return this;
  
});
