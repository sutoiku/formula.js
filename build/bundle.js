!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Formula=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var categories = [
  require('./lib/compatibility'),
  require('./lib/database'),
  require('./lib/engineering'),
  require('./lib/logical'),
  require('./lib/math-trig'),
  require('./lib/text'),
  require('./lib/cube'),
  require('./lib/date-time'),
  require('./lib/finantial'),
  require('./lib/information'),
  require('./lib/lookup-reference'),
  require('./lib/statistical'),
  require('./lib/web'),
];

for (var c in categories) {
	var category = categories[c];
	for (var f in category) {
		exports[f] = category[f];
	}
}
},{"./lib/compatibility":2,"./lib/cube":3,"./lib/database":4,"./lib/date-time":5,"./lib/engineering":6,"./lib/finantial":7,"./lib/information":8,"./lib/logical":9,"./lib/lookup-reference":10,"./lib/math-trig":11,"./lib/statistical":12,"./lib/text":13,"./lib/web":14}],2:[function(require,module,exports){
// aliases
},{}],3:[function(require,module,exports){

},{}],4:[function(require,module,exports){
module.exports=require(3)
},{}],5:[function(require,module,exports){
module.exports=require(3)
},{}],6:[function(require,module,exports){
module.exports=require(3)
},{}],7:[function(require,module,exports){
module.exports=require(3)
},{}],8:[function(require,module,exports){
module.exports=require(3)
},{}],9:[function(require,module,exports){
module.exports=require(3)
},{}],10:[function(require,module,exports){
module.exports=require(3)
},{}],11:[function(require,module,exports){
exports.SUM = function () {
  var numbers = arguments;
  var result = 0;
  var i = numbers.length;
  while(i--) {
    result += numbers[i];
  }

  return result;
};
},{}],12:[function(require,module,exports){
module.exports=require(3)
},{}],13:[function(require,module,exports){
module.exports=require(3)
},{}],14:[function(require,module,exports){
module.exports=require(3)
},{}]},{},[1])(1)
});