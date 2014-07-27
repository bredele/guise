
/**
 * Test dependencies.
 */

var assert = require('assert');
var guise = require('..');

describe("format/filter data", function() {

	it('should filter with function', function() {
		var format = guise(function(str) {
			return str.toUpperCase();
		});

		assert.equal(format('hello'), 'HELLO');
	});

	it('should accept multiple arguments', function() {
		var format = guise(function(str, other) {
			return str.toUpperCase() + other;
		});

		assert.equal(format('hello', ' world!'), 'HELLO world!');
	});

	it('should filter with multiple functions', function() {
		var format = guise(function(str) {
			return str.toUpperCase();
		}, function(result) {
			return result + ' world!';
		});

		assert.equal(format('hello'), 'HELLO world!');
	});

});
