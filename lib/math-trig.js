var numeric = require('numeric');
var utils = require('./utils');
var error = require('./error');
var statistical = require('./statistical');
var information = require('./information');

exports.ABS = function(number) {
  return Math.abs(number);
};

exports.ACOS = function(number) {
  return Math.acos(number);
};

exports.ACOSH = function(number) {
  return Math.log(number + Math.sqrt(number * number - 1));
};

exports.ACOT = function(number) {
  return Math.atan(1 / number);
};

exports.ACOTH = function(number) {
  return 0.5 * Math.log((number + 1) / (number - 1));
};

exports.AGGREGATE = function(function_num, options, ref1, ref2) {
  switch (function_num) {
    case 1:
      return statistical.AVERAGE(ref1);
    case 2:
      return statistical.COUNT(ref1);
    case 3:
      return statistical.COUNTA(ref1);
    case 4:
      return statistical.MAX(ref1);
    case 5:
      return statistical.MIN(ref1);
    case 6:
      return exports.PRODUCT(ref1);
    case 7:
      return statistical.STDEV.S(ref1);
    case 8:
      return statistical.STDEV.P(ref1);
    case 9:
      return exports.SUM(ref1);
    case 10:
      return statistical.VARS(ref1);
    case 11:
      return statistical.VARP(ref1);
    case 12:
      return statistical.MEDIAN(ref1);
    case 13:
      return statistical.MODE.SNGL(ref1);
    case 14:
      return statistical.LARGE(ref1, ref2);
    case 15:
      return statistical.SMALL(ref1, ref2);
    case 16:
      return statistical.PERCENTILEINC(ref1, ref2);
    case 17:
      return statistical.QUARTILE.INC(ref1, ref2);
    case 18:
      return statistical.PERCENTILEEXC(ref1, ref2);
    case 19:
      return statistical.QUARTILE.EXC(ref1, ref2);
  }
};

exports.ARABIC = function(text) {
  // Credits: Rafa? Kukawski
  if (!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(text)) {
    return error.value;
  }
  var r = 0;
  text.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, function(i) {
    r += {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }[i];
  });
  return r;
};

exports.ASIN = function(number) {
  return Math.asin(number);
};

exports.ASINH = function(number) {
  return Math.log(number + Math.sqrt(number * number + 1));
};

exports.ATAN = function(number) {
  return Math.atan(number);
};

exports.ATAN2 = function(number_x, number_y) {
  return Math.atan2(number_x, number_y);
};

exports.ATANH = function(number) {
  return Math.log((1 + number) / (1 - number)) / 2;
};

exports.BASE = function(number, radix, min_length) {
  min_length = (min_length === undefined) ? 0 : min_length;
  var result = number.toString(radix);
  return new Array(Math.max(min_length + 1 - result.length, 0)).join('0') + result;
};

exports.CEILING = function(number, significance, mode) {
  if (significance === 0) {
    return 0;
  }
  significance = (significance === undefined) ? 1 : Math.abs(significance);
  mode = (mode === undefined) ? 0 : mode;
  var precision = -Math.floor(Math.log(significance) / Math.log(10));
  if (number >= 0) {
    return exports.ROUND(Math.ceil(number / significance) * significance, precision);
  } else {
    if (mode === 0) {
      return -exports.ROUND(Math.floor(Math.abs(number) / significance) * significance, precision);
    } else {
      return -exports.ROUND(Math.ceil(Math.abs(number) / significance) * significance, precision);
    }
  }
};

exports.CEILING.MATH = exports.CEILING;

exports.CEILING.PRECISE = exports.CEILING;

exports.COMBIN = function(number, number_chosen) {
  return exports.FACT(number) / (exports.FACT(number_chosen) * exports.FACT(number - number_chosen));
};

exports.COMBINA = function(number, number_chosen) {
  return (number === 0 && number_chosen === 0) ? 1 : exports.COMBIN(number + number_chosen - 1, number - 1);
};

exports.COS = function(number) {
  return Math.cos(number);
};

exports.COSH = function(number) {
  return (Math.exp(number) + Math.exp(-number)) / 2;
};

exports.COT = function(number) {
  return 1 / Math.tan(number);
};

exports.COTH = function(number) {
  var e2 = Math.exp(2 * number);
  return (e2 + 1) / (e2 - 1);
};

exports.CSC = function(number) {
  return 1 / Math.sin(number);
};

exports.CSCH = function(number) {
  return 2 / (Math.exp(number) - Math.exp(-number));
};

exports.DECIMAL = function(number, radix) {
  return parseInt(number, radix);
};

exports.DEGREES = function(number) {
  return number * 180 / Math.PI;
};

exports.EVEN = function(number) {
  return exports.CEILING(number, -2, -1);
};

exports.EXP = Math.exp;

var MEMOIZED_FACT = [];
exports.FACT = function(number) {
  var n = Math.floor(number);
  if (n === 0 || n === 1) {
    return 1;
  } else if (MEMOIZED_FACT[n] > 0) {
    return MEMOIZED_FACT[n];
  } else {
    MEMOIZED_FACT[n] = exports.FACT(n - 1) * n;
    return MEMOIZED_FACT[n];
  }
};

exports.FACTDOUBLE = function(number) {
  var n = Math.floor(number);
  if (n <= 0) {
    return 1;
  } else {
    return n * exports.FACTDOUBLE(n - 2);
  }
};

exports.FLOOR = function(number, significance) {
  if (significance === 0) {
    return 0;
  }

  if (!(number > 0 && significance > 0) && !(number < 0 && significance < 0)) {
    return error.num;
  }

  significance = significance ? Math.abs(significance) : 1;
  var precision = -Math.floor(Math.log(significance) / Math.log(10));
  if (number >= 0) {
    return exports.ROUND(Math.floor(number / significance) * significance, precision);
  } else {
    return -exports.ROUND(Math.ceil(Math.abs(number) / significance), precision);
  }
};

//TODO: Verify
exports.FLOOR.MATH = function(number, significance, mode) {
  if (significance === 0) {
    return 0;
  }

  significance = significance ? Math.abs(significance) : 1;
  var precision = -Math.floor(Math.log(significance) / Math.log(10));
  if (number >= 0) {
    return exports.ROUND(Math.floor(number / significance) * significance, precision);
  } else if (mode === 0 || mode === undefined) {
    return -exports.ROUND(Math.ceil(Math.abs(number) / significance) * significance, precision);
  }
  return -exports.ROUND(Math.floor(Math.abs(number) / significance) * significance, precision);
};

exports.FLOOR.PRECISE = function(number, significance) {
  if (significance === 0) {
    return 0;
  }

  significance = significance ? Math.abs(significance) : 1;
  var precision = -Math.floor(Math.log(significance) / Math.log(10));
  if (number >= 0) {
    return exports.ROUND(Math.round(number / significance) * significance, precision);
  }
  return -exports.ROUND(Math.ceil(Math.abs(number) / significance) * significance, precision);
};

// adapted http://rosettacode.org/wiki/Greatest_common_divisor#JavaScript
exports.GCD = function() {
  var range = utils.flatten(arguments);
  var n = range.length;
  var r0 = range[0];
  var x = r0 < 0 ? -r0 : r0;
  for (var i = 1; i < n; i++) {
    var ri = range[i];
    var y = ri < 0 ? -ri : ri;
    while (x && y) {
      if (x > y) {
        x %= y;
      } else {
        y %= x;
      }
    }
    x += y;
  }
  return x;
};


exports.INT = function(number) {
  return Math.floor(number);
};

//TODO: verify
exports.ISO = {
  CEILING: exports.CEILING
};

exports.LCM = function() {
  // Credits: Jonas Raoni Soares Silva
  var o = utils.flatten(arguments);
  for (var i, j, n, d, r = 1;
    (n = o.pop()) !== undefined;) {
    while (n > 1) {
      if (n % 2) {
        for (i = 3, j = Math.floor(Math.sqrt(n)); i <= j && n % i; i += 2) {
          //empty
        }
        d = (i <= j) ? i : n;
      } else {
        d = 2;
      }
      for (n /= d, r *= d, i = o.length; i;
        (o[--i] % d) === 0 && (o[i] /= d) === 1 && o.splice(i, 1)) {
        //empty
      }
    }
  }
  return r;
};

exports.LN = function(number) {
  return Math.log(number);
};

exports.LOG = function(number, base) {
  base = (base === undefined) ? 10 : base;
  return Math.log(number) / Math.log(base);
};

exports.LOG10 = function(number) {
  return Math.log(number) / Math.log(10);
};

exports.MDETERM = numeric.det;

exports.MINVERSE = numeric.inv;

exports.MMULT = numeric.dot;

exports.MOD = function(dividend, divisor) {
  if (divisor === 0) {
    return error.div0;
  }
  var modulus = Math.abs(dividend % divisor);
  return (divisor > 0) ? modulus : -modulus;
};

exports.MROUND = function(number, multiple) {
  if (number * multiple < 0) {
    return error.num;
  }

  return Math.round(number / multiple) * multiple;
};

exports.MULTINOMIAL = function() {
  var sum = 0;
  var divisor = 1;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
    divisor *= exports.FACT(arguments[i]);
  }
  return exports.FACT(sum) / divisor;
};

exports.MUNIT = numeric.identity;

exports.ODD = function(number) {
  var temp = Math.ceil(Math.abs(number));
  temp = (temp & 1) ? temp : temp + 1;
  return (number > 0) ? temp : -temp;
};

exports.PI = function() {
  return Math.PI;
};

exports.POWER = function(number, power) {
  var result = Math.pow(number, power);
  if (isNaN(result)) {
    return error.num;
  }

  return result;
};

exports.PRODUCT = function() {
  var args = utils.flatten(arguments);
  var result = 1;
  for (var i = 0; i < args.length; i++) {
    result *= args[i];
  }
  return result;
};

exports.QUOTIENT = function(numerator, denominator) {
  return parseInt(numerator / denominator, 10);
};

exports.RADIANS = function(number) {
  return number * Math.PI / 180;
};

exports.RAND = function() {
  return Math.random();
};

exports.RANDBETWEEN = function(bottom, top) {
  // Creative Commons Attribution 3.0 License
  // Copyright (c) 2012 eqcode
  return bottom + Math.ceil((top - bottom + 1) * Math.random()) - 1;
};

// TODO
exports.ROMAN = function(number) {
  // The MIT License
  // Copyright (c) 2008 Steven Levithan
  var digits = String(number).split('');
  var key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  var roman = '';
  var i = 3;
  while (i--) {
    roman = (key[+digits.pop() + (i * 10)] || '') + roman;
  }
  return new Array(+digits.join('') + 1).join('M') + roman;
};

exports.ROUND = function(number, digits) {
  return Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits);
};

exports.ROUNDDOWN = function(number, digits) {
  var sign = (number > 0) ? 1 : -1;
  return sign * (Math.floor(Math.abs(number) * Math.pow(10, digits))) / Math.pow(10, digits);
};

exports.ROUNDUP = function(number, digits) {
  var sign = (number > 0) ? 1 : -1;
  return sign * (Math.ceil(Math.abs(number) * Math.pow(10, digits))) / Math.pow(10, digits);
};

exports.SEC = function(number) {
  return 1 / Math.cos(number);
};

exports.SECH = function(number) {
  return 2 / (Math.exp(number) + Math.exp(-number));
};

exports.SERIESSUM = function(x, n, m, coefficients) {
  var result = coefficients[0] * Math.pow(x, n);
  for (var i = 1; i < coefficients.length; i++) {
    result += coefficients[i] * Math.pow(x, n + i * m);
  }
  return result;
};

exports.SIGN = function(number) {
  if (number < 0) {
    return -1;
  } else if (number === 0) {
    return 0;
  } else {
    return 1;
  }
};

exports.SIN = Math.sin;

exports.SINH = function(number) {
  return (Math.exp(number) - Math.exp(-number)) / 2;
};

exports.SQRT = Math.sqrt;

exports.SQRTPI = function(number) {
  return Math.sqrt(number * Math.PI);
};

exports.SUBTOTAL = function(function_code, ref1) {
  switch (function_code) {
    case 1:
      return statistical.AVERAGE(ref1);
    case 2:
      return statistical.COUNT(ref1);
    case 3:
      return statistical.COUNTA(ref1);
    case 4:
      return statistical.MAX(ref1);
    case 5:
      return statistical.MIN(ref1);
    case 6:
      return exports.PRODUCT(ref1);
    case 7:
      return statistical.STDEV.S(ref1);
    case 8:
      return statistical.STDEV.P(ref1);
    case 9:
      return exports.SUM(ref1);
    case 10:
      return statistical.VARS(ref1);
    case 11:
      return statistical.VARP(ref1);
      // no hidden values for us
    case 101:
      return statistical.AVERAGE(ref1);
    case 102:
      return statistical.COUNT(ref1);
    case 103:
      return statistical.COUNTA(ref1);
    case 104:
      return statistical.MAX(ref1);
    case 105:
      return statistical.MIN(ref1);
    case 106:
      return exports.PRODUCT(ref1);
    case 107:
      return statistical.STDEV.S(ref1);
    case 108:
      return statistical.STDEV.P(ref1);
    case 109:
      return exports.SUM(ref1);
    case 110:
      return statistical.VARS(ref1);
    case 111:
      return statistical.VARP(ref1);

  }
};

exports.SUM = function() {
  var numbers = utils.flatten(arguments);
  var result = 0;
  var i = numbers.length;
  while (i--) {
    result += numbers[i];
  }

  return result;
};

exports.SUMIF = function(range, criteria) {
  range = utils.flatten(range);
  var result = 0;
  for (var i = 0; i < range.length; i++) {
    result += (eval(range[i] + criteria)) ? range[i] : 0;
  }
  return result;
};

exports.SUMIFS = function() {
  var args = utils.argsToArray(arguments);
  var range = utils.flatten(args.shift());
  var criteria = args;

  var n_range_elements = range.length;
  var n_criterias = criteria.length;

  var result = 0;
  for (var i = 0; i < n_range_elements; i++) {
    var el = range[i];
    var condition = '';
    for (var c = 0; c < n_criterias; c++) {
      condition += el + criteria[c];
      if (c !== n_criterias - 1) {
        condition += '&&';
      }
    }
    if (eval(condition)) {
      result += el;
    }
  }
  return result;
};

exports.SUMPRODUCT = function() {
  var arrays = arguments.length + 1;
  var result = 0;
  for (var i = 0; i < arguments[0].length; i++) {
    for (var j = 0; j < arguments[0][i].length; j++) {
      var product = 1;
      for (var k = 1; k < arrays; k++) {
        product *= arguments[k - 1][i][j];
      }
      result += product;
    }
  }
  return result;
};

exports.SUMSQ = function() {
  var numbers = utils.flatten(arguments);
  var result = 0;
  var length = numbers.length;
  for (var i = 0; i < length; i++) {
    result += (information.ISNUMBER(numbers[i])) ? numbers[i] * numbers[i] : 0;
  }
  return result;
};

exports.SUMX2MY2 = function(array_x, array_y) {
  var result = 0;
  array_x = utils.flatten(array_x);
  array_y = utils.flatten(array_y);
  for (var i = 0; i < array_x.length; i++) {
    result += array_x[i] * array_x[i] - array_y[i] * array_y[i];
  }
  return result;
};

exports.SUMX2PY2 = function(array_x, array_y) {
  var result = 0;
  array_x = utils.flatten(array_x);
  array_y = utils.flatten(array_y);
  for (var i = 0; i < array_x.length; i++) {
    result += array_x[i] * array_x[i] + array_y[i] * array_y[i];
  }
  return result;
};

exports.SUMXMY2 = function(array_x, array_y) {
  var result = 0;
  array_x = utils.flatten(array_x);
  array_y = utils.flatten(array_y);
  for (var i = 0; i < array_x.length; i++) {
    result += Math.pow(array_x[i] - array_y[i], 2);
  }
  return result;
};

exports.TAN = function(number) {
  return Math.tan(number);
};

exports.TANH = function(number) {
  var e2 = Math.exp(2 * number);
  return (e2 - 1) / (e2 + 1);
};

exports.TRUNC = function(number, digits) {
  digits = (digits === undefined) ? 0 : digits;
  var sign = (number > 0) ? 1 : -1;
  return sign * (Math.floor(Math.abs(number) * Math.pow(10, digits))) / Math.pow(10, digits);
};