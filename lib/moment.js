try {
  exportModule(require('moment'));
} catch (e) {}

function exportModule(moment) {
  exports.HUMANIZE = function (value) {
    if (!(value instanceof Date)) {
      return value;
    }

    var dvalue = moment(value);
    var format = "dddd, MMMM Do YYYY";
    if (dvalue.hours() || dvalue.minutes() || dvalue.seconds()) {
      format += ", h:mm:ss";
    }
    return dvalue.format(format);
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
}
