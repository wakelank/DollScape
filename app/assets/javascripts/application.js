// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require snap.svg.js
//= require underscore
//= require backbone
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree .

var quadrant = 0;


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
