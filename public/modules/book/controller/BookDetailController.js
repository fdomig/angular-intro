(function () {
  'use strict';

  var BookDetailController = function (book) {
    this.book = book;
  };

  BookDetailController.resolve = {
    book: function (Books, $stateParams) {
      return Books.findOne($stateParams.bookId);
    }
  };

  angular.module('book')

    .config(function ($stateProvider) {
      $stateProvider.state('book', {
        url: '/books/:bookId',
        controller: 'BookDetailController',
        controllerAs: 'bookCtrl',
        templateUrl: 'modules/book/templates/book-detail.tpl.html',
        resolve: BookDetailController.resolve
      });
    })
    
    .controller('BookDetailController', BookDetailController)

  ;

})();