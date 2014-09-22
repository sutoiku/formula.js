var error = require('./error');
var utils = require('./utils');

var d1900 = new Date(1900, 0, 1);
var WEEK_STARTS = [
  undefined,
  0,
  1,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  1,
  2,
  3,
  4,
  5,
  6,
  0
];
var WEEK_TYPES = [
  [],
  [1, 2, 3, 4, 5, 6, 7],
  [7, 1, 2, 3, 4, 5, 6],
  [6, 0, 1, 2, 3, 4, 5],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [7, 1, 2, 3, 4, 5, 6],
  [6, 7, 1, 2, 3, 4, 5],
  [5, 6, 7, 1, 2, 3, 4],
  [4, 5, 6, 7, 1, 2, 3],
  [3, 4, 5, 6, 7, 1, 2],
  [2, 3, 4, 5, 6, 7, 1],
  [1, 2, 3, 4, 5, 6, 7]
];
var WEEKEND_TYPES = [
  [],
  [6, 0],
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  undefined,
  undefined,
  undefined, [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
  [6, 6]
];

exports.DATE = function(year, month, day) {
  year = utils.parseNumber(year);
  month = utils.parseNumber(month);
  day = utils.parseNumber(day);
  if (utils.anyIsError(year, month, day)) {
    return error.value;
  }
  if (year < 0 || month < 0 || day < 0) {
    return error.num;
  }
  var date = new Date(year, month - 1, day);
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
  var date = utils.parseDate(serial_number);
  if (date instanceof Error) {
    return date;
  }
  return date.getDate();
};

exports.DAYS = function(end_date, start_date) {
  end_date = utils.parseDate(end_date);
  start_date = utils.parseDate(start_date);
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
  start_date = utils.parseDate(start_date);
  end_date = utils.parseDate(end_date);
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
    var smd = new Date(start_date.getFullYear(), sm + 1, 0).getDate();
    var emd = new Date(end_date.getFullYear(), em + 1, 0).getDate();
    sd = start_date.getDate() === smd ? 30 : start_date.getDate();
    if (end_date.getDate() === emd) {
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
  start_date = utils.parseDate(start_date);
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
  start_date = utils.parseDate(start_date);
  if (start_date instanceof Error) {
    return start_date;
  }
  if (isNaN(months)) {
    return error.value;
  }
  months = parseInt(months, 10);
  return serial(new Date(start_date.getFullYear(), start_date.getMonth() + months + 1, 0));
};

exports.HOUR = function(serial_number) {
  serial_number = utils.parseDate(serial_number);
  if (serial_number instanceof Error) {
    return serial_number;
  }
  return serial_number.getHours();
};

exports.INTERVAL = function (second) {
  if (typeof second !== 'number' && typeof second !== 'string') {
    return error.value;
  } else {
    second = parseInt(second, 10);
  }

  var year  = Math.floor(second/946080000);
  second    = second%946080000;
  var month = Math.floor(second/2592000);
  second    = second%2592000;
  var day   = Math.floor(second/86400);
  second    = second%86400;

  var hour  = Math.floor(second/3600);
  second    = second%3600;
  var min   = Math.floor(second/60);
  second    = second%60;
  var sec   = second;

  year  = (year  > 0) ? year  + 'Y' : '';
  month = (month > 0) ? month + 'M' : '';
  day   = (day   > 0) ? day   + 'D' : '';
  hour  = (hour  > 0) ? hour  + 'H' : '';
  min   = (min   > 0) ? min   + 'M' : '';
  sec   = (sec   > 0) ? sec   + 'S' : '';

  return 'P' + year + month + day +
  'T' + hour + min + sec;
};

exports.ISOWEEKNUM = function(date) {
  date = utils.parseDate(date);
  if (date instanceof Error) {
    return date;
  }

  date.setHours(0, 0, 0);
  date.setDate(date.getDate() + 4 - (date.getDay() || 7));
  var yearStart = new Date(date.getFullYear(), 0, 1);
  return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
};

exports.MINUTE = function(serial_number) {
  serial_number = utils.parseDate(serial_number);
  if (serial_number instanceof Error) {
    return serial_number;
  }
  return serial_number.getMinutes();
};

exports.MONTH = function(serial_number) {
  serial_number = utils.parseDate(serial_number);
  if (serial_number instanceof Error) {
    return serial_number;
  }
  return serial_number.getMonth() + 1;
};

exports.NETWORKDAYS = function(start_date, end_date, holidays) {
  return this.NETWORKDAYS.INTL(start_date, end_date, 1, holidays);
};

exports.NETWORKDAYS.INTL = function(start_date, end_date, weekend, holidays) {
  start_date = utils.parseDate(start_date);
  if (start_date instanceof Error) {
    return start_date;
  }
  end_date = utils.parseDate(end_date);
  if (end_date instanceof Error) {
    return end_date;
  }
  if (weekend === undefined) {
    weekend = WEEKEND_TYPES[1];
  } else {
    weekend = WEEKEND_TYPES[weekend];
  }
  if (!(weekend instanceof Array)) {
    return error.value;
  }
  if (holidays === undefined) {
    holidays = [];
  } else if (!(holidays instanceof Array)) {
    holidays = [holidays];
  }
  for (var i = 0; i < holidays.length; i++) {
    var h = utils.parseDate(holidays[i]);
    if (h instanceof Error) {
      return h;
    }
    holidays[i] = h;
  }
  var days = (end_date - start_date) / (1000 * 60 * 60 * 24) + 1;
  var total = days;
  var day = start_date;
  for (i = 0; i < days; i++) {
    var d = (new Date().getTimezoneOffset() > 0) ? day.getUTCDay() : day.getDay();
    var dec = false;
    if (d === weekend[0] || d === weekend[1]) {
      dec = true;
    }
    for (var j = 0; j < holidays.length; j++) {
      var holiday = holidays[j];
      if (holiday.getDate() === day.getDate() &&
        holiday.getMonth() === day.getMonth() &&
        holiday.getFullYear() === day.getFullYear()) {
        dec = true;
        break;
      }
    }
    if (dec) {
      total--;
    }
    day.setDate(day.getDate() + 1);
  }
  return total;
};

exports.NOW = function() {
  return new Date();
};

exports.SECOND = function(serial_number) {
  serial_number = utils.parseDate(serial_number);
  if (serial_number instanceof Error) {
    return serial_number;
  }
  return serial_number.getSeconds();
};

exports.TIME = function(hour, minute, second) {
  hour = utils.parseNumber(hour);
  minute = utils.parseNumber(minute);
  second = utils.parseNumber(second);
  if (utils.anyIsError(hour, minute, second)) {
    return error.value;
  }
  if (hour < 0 || minute < 0 || second < 0) {
    return error.num;
  }
  return (3600 * hour + 60 * minute + second) / 86400;
};

exports.TIMEVALUE = function(time_text) {
  time_text = utils.parseDate(time_text);
  if (time_text instanceof Error) {
    return time_text;
  }
  return (3600 * time_text.getHours() +
    60 * time_text.getMinutes() +
    time_text.getSeconds()) / 86400;
};

exports.TODAY = function() {
  return new Date();
};

exports.WEEKDAY = function(serial_number, return_type) {
  serial_number = utils.parseDate(serial_number);
  if (serial_number instanceof Error) {
    return serial_number;
  }
  if (return_type === undefined) {
    return_type = 1;
  }
  var day = serial_number.getDay();
  return WEEK_TYPES[return_type][day];
};

exports.WEEKNUM = function(serial_number, return_type) {
  serial_number = utils.parseDate(serial_number);
  if (serial_number instanceof Error) {
    return serial_number;
  }
  if (return_type === undefined) {
    return_type = 1;
  }
  if (return_type === 21) {
    return this.ISOWEEKNUM(serial_number);
  }
  var week_start = WEEK_STARTS[return_type];
  var jan = new Date(serial_number.getFullYear(), 0, 1);
  var inc = jan.getDay() < week_start ? 1 : 0;
  jan -= Math.abs(jan.getDay() - week_start) * 24 * 60 * 60 * 1000;
  return Math.floor(((serial_number - jan) / (1000 * 60 * 60 * 24)) / 7 + 1) + inc;
};

exports.WORKDAY = function(start_date, days, holidays) {
  return this.WORKDAY.INTL(start_date, days, 1, holidays);
};

exports.WORKDAY.INTL = function(start_date, days, weekend, holidays) {
  start_date = utils.parseDate(start_date);
  if (start_date instanceof Error) {
    return start_date;
  }
  days = utils.parseNumber(days);
  if (days instanceof Error) {
    return days;
  }
  if (days < 0) {
    return error.num;
  }
  if (weekend === undefined) {
    weekend = WEEKEND_TYPES[1];
  } else {
    weekend = WEEKEND_TYPES[weekend];
  }
  if (!(weekend instanceof Array)) {
    return error.value;
  }
  if (holidays === undefined) {
    holidays = [];
  } else if (!(holidays instanceof Array)) {
    holidays = [holidays];
  }
  for (var i = 0; i < holidays.length; i++) {
    var h = utils.parseDate(holidays[i]);
    if (h instanceof Error) {
      return h;
    }
    holidays[i] = h;
  }
  var d = 0;
  while (d < days) {
    start_date.setDate(start_date.getDate() + 1);
    var day = start_date.getDay();
    if (day === weekend[0] || day === weekend[1]) {
      continue;
    }
    for (var j = 0; j < holidays.length; j++) {
      var holiday = holidays[j];
      if (holiday.getDate() === start_date.getDate() &&
        holiday.getMonth() === start_date.getMonth() &&
        holiday.getFullYear() === start_date.getFullYear()) {
        d--;
        break;
      }
    }
    d++;
  }
  return start_date;
};

exports.YEAR = function(serial_number) {
  serial_number = utils.parseDate(serial_number);
  if (serial_number instanceof Error) {
    return serial_number;
  }
  return serial_number.getFullYear();
};

function isLeapYear(year) {
  return new Date(year, 1, 29).getMonth() === 1;
}

// TODO : Use DAYS ?
function daysBetween(start_date, end_date) {
  return Math.ceil((end_date - start_date) / 1000 / 60 / 60 / 24);
}

exports.YEARFRAC = function(start_date, end_date, basis) {
  start_date = utils.parseDate(start_date);
  if (start_date instanceof Error) {
    return start_date;
  }
  end_date = utils.parseDate(end_date);
  if (end_date instanceof Error) {
    return end_date;
  }

  basis = basis || 0;
  var sd = start_date.getDate();
  var sm = start_date.getMonth() + 1;
  var sy = start_date.getFullYear();
  var ed = end_date.getDate();
  var em = end_date.getMonth() + 1;
  var ey = end_date.getFullYear();

  switch (basis) {
    case 0:
      // US (NASD) 30/360
      if (sd === 31 && ed === 31) {
        sd = 30;
        ed = 30;
      } else if (sd === 31) {
        sd = 30;
      } else if (sd === 30 && ed === 31) {
        ed = 30;
      }
      return ((ed + em * 30 + ey * 360) - (sd + sm * 30 + sy * 360)) / 360;
    case 1:
      // Actual/actual
      var feb29Between = function(date1, date2) {
        var year1 = date1.getFullYear();
        var mar1year1 = new Date(year1, 2, 1);
        if (isLeapYear(year1) && date1 < mar1year1 && date2 >= mar1year1) {
          return true;
        }
        var year2 = date2.getFullYear();
        var mar1year2 = new Date(year2, 2, 1);
        return (isLeapYear(year2) && date2 >= mar1year2 && date1 < mar1year2);
      };
      var ylength = 365;
      if (sy === ey || ((sy + 1) === ey) && ((sm > em) || ((sm === em) && (sd >= ed)))) {
        if ((sy === ey && isLeapYear(sy)) ||
            feb29Between(start_date, end_date) ||
            (em === 1 && ed === 29)) {
          ylength = 366;
        }
        return daysBetween(start_date, end_date) / ylength;
      }
      var years = (ey - sy) + 1;
      var days = (new Date(ey + 1, 0, 1) - new Date(sy, 0, 1)) / 1000 / 60 / 60 / 24;
      var average = days / years;
      return daysBetween(start_date, end_date) / average;
    case 2:
      // Actual/360
      return daysBetween(start_date, end_date) / 360;
    case 3:
      // Actual/365
      return daysBetween(start_date, end_date) / 365;
    case 4:
      // European 30/360
      return ((ed + em * 30 + ey * 360) - (sd + sm * 30 + sy * 360)) / 360;
  }
};

function serial(date) {
  var addOn = (date > -2203891200000)?2:1;
  return (date - d1900) / 86400000 + addOn;
}