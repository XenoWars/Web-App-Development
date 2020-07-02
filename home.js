var express = require('express');
var app = express();
var favorite = require('./modules/favorite.js');
var handlebars = require('express3-handlebars').create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3001);
app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
	res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
	next();
})
if( app.thing == null ) console.log( 'bleat!' );

{
	course1: {
		code: 'CMPS 330', name: 'Electronic Commerce 1', description: 'This course provides information and analysis of e-commerce. Course topics include – e-commerce business models, ecommerce infrastructure, implementing an e-commerce website, e-commerce security and payment systems, ecommerce marketing concepts, ethical, social and political e-commerce issues, social networks, and how highly portable, place-aware, always-with-you personal devices are expanding the e-commerce environment. (No pre-requisites.) ', credits: '3', instructor: 'Andrea Wachter'
	},
	course2: {
		code: 'CMPS 361', name: 'Web Application Development', dexcription: 'This course will provide a foundation in several facets of establishing and maintaining a website. This includes the latest advances in client side as well as server side technologies. The goal is to have students design, implement, and run advanced web applications. It will also cover in some detail the protocols required for web development. Prerequisites: CMPS 261, CMPS 262.', credits: '3', instructor: 'Mark Voortman'
	},
	course3: {
		code: 'CMPS 364', name: 'NoSQL Databases', description: 'This course explores modern databases that do not strictly follow the relational database design and SQL. Advantages and disadvantages will be discussed. Students will be required to work with at least one NoSQL databases and write a program that utilizes it.', credits: '3', instructor: 'Jeffrey Seaman'
	}
}
	app.get('/', function(req, res) {
	res.render('home');
});
app.get('/about', function(req, res) {
	res.render('about', {
		pageTestScript: '/public/qa/tests-about.js'
	});
});
app.get('/courses', function(req, res) {
	res.render('courses');
});
app.get('/contact', function(req, res) {
	res.render('contact');
});
app.get('/games', function(req, res) {
	res.render('games', {
		favorite: favorite.getFavorite(), pageTestScript: '/qa/tests-crosspage.js'
	});
});
app.get('/request-games', function(req, res) {
	res.render('reqgam', {
		pageTestScript: '/qa/tests-crosspage.js'
	});
});
app.use(function(req, res) {
	res.status(404);
	res.render('404');
});
app.use(function(req, res) {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function() {
	console.log( 'Express started on http://localhost:' + app.get('port') + ': press Ctrl + C to terminate.' );
});
