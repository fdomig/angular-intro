(function () {
  'use strict';
  
  angular.module('book', ['restangular'])

    .config(function (RestangularProvider) {
      RestangularProvider.setBaseUrl('/api');
    })

  ;

})();