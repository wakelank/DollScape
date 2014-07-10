var ItemCollectionView = Backbone.View.extend({
  initialize: function(options){
    this.options = options || {}
    console.log(options.itemXPos)
    debugger;
    this.listenTo(this.collection, 'all', this.render);

  },
  render: function(){
    _.each(this.collection.models, function(item){
    var itemView = new ItemView({model: item});
    itemView.render();
  })
  }


});
