var ItemCollectionView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'all', this.render);

  },
  render: function(){
    _.each(this.collection.models, function(item){
    var itemView = new ItemView({model: item});
    itemView.render();
  })
  }


});
