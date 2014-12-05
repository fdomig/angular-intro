
var express     = require('express');
var router      = express.Router();
var googleBooks = require('../components/google/books');
var extend      = require('extend');

var books = [
  { id: 1, title: 'The Pragmatic Programmer', author: 'Andrew Hunt & David Thomas', price: 35.00, isbn: "9780132119177" },
  { id: 2, title: 'Continuous Delivery', author: 'Jez Humble & David Farley', price: 40.48, isbn: "9780321670229" },
  { id: 3, title: 'Clean Code', author: 'Robert C. Martin', price: 38.43, isbn: "9780136083252" },
  { id: 4, title: 'Release It', author: 'Michael T. Nygard', price: 22.68, isbn: "9780978739218" },
  { id: 5, title: 'Working Effectively with Legacy Code', author: 'Michael C. Feathers', price: 48.14, isbn: "9780132931755" },
  { id: 6, title: 'Refactoring', author: 'Martin Fowler', price: 41.93, isbn: "9780133065268" },
  { id: 7, title: 'xUnit Test Patterns', author: 'Gerard Meszaros', price: 61.25, isbn: "9780132797467" }
];

books.forEach(function (book) {

  var picture = book.title.toLowerCase().replace(/ /g, '_') + '.jpg';
  book.picture = '/assets/img/' + picture;

  googleBooks.findByIsbn(book.isbn, function (data) {
    extend(true, book, data);
  });

});

router.get('/', function (req, res) {
  res.send(books);
});

router.get('/:id', function (req, res) {
  res.send(books[req.params.id - 1]);
});

module.exports = router;