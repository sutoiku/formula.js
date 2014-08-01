var _ = require('lodash');

exports.flatten = function() {
	return _.flatten(arguments);
};

exports.numbers = function() {
	var possibleNumbers = exports.flatten(arguments);
	return possibleNumbers.filter(function(el) {
		return typeof el === 'number';
	});
};