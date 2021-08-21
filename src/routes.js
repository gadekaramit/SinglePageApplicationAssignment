(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // Set up UI States
    $stateProvider
    // Home Page
    .state('home', {
        url:'/',
        templateUrl:'src/menuApp/templates/home.template.html'
    })
    // Categories page
    .state('categories', {
        url:'/categories',
        templateUrl:'src/menuApp/templates/main-categories.template.html',
        controller: 'CategoriesController as categoriesCtrl',
        resolve: {
            items:['MenuDataService', function(MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        }
    })

    .state('getitems', {
        url:'/item/{categoryShortName}',
        templateUrl:'src/menuApp/templates/main-items.template.html',
        controller: 'ItemsController as itemsCtrl',
        resolve: {
            items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
        }
    })
}
})();