var _ = require('lodash');
var utils = require('./utils');
var md5 = require('blueimp-md5').md5;
var numeral = require('numeral');

exports.UNIQUE = function () {
  return _.unique(arguments);
};

exports.FLATTEN = function () {
  return utils.flatten(arguments);
};

// Generate a callback function
exports.FUNCTION = function () {
  var args = Array.prototype.slice.call(arguments);
  var expression = args[args.length - 1];
  var self = this;
  var regexp = /(\w+)\(/g;
  var newExpression = expression.replace(regexp, function () {
    return "self." + arguments[0];
  });

  args[args.length - 1] = "return " + newExpression + ";";
  if (newExpression !== expression) {
    args.unshift('self');
  }

  return  Function.apply(null, args);
};

// Custom Functions
exports.ARGS2ARRAY = function () {
  return Array.prototype.slice.call(arguments, 0);
};

exports.GETJSON = function (file) {
  var request = new XMLHttpRequest();
  request.open('GET', file, false);
  request.send(null);
  if (request.status === 200) {
    return JSON.parse(request.responseText);
  }
};

exports.MD5 = function (data, key, raw) {
  return md5(data, key, raw);
};

exports.REFERENCE = function (context, reference) {
  try {
    var path = reference.split('.');
    var result = context;
    _(path).forEach(function (step) {
      if (step[step.length - 1] === ']') {
        var opening = step.indexOf('[');
        var index = step.substring(opening + 1, step.length - 1);
        result = result[step.substring(0, opening)][index];
      } else {
        result = result[step];
      }
    });
    return result;
  } catch (error) {
    return;
  }
};

exports.JOIN = function (array, separator) {
  return array.join(separator);
};

exports.NUMBERS = function () {
  var possibleNumbers = utils.flatten(arguments);
  return possibleNumbers.filter(function (el) {
    return typeof el === 'number';
  });
};

exports.NUMERAL = function (number, format) {
  return numeral(number).format(format);
};





