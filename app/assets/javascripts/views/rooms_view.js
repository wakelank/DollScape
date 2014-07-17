var RoomCollectionView = Backbone.View.extend({
  initialize: function(options){
    this.listenTo(this.collection, 'all', this.render);    
    this.options = options || {};    
  },
  render: function(){        
    var myDoll = this.options.doll;    
    _.each(this.collection.models, function(room){      
      var roomView = new RoomView({model: room, doll: myDoll});
      roomView.render();
    });
    
  }

});
