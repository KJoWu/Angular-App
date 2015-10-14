// Code goes here

(function() {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    var gems = [{
        name: "Cool Product 1",
        price: 2,
        description: "it's cool thing",
        canPurchase: true,
        soldOut: false,
        image: 'img/1.jpg'
    }, {
        name: "Cool Product 1",
        price: 2,
        description: "it's cool thing",
        canPurchase: true,
        soldOut: false,
        image: 'img/2.jpg'
    }, {
        name: "Cool Product 1",
        price: 2,
        description: "it's cool thing",
        canPurchase: true,
        soldOut: false,
        image: 'img/3.jpg'
    }, {
        name: "Cool Product 1",
        price: 2,
        description: "it's cool thing",
        canPurchase: true,
        soldOut: false,
        image: 'img/4.jpg'
    }, {
        name: "Cool Product 1",
        price: 2,
        description: "it's cool thing",
        canPurchase: true,
        soldOut: false,
        image: 'img/5.jpg'
    },
    {
        name: "Cool Product 1",
        price: 2,
        description: "it's cool thing",
        canPurchase: true,
        soldOut: false,
        image: 'img/6.jpg'
    },
    {
        name: "Cool Product 1",
        price: 2,
        description: "it's cool thing",
        canPurchase: true,
        soldOut: false,
        image: 'img/7.jpg'
    }
    ];

})();