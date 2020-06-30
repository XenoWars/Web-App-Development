var favorite = require('../modules/favorite.js');
var export = require('chai').expect;

suite('Favorite Game Tests'), function() {
	test('getFavorite() should return a game', function() {
		expect(typeof favorite.getFavorite() === 'string');
	});
});
