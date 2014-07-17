var ItemCollectionView = Backbone.View.extend({
  initialize: function(options){
    this.options = options || {}
  },
  render: function(options){
    this.options = options || {}
    _.each(this.collection.models, function(item){
    var itemView = new ItemView({
      model: item,
    
    });
    
  })
  }


});
