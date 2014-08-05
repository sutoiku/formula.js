var error = require('./error');
var dateTime = require('./date-time');
var utils = require('./utils');

exports.ACCRINT = function(issue, first, settlement, rate, par, frequency, basis, method) {
  // Return error if either date is invalid
  issue = utils.parseDate(issue);
  first = utils.parseDate(first);
  settlement = utils.parseDate(settlement);

  if (issue instanceof Error || first instanceof Error || settlement instanceof Error) {
    return error.value;
  }

  // Return error if either rate or par are lower than or equal to zero
  if (rate <= 0 || par <= 0) {
    return error.num;
  }

  // Return error if frequency is neither 1, 2, or 4
  if ([1, 2, 4].indexOf(frequency) === -1) {
    return error.num;
  }

  // Return error if basis is neither 0, 1, 2, 3, or 4
  if ([0, 1, 2, 3, 4].indexOf(basis) === -1) {
    return error.num;
  }

  // Return error if issue greater than or equal to settlement
  if (issue >= settlement) {
    console.log(1);
    return error.num;
  }

  // Set default values
  par = par || 0;
  basis = basis || 0;
  method = method || true;

  // Compute accrued interest
  var factor = 0;
  switch (basis) {
    case 0:
      // US (NASD) 30/360
      factor = dateTime.YEARFRAC(issue, settlement, basis);
      break;
    case 1:
      // Actual/actual
      factor = dateTime.YEARFRAC(issue, settlement, basis);
      break;
    case 2:
      // Actual/360
      factor = dateTime.YEARFRAC(issue, settlement, basis);
      break;
    case 3:
      // Actual/365
      factor = dateTime.YEARFRAC(issue, settlement, basis);
      break;
    case 4:
      // European 30/360
      factor = dateTime.YEARFRAC(issue, settlement, basis);
      break;
  }
  return par * rate * factor;
};

// TODO
exports.ACCRINTM = function() {
  return;
};

// TODO
exports.AMORDEGRC = function() {
  return;
};

// TODO
exports.AMORLINC = function() {
  return;
};

// TODO
exports.COUPDAYBS = function() {
  return;
};

// TODO
exports.COUPDAYS = function() {
  return;
};

// TODO
exports.COUPDAYSNC = function() {
  return;
};

// TODO
exports.COUPNCD = function() {
  return;
};

// TODO
exports.COUPNUM = function() {
  return;
};

// TODO
exports.COUPPCD = function() {
  return;
};

exports.CUMIPMT = function(rate, periods, value, start, end, type) {
  // Credits: algorithm inspired by Apache OpenOffice
  // Credits: Hannes Stiebitzhofer for the translations of function and variable names
  // Requires exports.FV() and exports.PMT() from exports.js [http://stoic.com/exports/]

  // Evaluate rate and periods (TODO: replace with secure expression evaluator)
  rate = eval(rate);
  periods = eval(periods);

  // Return error if either rate, periods, or value are lower than or equal to zero
  if (rate <= 0 || periods <= 0 || value <= 0) {
    return error.num;
  }

  // Return error if start < 1, end < 1, or start > end
  if (start < 1 || end < 1 || start > end) {
    return error.num;
  }

  // Return error if type is neither 0 nor 1
  if (type !== 0 && type !== 1) {
    return error.num;
  }

  // Compute cumulative interest
  var payment = exports.PMT(rate, periods, value, 0, type);
  var interest = 0;

  if (start === 1) {
    if (type === 0) {
      interest = -value;
      start++;
    }
  }

  for (var i = start; i <= end; i++) {
    if (type === 1) {
      interest += exports.FV(rate, i - 2, payment, value, 1) - payment;
    } else {
      interest += exports.FV(rate, i - 1, payment, value, 0);
    }
  }
  interest *= rate;

  // Return cumulative interest
  return interest;
};

exports.CUMPRINC = function(rate, periods, value, start, end, type) {
  // Credits: algorithm inspired by Apache OpenOffice
  // Credits: Hannes Stiebitzhofer for the translations of function and variable names
  // Requires exports.FV() and exports.PMT() from exports.js [http://stoic.com/exports/]

  // Evaluate rate and periods (TODO: replace with secure expression evaluator)
  rate = eval(rate);
  periods = eval(periods);

  // Return error if either rate, periods, or value are lower than or equal to zero
  if (rate <= 0 || periods <= 0 || value <= 0) {
    return error.num;
  }

  // Return error if start < 1, end < 1, or start > end
  if (start < 1 || end < 1 || start > end) {
    return error.num;
  }

  // Return error if type is neither 0 nor 1
  if (type !== 0 && type !== 1) {
    return error.num;
  }

  // Compute cumulative principal
  var payment = exports.PMT(rate, periods, value, 0, type);
  var principal = 0;
  if (start === 1) {
    if (type === 0) {
      principal = payment + value * rate;
    } else {
      principal = payment;
    }
    start++;
  }
  for (var i = start; i <= end; i++) {
    if (type > 0) {
      principal += payment - (exports.FV(rate, i - 2, payment, value, 1) - payment) * rate;
    } else {
      principal += payment - exports.FV(rate, i - 1, payment, value, 0) * rate;
    }
  }

  // Return cumulative principal
  return principal;
};

exports.DB = function(cost, salvage, life, period, month) {
  // Initialize month
  month = (month === undefined) ? 12 : month;

  // Return error if any of the parameters is not a number
  if (isNaN(cost) || isNaN(salvage) || isNaN(life) || isNaN(period) || isNaN(month)) {
    return error.value;
  }

  // Return error if any of the parameters is negative
  if (cost < 0 || salvage < 0 || life < 0 || period < 0) {
    return error.num;
  }

  // Return error if month is not an integer between 1 and 12
  if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].indexOf(month) === -1) {
    return error.num;
  }

  // Return error if period is greater than life
  if (period > life) {
    return error.num;
  }

  // Return 0 (zero) if salvage is greater than or equal to cost
  if (salvage >= cost) {
    return 0;
  }

  // Rate is rounded to three decimals places
  var rate = (1 - Math.pow(salvage / cost, 1 / life)).toFixed(3);

  // Compute initial depreciation
  var initial = cost * rate * month / 12;

  // Compute total depreciation
  var total = initial;
  var current = 0;
  var ceiling = (period === life) ? life - 1 : period;
  for (var i = 2; i <= ceiling; i++) {
    current = (cost - total) * rate;
    total += current;
  }

  // Depreciation for the first and last periods are special cases
  if (period === 1) {
    // First period
    return initial;
  } else if (period === life) {
    // Last period
    return (cost - total) * rate;
  } else {
    return current;
  }
};

exports.DDB = function(cost, salvage, life, period, factor) {
  // Initialize factor
  factor = (factor === undefined) ? 2 : factor;

  // Return error if any of the parameters is not a number
  if (isNaN(cost) || isNaN(salvage) || isNaN(life) || isNaN(period) || isNaN(factor)) {
    return error.value;
  }

  // Return error if any of the parameters is negative or if factor is null
  if (cost < 0 || salvage < 0 || life < 0 || period < 0 || factor <= 0) {
    return error.num;
  }

  // Return error if period is greater than life
  if (period > life) {
    return error.num;
  }

  // Return 0 (zero) if salvage is greater than or equal to cost
  if (salvage >= cost) {
    return 0;
  }

  // Compute depreciation
  var total = 0;
  var current = 0;
  for (var i = 1; i <= period; i++) {
    current = Math.min((cost - total) * (factor / life), (cost - salvage - total));
    total += current;
  }

  // Return depreciation
  return current;
};

// TODO
exports.DISC = function() {
  return;
};

exports.DOLLARDE = function(dollar, fraction) {
  // Credits: algorithm inspired by Apache OpenOffice

  // Return error if any of the parameters is not a number
  if (isNaN(dollar) || isNaN(fraction)) {
    return error.value;
  }

  // Return error if fraction is negative
  if (fraction < 0) {
    return error.num;
  }

  // Return error if fraction is greater than or equal to 0 and less than 1
  if (fraction >= 0 && fraction < 1) {
    return error.div0;
  }

  // Truncate fraction if it is not an integer
  fraction = parseInt(fraction, 10);

  // Compute integer part
  var result = parseInt(dollar, 10);

  // Add decimal part
  result += (dollar % 1) * Math.pow(10, Math.ceil(Math.log(fraction) / Math.LN10)) / fraction;

  // Round result
  var power = Math.pow(10, Math.ceil(Math.log(fraction) / Math.LN2) + 1);
  result = Math.round(result * power) / power;

  // Return converted dollar price
  return result;
};

exports.DOLLARFR = function(dollar, fraction) {
  // Credits: algorithm inspired by Apache OpenOffice

  // Return error if any of the parameters is not a number
  if (isNaN(dollar) || isNaN(fraction)) {
    return error.value;
  }

  // Return error if fraction is negative
  if (fraction < 0) {
    return error.num;
  }

  // Return error if fraction is greater than or equal to 0 and less than 1
  if (fraction >= 0 && fraction < 1) {
    return error.div0;
  }

  // Truncate fraction if it is not an integer
  fraction = parseInt(fraction, 10);

  // Compute integer part
  var result = parseInt(dollar, 10);

  // Add decimal part
  result += (dollar % 1) * Math.pow(10, -Math.ceil(Math.log(fraction) / Math.LN10)) * fraction;

  // Return converted dollar price
  return result;
};

// TODO
exports.DURATION = function() {
  return;
};

exports.EFFECT = function(rate, periods) {
  // Return error if any of the parameters is not a number
  if (isNaN(rate) || isNaN(periods)) {
    return error.value;
  }

  // Return error if rate <=0 or periods < 1
  if (rate <= 0 || periods < 1) {
    return error.num;
  }

  // Truncate periods if it is not an integer
  periods = parseInt(periods, 10);

  // Return effective annual interest rate
  return Math.pow(1 + rate / periods, periods) - 1;
};

exports.FV = function(rate, periods, payment, value, type) {
  // Credits: algorithm inspired by Apache OpenOffice

  // Initialize type
  type = (typeof type === 'undefined') ? 0 : type;

  // Evaluate rate (TODO: replace with secure expression evaluator)
  rate = eval(rate);

  // Return future value
  var result;
  if (rate === 0) {
    result = value + payment * periods;
  } else {
    var term = Math.pow(1 + rate, periods);
    if (type === 1) {
      result = value * term + payment * (1 + rate) * (term - 1.0) / rate;
    } else {
      result = value * term + payment * (term - 1) / rate;
    }
  }
  return -result;
};

exports.FVSCHEDULE = function(principal, schedule) {
  // Initialize future value
  var future = principal;

  // Apply all interests in schedule
  for (var i = 0; i < schedule.length; i++) {
    // Return error if schedule value is not a number
    if (isNaN(schedule[i])) {
      return error.value;
    }

    // Apply scheduled interest
    future *= 1 + schedule[i];
  }

  // Return future value
  return future;
};

// TODO
exports.INTRATE = function() {
  return;
};

exports.IPMT = function(rate, period, periods, present, future, type) {
  // Credits: algorithm inspired by Apache OpenOffice

  // Initialize type
  type = (typeof type === 'undefined') ? 0 : type;

  // Evaluate rate and periods (TODO: replace with secure expression evaluator)
  rate = eval(rate);
  periods = eval(periods);

  // Compute payment
  var payment = exports.PMT(rate, periods, present, future, type);

  // Compute interest
  var interest;
  if (period === 1) {
    if (type === 1) {
      interest = 0;
    } else {
      interest = -present;
    }
  } else {
    if (type === 1) {
      interest = exports.FV(rate, period - 2, payment, present, 1) - payment;
    } else {
      interest = exports.FV(rate, period - 1, payment, present, 0);
    }
  }

  // Return interest
  return interest * rate;
};

exports.IRR = function(values, guess) {
  // Credits: algorithm inspired by Apache OpenOffice

  // flatten so multi dimensional ranges also work
  values = utils.flatten(values);

  // Calculates the resulting amount
  var irrResult = function(values, dates, rate) {
    var r = rate + 1;
    var result = values[0];
    for (var i = 1; i < values.length; i++) {
      result += values[i] / Math.pow(r, (dates[i] - dates[0]) / 365);
    }
    return result;
  };

  // Calculates the first derivation
  var irrResultDeriv = function(values, dates, rate) {
    var r = rate + 1;
    var result = 0;
    for (var i = 1; i < values.length; i++) {
      var frac = (dates[i] - dates[0]) / 365;
      result -= frac * values[i] / Math.pow(r, frac + 1);
    }
    return result;
  };

  // Initialize dates and check that values contains at least one positive value and one negative value
  var dates = [];
  var positive = false;
  var negative = false;
  for (var i = 0; i < values.length; i++) {
    dates[i] = (i === 0) ? 0 : dates[i - 1] + 365;
    if (values[i] > 0) {
      positive = true;
    }
    if (values[i] < 0) {
      negative = true;
    }
  }

  // Return error if values does not contain at least one positive value and one negative value
  if (!positive || !negative) {
    return error.num;
  }

  // Initialize guess and resultRate
  guess = (typeof guess === 'undefined') ? 0.1 : guess;
  var resultRate = guess;

  // Set maximum epsilon for end of iteration
  var epsMax = 1e-10;

  // Set maximum number of iterations
  var iterMax = 50;

  // Implement Newton's method
  var newRate, epsRate, resultValue;
  var iteration = 0;
  var contLoop = true;
  do {
    resultValue = irrResult(values, dates, resultRate);
    newRate = resultRate - resultValue / irrResultDeriv(values, dates, resultRate);
    epsRate = Math.abs(newRate - resultRate);
    resultRate = newRate;
    contLoop = (epsRate > epsMax) && (Math.abs(resultValue) > epsMax);
  } while (contLoop && (++iteration < iterMax));

  if (contLoop) {
    return error.num;
  }

  // Return internal rate of return
  return resultRate;
};

exports.ISPMT = function(rate, period, periods, value) {
  // Evaluate rate and periods (TODO: replace with secure expression evaluator)
  rate = eval(rate);
  periods = eval(periods);

  // Return interest
  return value * rate * (period / periods - 1);
};

// TODO
exports.MDURATION = function() {
  return;
};

exports.MIRR = function(values, finance_rate, reinvest_rate) {
  // Initialize number of values
  var n = values.length;

  // Lookup payments (negative values) and incomes (positive values)
  var payments = [];
  var incomes = [];
  for (var i = 0; i < n; i++) {
    if (values[i] < 0) {
      payments.push(values[i]);
    } else {
      incomes.push(values[i]);
    }
  }

  // Return modified internal rate of return
  var num = -exports.NPV(reinvest_rate, incomes) * Math.pow(1 + reinvest_rate, n - 1);
  var den = exports.NPV(finance_rate, payments) * (1 + finance_rate);
  return Math.pow(num / den, 1 / (n - 1)) - 1;
};

exports.NOMINAL = function(rate, periods) {
  // Return error if any of the parameters is not a number
  if (isNaN(rate) || isNaN(periods)) {
    return error.value;
  }

  // Return error if rate <=0 or periods < 1
  if (rate <= 0 || periods < 1) {
    return error.num;
  }

  // Truncate periods if it is not an integer
  periods = parseInt(periods, 10);

  // Return nominal annual interest rate
  return (Math.pow(rate + 1, 1 / periods) - 1) * periods;
};

exports.NPER = function(rate, payment, present, future, type) {
  // Initialize type
  type = (typeof type === 'undefined') ? 0 : type;

  // Initialize future value
  future = (typeof future === 'undefined') ? 0 : future;

  // Evaluate rate and periods (TODO: replace with secure expression evaluator)
  rate = eval(rate);

  // Return number of periods
  var num = payment * (1 + rate * type) - future * rate;
  var den = (present * rate + payment * (1 + rate * type));
  return Math.log(num / den) / Math.log(1 + rate);
};

exports.NPV = function() {
  // Cast arguments to array
  var args = [];
  for (var i = 0; i < arguments.length; i++) {
    args = args.concat(arguments[i]);
  }

  // Lookup rate
  var rate = args[0];

  // Initialize net present value
  var value = 0;

  // Loop on all values
  for (var j = 1; j < args.length; j++) {
    value += args[j] / Math.pow(1 + rate, j);
  }

  // Return net present value
  return value;
};

// TODO
exports.ODDFPRICE = function() {
  return;
};

// TODO
exports.ODDFYIELD = function() {
  return;
};

// TODO
exports.ODDLPRICE = function() {
  return;
};

// TODO
exports.ODDLYIELD = function() {
  return;
};

exports.PDURATION = function(rate, present, future) {
  // Return error if any of the parameters is not a number
  if (isNaN(rate) || isNaN(present) || isNaN(future)) {
    return error.value;
  }

  // Return error if rate <=0
  if (rate <= 0) {
    return error.num;
  }

  // Return number of periods
  return (Math.log(future) - Math.log(present)) / Math.log(1 + rate);
};

exports.PMT = function(rate, periods, present, future, type) {
  // Credits: algorithm inspired by Apache OpenOffice

  // Initialize type
  type = (typeof type === 'undefined') ? 0 : type;

  // Evaluate rate and periods (TODO: replace with secure expression evaluator)
  rate = eval(rate);
  periods = eval(periods);

  // Return payment
  var result;
  if (rate === 0) {
    result = (present + future) / periods;
  } else {
    var term = Math.pow(1 + rate, periods);
    if (type === 1) {
      result = (future * rate / (term - 1) + present * rate / (1 - 1 / term)) / (1 + rate);
    } else {
      result = future * rate / (term - 1) + present * rate / (1 - 1 / term);
    }
  }
  return -result;
};

exports.PPMT = function(rate, period, periods, present, future, type) {
  return exports.PMT(rate, periods, present, future, type) - exports.IPMT(rate, period, periods, present, future, type);
};

// TODO
exports.PRICE = function() {
  return;
};

// TODO
exports.PRICEDISC = function() {
  return;
};

// TODO
exports.PRICEMAT = function() {
  return;
};

exports.PV = function(rate, periods, payment, future, type) {
  // Initialize type
  type = (typeof type === 'undefined') ? 0 : type;

  // Evaluate rate and periods (TODO: replace with secure expression evaluator)
  rate = eval(rate);
  periods = eval(periods);

  // Return present value
  if (rate === 0) {
    return -payment * periods - future;
  } else {
    return (((1 - Math.pow(1 + rate, periods)) / rate) * payment * (1 + rate * type) - future) / Math.pow(1 + rate, periods);
  }
};

exports.RATE = function(periods, payment, present, future, type, guess) {
  // Credits: rabugento

  // Initialize guess
  guess = (typeof guess === 'undefined') ? 0.01 : guess;

  // Initialize future
  future = (typeof future === 'undefined') ? 0 : future;

  // Initialize type
  type = (typeof type === 'undefined') ? 0 : type;

  // Evaluate periods (TODO: replace with secure expression evaluator)
  periods = eval(periods);

  // Set maximum epsilon for end of iteration
  var epsMax = 1e-10;

  // Set maximum number of iterations
  var iterMax = 50;

  // Implement Newton's method
  var y, y0, y1, x0, x1 = 0,
    f = 0,
    i = 0;
  var rate = guess;
  if (Math.abs(rate) < epsMax) {
    y = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
  } else {
    f = Math.exp(periods * Math.log(1 + rate));
    y = present * f + payment * (1 / rate + type) * (f - 1) + future;
  }
  y0 = present + payment * periods + future;
  y1 = present * f + payment * (1 / rate + type) * (f - 1) + future;
  i = x0 = 0;
  x1 = rate;
  while ((Math.abs(y0 - y1) > epsMax) && (i < iterMax)) {
    rate = (y1 * x0 - y0 * x1) / (y1 - y0);
    x0 = x1;
    x1 = rate;
    if (Math.abs(rate) < epsMax) {
      y = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
    } else {
      f = Math.exp(periods * Math.log(1 + rate));
      y = present * f + payment * (1 / rate + type) * (f - 1) + future;
    }
    y0 = y1;
    y1 = y;
    ++i;
  }
  return rate;
};

// TODO
exports.RECEIVED = function() {
  return;
};

exports.RRI = function(periods, present, future) {
  // Return error if any of the parameters is not a number
  if (isNaN(periods) || isNaN(present) || isNaN(future)) {
    return error.value;
  }

  // Return error if periods or present is equal to 0 (zero)
  if (periods === 0 || present === 0) {
    return error.num;
  }

  // Return equivalent interest rate
  return Math.pow(future / present, 1 / periods) - 1;
};

exports.SLN = function(cost, salvage, life) {
  // Return error if any of the parameters is not a number
  if (isNaN(cost) || isNaN(salvage) || isNaN(life)) {
    return error.value;
  }

  // Return error if life equal to 0 (zero)
  if (life === 0) {
    return error.num;
  }

  // Return straight-line depreciation
  return (cost - salvage) / life;
};

exports.SYD = function(cost, salvage, life, period) {
  // Return error if any of the parameters is not a number
  if (isNaN(cost) || isNaN(salvage) || isNaN(life) || isNaN(period)) {
    return error.value;
  }

  // Return error if life equal to 0 (zero)
  if (life === 0) {
    return error.num;
  }

  // Return error if period is lower than 1 or greater than life
  if (period < 1 || period > life) {
    return error.num;
  }

  // Truncate period if it is not an integer
  period = parseInt(period, 10);

  // Return straight-line depreciation
  return ((cost - salvage) * (life - period + 1) * 2) / (life * (life + 1));
};

exports.TBILLEQ = function(settlement, maturity, discount) {
  settlement = utils.parseDate(settlement);
  maturity = utils.parseDate(maturity);
  // Return error if either date is invalid
  if (settlement instanceof Error || maturity instanceof Error) {
    return error.value;
  }

  // Return error if discount is lower than or equal to zero
  if (discount <= 0) {
    return error.num;
  }

  // Return error if settlement is greater than maturity
  if (settlement > maturity) {
    return error.num;
  }

  // Return error if maturity is more than one year after settlement
  if (maturity - settlement > 365 * 24 * 60 * 60 * 1000) {
    return error.num;
  }

  // Return bond-equivalent yield
  return (365 * discount) / (360 - discount * dateTime.DAYS360(settlement, maturity, false));
};

exports.TBILLPRICE = function(settlement, maturity, discount) {
  // Return error if either date is invalid
  if (settlement instanceof Error || maturity instanceof Error) {
    return error.value;
  }

  // Return error if discount is lower than or equal to zero
  if (discount <= 0) {
    return error.num;
  }

  // Return error if settlement is greater than maturity
  if (settlement > maturity) {
    return error.num;
  }

  // Return error if maturity is more than one year after settlement
  if (maturity - settlement > 365 * 24 * 60 * 60 * 1000) {
    return error.num;
  }

  // Return bond-equivalent yield
  return 100 * (1 - discount * dateTime.DAYS360(settlement, maturity, false) / 360);
};

exports.TBILLYIELD = function(settlement, maturity, price) {
  // Return error if either date is invalid
  if (settlement instanceof Error || maturity instanceof Error) {
    return error.value;
  }

  // Return error if price is lower than or equal to zero
  if (price <= 0) {
    return error.num;
  }

  // Return error if settlement is greater than maturity
  if (settlement > maturity) {
    return error.num;
  }

  // Return error if maturity is more than one year after settlement
  if (maturity - settlement > 365 * 24 * 60 * 60 * 1000) {
    return error.num;
  }

  // Return bond-equivalent yield
  return (100 - price) * 360 / (price * dateTime.DAYS360(settlement, maturity, false));
};

// TODO
exports.VDB = function() {
  return;
};


exports.XIRR = function(values, dates, guess) {
  // Credits: algorithm inspired by Apache OpenOffice

  // Calculates the resulting amount
  var irrResult = function(values, dates, rate) {
    var r = rate + 1;
    var result = values[0];
    for (var i = 1; i < values.length; i++) {
      result += values[i] / Math.pow(r, moment(dates[i]).diff(moment(dates[0]), 'days') / 365);
    }
    return result;
  };

  // Calculates the first derivation
  var irrResultDeriv = function(values, dates, rate) {
    var r = rate + 1;
    var result = 0;
    for (var i = 1; i < values.length; i++) {
      var frac = moment(dates[i]).diff(moment(dates[0]), 'days') / 365;
      result -= frac * values[i] / Math.pow(r, frac + 1);
    }
    return result;
  };

  // Check that values contains at least one positive value and one negative value
  var positive = false;
  var negative = false;
  for (var i = 0; i < values.length; i++) {
    if (values[i] > 0) {
      positive = true;
    }
    if (values[i] < 0) {
      negative = true;
    }
  }

  // Return error if values does not contain at least one positive value and one negative value
  if (!positive || !negative) {
    return error.num;
  }

  // Initialize guess and resultRate
  guess = guess || 0.1;
  var resultRate = guess;

  // Set maximum epsilon for end of iteration
  var epsMax = 1e-10;

  // Set maximum number of iterations
  var iterMax = 50;

  // Implement Newton's method
  var newRate, epsRate, resultValue;
  var iteration = 0;
  var contLoop = true;
  do {
    resultValue = irrResult(values, dates, resultRate);
    newRate = resultRate - resultValue / irrResultDeriv(values, dates, resultRate);
    epsRate = Math.abs(newRate - resultRate);
    resultRate = newRate;
    contLoop = (epsRate > epsMax) && (Math.abs(resultValue) > epsMax);
  } while (contLoop && (++iteration < iterMax));

  if (contLoop) {
    return error.num;
  }

  // Return internal rate of return
  return resultRate;
};

exports.XNPV = function(rate, values, dates) {
  var result = 0;
  for (var i = 0; i < values.length; i++) {
    result += values[i] / Math.pow(1 + rate, moment(dates[i]).diff(moment(dates[0]), 'days') / 365);
  }
  return result;
};

// TODO
exports.YIELD = function() {
  return;
};

// TODO
exports.YIELDDISC = function() {
  return;
};

// TODO
exports.YIELDMAT = function() {
  return;
};