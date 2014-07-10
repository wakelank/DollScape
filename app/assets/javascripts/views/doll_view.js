var DollView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'all', this.render)
  },

  render: function(){

    var doll = this.model;
    var doll_image = s.circle(doll.get("xPos"), doll.get("yPos"), 50);
    doll_image.attr({
      fill: this.model.attributes.color
    })

    doll_image.drag();

    return this;
  }
});
