var ItemView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'all', this.render)
  },
  render: function(){
    var item = this.model;
    var xPos = 50;
    var yPos = 70;
    var height = 20;
    var width = 20;
    var color = item.get("color");
    //debugger;

    switch (item.get("itemType")){
      case "shirt":
        var shirt = s.rect(xPos, yPos, width, height);
        shirt.attr({
          fill: color,
          stroke : "#ffffff",
          strokeWidth : 3
        });
        shirt.drag();
        break;
      case "ball":
        var ball = s.circle(xPos, yPos, 10);
        ball.attr({
          fill: color,
          stroke:"#ffffff",
          strokeWidth: 3
        });
        ball.drag();
        break;
      case "box":
      var box = s.rect(xPos, yPos, width, height);
      box.attr({
        fill: color,
        stroke : "#ffffff",
        strokeWidth : 3
      });
      box.drag();
      break;
    };
  }
});
