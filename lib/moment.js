var moment = require('moment');

exports.HUMANIZE = function (value) {
  if (!(value instanceof Date)) {
    return value;
  }

  var dvalue = moment(value);
  var format = "dddd, MMMM Do YYYY";
  if (dvalue.hours() || dvalue.minutes() || dvalue.seconds()) {
    format += ", h:mm:ss";
  }
  return dvalue.format();
};

exports.FROMNOW = function (timestamp, nosuffix) {
  return moment(new Date(timestamp)).fromNow(nosuffix);
};

exports.MOMENT = function (timestamp, format) {
  return moment(timestamp).format(format);
};

exports.MOMENTADD = function (start_date, period, number) {
  return moment(start_date).add(period, number);
};

exports.MOMENTDIFF = function (start_date, end_date, period) {
  return moment(end_date).diff(moment.utc(start_date), period);
};

exports.MOMENTSUB = function (start_date, period, number) {
  return moment(start_date).subtract(period, number);
};

exports.MOMENTUTC = function (timestamp, format) {
  return moment.utc(timestamp).format(format);
};

exports.MOMENTUTCADD = function (start_date, period, number) {
  return moment.utc(start_date).add(period, number);
};

exports.MOMENTUTCDIFF = function (start_date, end_date, period) {
  return moment.utc(end_date).diff(moment.utc(start_date), period);
};

exports.MOMENTUTCSUB = function (start_date, period, number) {
  return moment.utc(start_date).subtract(period, number);
};

exports.MOMENTUNIX = function (unixTime) {
  return moment.unix(unixTime).toDate();
};

exports.MOMENTFORMAT = function (date, format) {
  return moment(date).format(format);
};

exports.MOMENTISLEAPYEAR = function (date, format) {
  return moment(date, format).isLeapYear();
};

exports.MOMENTISDST = function (date, format) {
  return moment(date, format).isDST();
};

exports.MOMENTSTARTOF = function (date, units, format) {
  return moment(date, format).startOf(units).toDate();
};

exports.MOMENTENDOF = function (date, units, format) {
  return moment(date, format).endOf(units).toDate();
};

exports.MOMENTISAFTER = function (date1, date2, format) {
  return moment(date1, format).isAfter(moment(date2, format));
};

exports.MOMENTISBEFORE = function (date1, date2, format) {
  return moment(date1, format).isBefore(moment(date2, format));
};

exports.INTERVAL = function (second) {
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