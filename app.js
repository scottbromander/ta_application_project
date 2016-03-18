var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var dataRoute = require('./routes/data');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/data', dataRoute);

app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 4242);
app.listen(app.get('port'), function() {
  console.log('Listening on port: ', app.get('port'));
});
