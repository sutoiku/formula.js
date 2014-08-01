var error = require('./error');

var d1900 = new Date(1900, 0, 1);

exports.DATE = function(year, month, day) {
  // TODO: handle string arguments
  if (year < 0 || month < 0 || day < 0) {
    return error.num;
  }
  var date = new Date(year, month - 1, day);
  if (isNaN(date)) {
    return error.value;
  }
  return date;
};

exports.DATEVALUE = function(date_text) {
  if (typeof date_text !== 'string') {
    return error.value;
  }
  var date = Date.parse(date_text);
  if (isNaN(date)) {
    return error.value;
  }
  if (date <= -2203891200000) {
    return (date - d1900) / 86400000 + 1;
  }
  return (date - d1900) / 86400000 + 2;
};

exports.DAY = function(serial_number) {
  if (serial_number instanceof Date && !isNaN(serial_number)) {
    return serial_number.getDate();
  }
  if (!isNaN(serial_number)) {
    var d = parseInt(serial_number);
    if (d < 0) {
      return error.num;
    }
    if (d <= 60) {
      return new Date(d1900.getTime() + (d - 1) * 86400000).getDate();
    }
    return new Date(d1900.getTime() + (d - 2) * 86400000).getDate();
  }
  if (typeof serial_number === 'string') {
    var date = new Date(serial_number);
    if (!isNaN(date)) {
      return date.getDate();
    }
  }
  return error.value;
};
