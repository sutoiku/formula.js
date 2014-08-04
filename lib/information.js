exports.ISNUMBER = function(number) {
  return (!isNaN(parseFloat(number)) && isFinite(number)) ? true : false;
};