var ItemCollectionView = Backbone.View.extend({
  initialize: function(options){
    // this.options = options || {}
    // console.log(options.itemXPos);
    //this.listenTo(this.collection, 'all', this.render);
    this.render(options);

  },
  render: function(options){
    this.options = options || {}

    _.each(this.collection.models, function(item){
    var itemView = new ItemView({
      model: item,


    });
    
    //itemView.render();

  })
  }


});
