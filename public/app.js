(function () {
  'use strict';

  angular.module('bookApp', ['ui.router', 'book'])

    .config(function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/books');
    })

  ;

})();