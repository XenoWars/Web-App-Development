var express = require('express');

var app = express();

var fortune = require('./modules/fortunes.js');

var color = require('./modules/colors.js');

var dateTime = require('./modules/datetime.js');

// set up handlebars view engine
var handlebars = require('express3-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('home');
});
app.get('/about', function(req, res) {
	res.render('about', { fortune: fortune.getFortune() } );
});
app.get('/random', function(req, res) {
	res.render('random', { color: color.getColor() } );
});
app.get('/datetime', function(req, res) {
	res.render('datetime', { dateTime: dateTime.getDateTime() } );
});
// custom 404 page
app.use(function(req, res){
       res.status(404);
	res.render('404');
});

// custom 500 page
app.use(function(err, req, res, next){
       console.error(err.stack);
       res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
 console.log( 'Express started on http://localhost:' +
  app.get('port') + '; press Ctrl-C to terminate.' );
});
