(function () {
  'use strict';

  var Books = function (Restangular) {
    var ENDPOINT = 'books';

    var factory = {};

    factory.find = function () {
      return Restangular.all(ENDPOINT).getList();
    };

    factory.findOne = function (id) {
      return Restangular.one(ENDPOINT, id).get();
    };

    return factory;
  };

  angular.module('book')

    .factory('Books', Books)

  ;

})();