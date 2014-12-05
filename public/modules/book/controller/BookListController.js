(function () {
  'use strict';

  var BookListController = function (books) {
    this.books = books;
  };

  BookListController.resolve = {
    books: function (Books) {
      return Books.find();
    }
  };

  angular.module('book')

    .config(function ($stateProvider) {
      $stateProvider.state('books', {
        url: '/books',
        controller: 'BookListController',
        controllerAs: 'bookListCtrl',
        templateUrl: 'modules/book/templates/book-list.tpl.html',
        resolve: BookListController.resolve
      });
    })

    .controller('BookListController', BookListController)

  ;

})();