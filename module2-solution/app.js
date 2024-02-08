(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('toBuyController', toBuyController )
    .controller('alreadyBoughtController', alreadyBoughtController)
    .service('shoppingListCheckOffService', shoppingListCheckOffService);

    toBuyController.$inject = ['shoppingListCheckOffService'];
    function toBuyController(shoppingListCheckOffService) {
         var toBuy=this;
         toBuy.items= [
                    {
                        name: "cookies", 
                        quantity: 10
                    },
                    {
                        name: "chocolates", 
                        quantity: 20
                    },
                    {
                        name: "bread", 
                        quantity: 2
                    },
                    {
                        name: "cheese cream", 
                        quantity: 2
                    },
                    {
                        name: "Chocolate milk", 
                        quantity: 5
                    },
                    {
                        name: "Eggs", 
                        quantity: 12
                    },
                    {
                        name: "Bananas", 
                        quantity: 12
                    }
         ];
         toBuy.moveItem= function(itemIndex){
            shoppingListCheckOffService.moveItem(itemIndex, toBuy.items);
         }
    };
    alreadyBoughtController.$inject=['shoppingListCheckOffService'];
    function alreadyBoughtController(shoppingListCheckOffService){
        var alreadyBought = this;  
        alreadyBought.items = shoppingListCheckOffService.items;
    }
    function shoppingListCheckOffService() {
        var service = this;
        service.items = [];
        service.moveItem = function (itemIndex, arrayOfitems) {
            var item = {
                name: '',
                quantity: ''
            }
            item.name = arrayOfitems[itemIndex].name;
            item.quantity = arrayOfitems[itemIndex].quantity;
            arrayOfitems.splice(itemIndex, 1);
            service.items.push(item);
        };
    };
})();