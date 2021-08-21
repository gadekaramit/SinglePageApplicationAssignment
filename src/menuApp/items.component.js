
(function () {
    'use strict';
  
    angular.module('MenuApp')
    .component('itemList', {
      templateUrl: 'src/menuApp/templates/items.template.html',
      bindings: {
        items: '<'
      }
    });
  })();