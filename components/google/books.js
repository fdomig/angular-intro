var Client         = require('node-rest-client').Client;
var ENDPOINT       = 'https://www.googleapis.com/books/v1/volumes';
var googleBooksApi = new Client();

var mapDataToBook = function (found) {
  var volume = found.volumeInfo;
    var book = {};

    book.description = volume.description;
    book.subtitle = volume.subtitle;

    if (found.saleInfo && found.saleInfo.listPrice) {
      book.price = found.saleInfo.listPrice.amount;
    }

    return book;
};


var service = {};

service.findByIsbn = function (isbn, cb) {
  var url = ENDPOINT + '?q=isbn:' + isbn;
  googleBooksApi.get(url, function (data, response) {
    data = JSON.parse(data);
    if (data.totalItems === 0) {
      return cb({});
    }
    cb(mapDataToBook(data.items[0]));
   });
};

module.exports = service;