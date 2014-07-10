var RoomCollectionView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'all', this.render);
  },
  render: function(){

    _.each(this.collection.models, function(room){
    var roomView = new RoomView({model: room});
    roomView.render();
  })
  }

})
