var Browser = require('zombie'),
    assert = require('chai').assert;
var browser;

suite('Cross-Page Tests', function(){
    setup(function(){
	browser = new Browser();
    });
    test('requesting a game for XenoWars to play' + 'should populate the referrer field', function(done){
	var referrer = 'http://localhost:3000/games';
	browser.visit(referrer, function(){
	    browser.clickLink('.games', function(){
		assert(browser.field('referrer').value
		        === referrer);
		done();
	    });
	});
    });
    test('visiting the "request games" page dirctly should result ' + 'in an empty referrer field', function(done){
	browser.visit('http://localhost:3000/request-games',
		      function(){
			  Assert(Browser.field('referrer').value === '');
			  done();
		      });
    });
}); 
