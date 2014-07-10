var quadrant = 0;

var Doll = Backbone.Model.extend({
    urlRoot: "/dolls",
});

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

var Item = Backbone.Model.extend({
  urlRoot: '/items'
});

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
    debugger;

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

var ItemCollection = Backbone.Collection.extend({
  model: Item
});

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

var Room = Backbone.Model.extend({
  urlRoot: '/rooms'
});

var RoomView = Backbone.View.extend({
    initialize: function(){
      this.listenTo(this.model, 'all', this.render)
    },
    render: function(){
      var room = this.model
      var width = 200;
      var height = 200;
      var xPos = 10;
      var yPos = 10;
      var margin = 5;

      switch (room.attributes.quadrant){
        case 2:
          xPos = xPos + width + margin;
          break;
        case 3:
          yPos = yPos + height + margin;
          break;
        case 4:
          xPos = xPos + width + margin;
          yPos = yPos + height + margin;
          break;
      }
      var room_image = s.rect(xPos, yPos, width, height);
      room_image.attr({
        fill : "#ffffff",
        stroke: "#000000",
        strokeWidth: "3"
      })

    var item_collection = new ItemCollection();
    item_collection.url = "/rooms/" + this.model.get("id") + "/items";
    item_collection.fetch({
    success: function(){
      console.log(item_collection);
      item_collection_view = new ItemCollectionView({
        collection: item_collection
      });
      item_collection_view.render();
    }
  });

      
    }    
});

var RoomCollection = Backbone.Collection.extend({
    model: Room,
    url: '/rooms'
});

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




function clothesOff(clothes){
  clothes.drag(function(dx, dy, x, y, e){
        this.attr( { x: x, y: y } );
        var box = doll.getBBox();
        if (Snap.path.isPointInsideBBox(box, x, y)){
          clothesArr.push(clothes);
          clothes.undrag();
        }
  })
}


//pushes pants into doll array when they are moved onto the doll.
//clothesArr.push(pants);



  // var collection = new DollCollection();
  // var collectionView = new DollCollectionView();
  $('.save-btn').click(function(){
    _.each(collectionView.models, function(doll){
      console.log("doll: " + doll.attr("x") + ":" + doll.attr("y"))
      $.ajax({
        url: '/dolls',
        method: 'put',
        dataType: 'json',
        data: '{ doll: {xPos:' + doll.attr("xPos") + ', yPos:' + doll.attr("yPos") + "}",
        success: function(){
          console.log("doll saved");
        }
      })
    })
  })

  // collection.fetch();

    //collection.create(doll);
    // $.ajax({
    //   url:'/dolls',
    //   method: 'post',
    //   dataType: 'json',
    //   data: "{ doll: " + JSON.stringify(doll),
    //   success: function(){
    //     console.log("doll created");
    //   }
    // })
    
    // var doll = s.circle(myDoll.attributes.xPos,200,50)
    // doll.drag();
  

    //myDoll.makeDoll();

  // })
  //   collection.fetch();

  // $('.make-doll-btn').click(function(){
  //   var doll = new Doll({xPos:500});
    
  //   collection.add(doll);
  //    dollView = new DollView({
  //      model: doll
  //    })
  //    dollView.render();
  //   debugger;
  //   collection.create(doll);
    // $.ajax({
    //   url:'/dolls',
    //   method: 'post',
    //   dataType: 'json',
    //   data: "{ doll: " + JSON.stringify(doll),
    //   success: function(){
    //     console.log("doll created");
    //   }
    // })
    
    // var doll = s.circle(myDoll.attributes.xPos,200,50)
    // doll.drag();
  

    //myDoll.makeDoll();



$(function(){


  

  var room_collection = new RoomCollection();
  room_collection.url = "/rooms";
  room_collection.fetch({
    success: function(){
      console.log(room_collection);
      room_collection_view = new RoomCollectionView({
        collection: room_collection
      });
      room_collection_view.render();
    }
  });


  $('.make-doll-btn').click(function(){
    var doll = new Doll({id: "1"});
    
    doll.fetch({
      success: function(){
        dollView = new DollView({
          model: doll
        })
      }
    })
    
    //collection.add(doll);
     // dollView = new DollView({
     //   model: doll
     // })
     //dollView.render();
  })






})






