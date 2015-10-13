// Code goes here

(function() {
  var app = angular.module('gemStore', [ ]);

  app.controller('StoreController', function() {
    this.product = gem;
  });

  var gem = {
  	name:"Cool Product 1",
  	price: 2.95,
  	description: "it's cool thing",
  	canPurchase:true
  }


})();
