

/**
 * Guise.
 * 
 * @param {Function}
 * @return {Function}
 * @api public
 */

module.exports = function() {
	var args = arguments;
	return function() {
		var results = args[0].apply(null, arguments);
		for(var i = 1, l = args.length; i < l; i++) {
			results = args[i](results);
		}
		return results;
	};
};

