var express = require('express');
var app     = express();
var router  = express.Router();
var books   = require('./routes/books');
var morgan  = require('morgan');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.set('port', 3000);

app.use('/api/books', books);

app.listen(app.get('port'), function () {
  console.log('Express up and listening on port ' + app.get('port'));
});