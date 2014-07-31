exports.SUM = function () {
  var numbers = arguments;
  var result = 0;
  var i = numbers.length;
  while(i--) {
    result += numbers[i];
  }

  return result;
};