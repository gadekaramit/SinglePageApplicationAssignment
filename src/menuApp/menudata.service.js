(function () {
'use strict'
angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiPath', "https://davids-restaurant.herokuapp.com/");

MenuDataService.$inject = ['$http','ApiPath']
function MenuDataService($http, ApiPath) {
    var service = this;
    

    service.getAllCategories = function() {
        return $http({
            method: "GET",
            url: (ApiPath+"categories.json")
        }).then(function(result){
            // return categories
            return result.data;
        });

    }

    service.getItemsForCategory = function(categoryShortName) {
        console.log("reached")
        return $http({
            method: "GET",
            url: (ApiPath+"menu_items.json?category="+categoryShortName),
        }).then(function(result) {
            return result.data.menu_items;
        })
    }
}
})();


