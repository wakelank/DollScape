var ItemCollectionView = Backbone.View.extend({
  initialize: function(options){
    this.options = options || {}
    var itemXPos = options.itemXPos;
    this.render();

  },
  render: function(){
    // this.options = options || {}
    // var itemXPos = options.itemXPos;
    // console.log(itemXPos);
    _.each(this.collection.models, function(item){
    var itemView = new ItemView({

    });
    // console.log(itemXPos);
    //itemView.render(options);
  })
  }


});
