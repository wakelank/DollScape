var DollView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'all', this.render)
  },

  // template:_.template($('.doll-template').html()),
  render: function(){
    var svg_doll = s.circle(50, 175, 50)

    // var html = this.template( this.model.attributes )
    // this.$el.html(html);
    return this;
  }
});