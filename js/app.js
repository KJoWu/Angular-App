// Code goes here

(function() {
  var app = angular.module('gemStore', [ ]);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [
  {
  	name:"Cool Product 1",
  	price: 2.95,
  	description: "it's cool thing",
  	canPurchase:true,
  	soldOut:false
  },
  {
  	name:"Cool Product 1",
  	price: 2.95,
  	description: "it's cool thing",
  	canPurchase:true,
  	soldOut:false
  }
  ];

})();
