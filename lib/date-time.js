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
  var date = dateParse(serial_number);
  if (date instanceof Error) {
    return date;
  }
  return date.getDate();
};

exports.DAYS = function(end_date, start_date) {
  end_date = dateParse(end_date);
  start_date = dateParse(start_date);
  if (end_date instanceof Error) {
    return end_date;
  }
  if (start_date instanceof Error) {
    return start_date;
  }
  return dateSerial(end_date) - dateSerial(start_date);
};

function dateParse(date) {
  if (!isNaN(date)) {
    if (date instanceof Date) {
      return date;
    }
    var d = parseInt(date);
    if (d < 0) {
      return error.num;
    }
    if (d <= 60) {
      return new Date(d1900.getTime() + (d - 1) * 86400000);
    }
    return new Date(d1900.getTime() + (d - 2) * 86400000);
  }
  if (typeof date === 'string') {
    date = new Date(date);
    if (!isNaN(date)) {
      return date;
    }
  }
  return error.value;
}

function dateSerial(date) {
  if (date <= -2203891200000) {
    return (date - d1900) / 86400000 + 1;
  }
  return (date - d1900) / 86400000 + 2;
}
