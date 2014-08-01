var error = require('./error');
var utils = require('./utils');

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
  var date = parse(serial_number);
  if (date instanceof Error) {
    return date;
  }
  return date.getDate();
};

exports.DAYS = function(end_date, start_date) {
  end_date = parse(end_date);
  start_date = parse(start_date);
  if (end_date instanceof Error) {
    return end_date;
  }
  if (start_date instanceof Error) {
    return start_date;
  }
  return serial(end_date) - serial(start_date);
};

exports.DAYS360 = function(start_date, end_date, method) {
  method = utils.parseBool(method);
  start_date = parse(start_date);
  end_date = parse(end_date);
  if (start_date instanceof Error) {
    return start_date;
  }
  if (end_date instanceof Error) {
    return end_date;
  }
  if (method instanceof Error) {
    return method;
  }
  var sm = start_date.getMonth();
  var em = end_date.getMonth();
  var sd, ed;
  if (method) {
    sd = start_date.getDate() === 31 ? 30 : start_date.getDate();
    ed = end_date.getDate() === 31 ? 30 : end_date.getDate();
  } else {
    var smd = new Date(start_date.getFullYear(), sm+1, 0).getDate();
    var emd = new Date(end_date.getFullYear(), em+1, 0).getDate();
    sd = start_date.getDate() === smd ? 30 : start_date.getDate();
    if (end_date.getDate() == emd) {
      if (sd < 30) {
        em++;
        ed = 1;
      } else {
        ed = 30;
      }
    } else {
      ed = end_date.getDate();
    }
  }
  return 360 * (end_date.getFullYear() - start_date.getFullYear()) +
         30 * (em - sm) + (ed - sd);
};

exports.EDATE = function(start_date, months) {
  start_date = parse(start_date);
  if (start_date instanceof Error) {
    return start_date;
  }
  if (isNaN(months)) {
    return error.value;
  }
  months = parseInt(months, 10);
  start_date.setMonth(start_date.getMonth() + months);
  return serial(start_date);
};

exports.EOMONTH = function(start_date, months) {
  start_date = parse(start_date);
  if (start_date instanceof Error) {
    return start_date;
  }
  if (isNaN(months)) {
    return error.value;
  }
  months = parseInt(months, 10);
  return serial(new Date(start_date.getFullYear(), start_date.getMonth() + months + 1, 0));
};

function parse(date) {
  if (!isNaN(date)) {
    if (date instanceof Date) {
      return date;
    }
    var d = parseInt(date, 10);
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

function serial(date) {
  if (date <= -2203891200000) {
    return (date - d1900) / 86400000 + 1;
  }
  return (date - d1900) / 86400000 + 2;
}
