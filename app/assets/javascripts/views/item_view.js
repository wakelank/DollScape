var ItemView = Backbone.View.extend({
  initialize: function(options){

    this.options = options || {}
    // this.listenTo(this.model, 'all', this.render)
    console.log("itemview init" + this.options)
    

    this.render(options)
  },
  render: function(options){
    this.options = options || {}
    
    var item = this.model;
    var xPos = options.itemXPos;
    var yPos = options.itemYPos;

    var height = 20;
    var width = 20;
    var color = item.get("color");
    //debugger;
    console.log(this)
    //debugger;
    switch (item.get("itemType")){
      case "shirt":
        var item_image = s.rect(xPos, yPos, width, height); //shirt
        item_image.attr({
          fill: color,
        });
        break;
      case "ball":
        var item_image = s.circle(xPos, yPos, 10); //ball
        item_image.attr({
          fill: color,
        });
        break;
      case "box":
      var item_image = s.rect(84, 105, width, height);  //box
      item_image.attr({
        fill: color,
      });
      break;
    };
    item_image.attr({
      stroke: "#000000",
      strokeWidth: 3,
      id: item.get("itemType") + item.get("id"),
      class: "item"
    });
    //debugger;
    var dollArr = document.getElementsByClassName("doll");

    var dollBox = dollArr[0].getBBox()
    var moveFunc = function( dx, dy, posx, posy){
      //TODO this  y-100 is to take into account the header
      //need to use the x, y values of the Snap paper, not 
      //page.  maybe this.arr("x"), this.attr("y")
      this.attr({ x: posx, y: posy-100})

      if (Snap.path.isPointInsideBBox(dollBox,this.attr("x"),this.attr("y"))){
        doll_items.push(this);
      }

    }
    //item_image.drag()
    item_image.drag(moveFunc);
    
  } 

  
});
