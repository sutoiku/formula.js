var mathTrig = require('./math-trig');
var text = require('./text');
var jStat = require('jStat').jStat;
var _ = require('lodash');
var utils = require('./utils');
var error = require('./error');

var SQRT2PI = 2.5066282746310002;

exports.AVEDEV = function() {
  var range = utils.flatten(arguments);
  return jStat.sum(jStat(range).subtract(jStat.mean(range)).abs()[0]) / range.length;
};

exports.AVERAGE = function() {
  var range = utils.numbers(utils.flatten(arguments));
  var n = range.length;
  var sum = 0;
  var count = 0;
  for (var i = 0; i < n; i++) {
    sum += range[i];
    count += 1;
  }
  return sum / count;
};

exports.AVERAGEA = function() {
  var range = utils.flatten(arguments);
  var n = range.length;
  var sum = 0;
  var count = 0;
  for (var i = 0; i < n; i++) {
    var el = range[i];
    if (typeof el === 'number') {
      sum += el;
    }
    if (el === true) {
      sum++;
    }
    if (el !== null) {
      count++;
    }
  }
  return sum / count;
};

exports.AVERAGEIF = function(range, criteria, average_range) {
  average_range = average_range || range;
  range = utils.flatten(range);
  average_range = utils.flatten(average_range);
  var average_count = 0;
  var result = 0;
  for (var i = 0; i < range.length; i++) {
    if (eval(range[i] + criteria)) {
      result += average_range[i];
      average_count++;
    }
  }
  return result / average_count;
};

exports.AVERAGEIFS = function() {
  // Does not work with multi dimensional ranges yet!
  //http://office.microsoft.com/en-001/excel-help/averageifs-function-HA010047493.aspx
  var args = utils.argsToArray(arguments);
  var criteria = (args.length - 1) / 2;
  var range = utils.flatten(args[0]);
  var count = 0;
  var result = 0;
  for (var i = 0; i < range.length; i++) {
    var condition = '';
    for (var j = 0; j < criteria; j++) {
      condition += args[2 * j + 1][i] + args[2 * j + 2];
      if (j !== criteria - 1) {
        condition += '&&';
      }
    }
    if (eval(condition)) {
      result += range[i];
      count++;
    }
  }

  var average = result / count;
  if (isNaN(average)) {
    return 0;
  } else {
    return average;
  }
};

exports.BETA = {
  DIST: function(x, alpha, beta, cumulative, A, B) {
    A = (A === undefined) ? 0 : A;
    B = (B === undefined) ? 1 : B;
    x = (x - A) / (B - A);
    return (cumulative) ? jStat.beta.cdf(x, alpha, beta) : jStat.beta.pdf(x, alpha, beta);
  },
  INV: function(probability, alpha, beta, A, B) {
    A = (A === undefined) ? 0 : A;
    B = (B === undefined) ? 1 : B;
    return jStat.beta.inv(probability, alpha, beta) * (B - A) + A;
  }
};

exports.BINOM = {};

exports.BINOM.DIST = function(successes, trials, probability, cumulative) {
  return (cumulative) ? jStat.binomial.cdf(successes, trials, probability) : jStat.binomial.pdf(successes, trials, probability);
};

exports.BINOM.DIST.RANGE = function(trials, probability, successes, successes2) {
  successes2 = (successes2 === undefined) ? successes : successes2;
  var result = 0;
  for (var i = successes; i <= successes2; i++) {
    result += mathTrig.COMBIN(trials, i) * Math.pow(probability, i) * Math.pow(1 - probability, trials - i);
  }
  return result;
};

exports.BINOM.INV = function(trials, probability, alpha) {
  var x = 0;
  while (x <= trials) {
    if (jStat.binomial.cdf(x, trials, probability) >= alpha) {
      return x;
    }
    x++;
  }
};

exports.CHISQ = {};

exports.CHISQ.DIST = function(x, k, cumulative) {
  return (cumulative) ? jStat.chisquare.cdf(x, k) : jStat.chisquare.pdf(x, k);
};

//TODO
exports.CHISQ.DIST.RT = function() {
  return;
};

//TODO
exports.CHISQ.INV = function(probability, k) {
  return jStat.chisquare.inv(probability, k);
};

//TODO
exports.CHISQ.INV.RT = function() {
  return;
};

//TODO
exports.CHISQ.TEST = function() {
  return;
};

exports.CONFIDENCE = {};

exports.CONFIDENCE.NORM = function(alpha, sd, n) {
  return jStat.normalci(1, alpha, sd, n)[1] - 1;
};

exports.CONFIDENCE.T = function(alpha, sd, n) {
  return jStat.tci(1, alpha, sd, n)[1] - 1;
};

exports.CORREL = function() {
  return jStat.corrcoeff.apply(this, arguments);
};

exports.COUNT = function() {
  var numbers = utils.numbers(utils.flatten(arguments));
  return numbers.length;
};

exports.COUNTA = function() {
  var range = utils.flatten(arguments);
  return range.length - exports.COUNTBLANK(range);
};

exports.COUNTBLANK = function() {
  var range = utils.flatten(arguments);
  var blanks = 0;
  var element;
  for (var i = 0; i < range.length; i++) {
    element = range[i];
    if (element === null || element === '') {
      blanks++;
    }
  }
  return blanks;
};

exports.COUNTIF = function(range, criteria) {
  range = utils.flatten(range);
  if (!/[<>=!]/.test(criteria)) {
    criteria = '=="' + criteria + '"';
  }
  var matches = 0;
  for (var i = 0; i < range.length; i++) {
    if (typeof range[i] !== 'string') {
      if (eval(range[i] + criteria)) {
        matches++;
      }
    } else {
      if (eval('"' + range[i] + '"' + criteria)) {
        matches++;
      }
    }
  }
  return matches;
};

exports.COUNTIFS = function() {
  var args = utils.argsToArray(arguments);
  var results = new Array(utils.flatten(args[0]).length);
  for (var i = 0; i < results.length; i++) {
    results[i] = true;
  }
  for (i = 0; i < args.length; i += 2) {
    var range = utils.flatten(args[i]);
    var criteria = args[i + 1];
    if (!/[<>=!]/.test(criteria)) {
      criteria = '=="' + criteria + '"';
    }
    for (var j = 0; j < range.length; j++) {
      if (typeof range[j] !== 'string') {
        results[j] = results[j] && eval(range[j] + criteria);
      } else {
        results[j] = results[j] && eval('"' + range[j] + '"' + criteria);
      }
    }
  }
  var result = 0;
  for (i = 0; i < results.length; i++) {
    if (results[i]) {
      result++;
    }
  }
  return result;
};

exports.COVARIANCE = {};

exports.COVARIANCE.P = function(array1, array2) {
  var mean1 = jStat.mean(array1);
  var mean2 = jStat.mean(array2);
  var result = 0;
  var n = array1.length;
  for (var i = 0; i < n; i++) {
    result += (array1[i] - mean1) * (array2[i] - mean2);
  }
  return result / n;
};

exports.COVARIANCE.S = function() {
  return jStat.covariance.apply(this, arguments);
};

exports.DEVSQ = function() {
  var range = utils.flatten(arguments);
  var mean = jStat.mean(range);
  var result = 0;
  for (var i = 0; i < range.length; i++) {
    result += Math.pow((range[i] - mean), 2);
  }
  return result;
};

exports.EXPON = {};

exports.EXPON.DIST = function(x, lambda, cumulative) {
  return (cumulative) ? jStat.exponential.cdf(x, lambda) : jStat.exponential.pdf(x, lambda);
};

exports.F = {};

// TODO: verify if this is not the other way around
// actually looks like Excel switched the cumulative for the other
exports.F.DIST = function(x, d1, d2, cumulative) {
  return (cumulative) ? jStat.centralF.pdf(x, d1, d2) : jStat.centralF.cdf(x, d1, d2);
};

//TODO
exports.F.DIST.RT = function() {
  return;
};

exports.F.INV = function(probability, d1, d2) {
  if (probability <= 0.0 || probability > 1.0) {
    return error.num;
  }

  return jStat.centralF.inv(probability, d1, d2);
};

//TODO
exports.F.INV.RT = function() {
  return;
};

//TODO
exports.F.TEST = function() {
  return;
};

//TODO
exports.FISHER = function(x) {
  return Math.log((1 + x) / (1 - x)) / 2;
};

exports.FISHERINV = function(y) {
  var e2y = Math.exp(2 * y);
  return (e2y - 1) / (e2y + 1);
};

exports.FORECAST = function(x, data_y, data_x) {
  var xmean = jStat.mean(utils.flatten(data_x));
  var ymean = jStat.mean(utils.flatten(data_y));
  var n = data_x.length;
  var num = 0;
  var den = 0;
  for (var i = 0; i < n; i++) {
    num += (data_x[i] - xmean) * (data_y[i] - ymean);
    den += Math.pow(data_x[i] - xmean, 2);
  }
  var b = num / den;
  var a = ymean - b * xmean;
  return a + b * x;
};

exports.FREQUENCY = function(data, bins) {
  data = utils.flatten(data);
  bins = utils.flatten(bins);
  var n = data.length;
  var b = bins.length;
  var r = [];
  for (var i = 0; i <= b; i++) {
    r[i] = 0;
    for (var j = 0; j < n; j++) {
      if (i === 0) {
        if (data[j] <= bins[0]) {
          r[0] += 1;
        }
      } else if (i < b) {
        if (data[j] > bins[i - 1] && data[j] <= bins[i]) {
          r[i] += 1;
        }
      } else if (i === b) {
        if (data[j] > bins[b - 1]) {
          r[b] += 1;
        }
      }
    }
  }
  return r;
};


exports.GAMMA = function(number) {
  if (number === 0) {
    return error.num;
  }

  if (parseInt(number, 10) === number && number < 0) {
    return error.num;
  }

  return jStat.gammafn(number);
};

//TODO
exports.GAMMA.DIST = function() {
  return;
};

//TODO
exports.GAMMA.INV = function() {
  return;
};

exports.GAMMALN = function() {
  return jStat.gammaln.apply(this, arguments);
};

//TODO
exports.GAMMALN.PRECISE = function() {
  return;
};

exports.GAUSS = function(z) {
  return jStat.normal.cdf(z, 0, 1) - 0.5;
};

exports.GEOMEAN = function() {
  return jStat.geomean(utils.flatten(arguments));
};

exports.GROWTH = function(known_y, known_x, new_x, use_const) {
  // Credits: Ilmari Karonen (http://stackoverflow.com/questions/14161990/how-to-implement-growth-function-in-javascript)

  // Default values for optional parameters:
  var i;
  if (known_x === undefined) {
    known_x = [];
    for (i = 1; i <= known_y.length; i++) {
      known_x.push(i);
    }
  }
  if (new_x === undefined) {
    new_x = [];
    for (i = 1; i <= known_y.length; i++) {
      new_x.push(i);
    }
  }
  if (use_const === undefined) {
    use_const = true;
  }

  // Calculate sums over the data:
  var n = known_y.length;
  var avg_x = 0;
  var avg_y = 0;
  var avg_xy = 0;
  var avg_xx = 0;
  for (i = 0; i < n; i++) {
    var x = known_x[i];
    var y = Math.log(known_y[i]);
    avg_x += x;
    avg_y += y;
    avg_xy += x * y;
    avg_xx += x * x;
  }
  avg_x /= n;
  avg_y /= n;
  avg_xy /= n;
  avg_xx /= n;

  // Compute linear regression coefficients:
  var beta;
  var alpha;
  if (use_const) {
    beta = (avg_xy - avg_x * avg_y) / (avg_xx - avg_x * avg_x);
    alpha = avg_y - beta * avg_x;
  } else {
    beta = avg_xy / avg_xx;
    alpha = 0;
  }

  // Compute and return result array:
  var new_y = [];
  for (i = 0; i < new_x.length; i++) {
    new_y.push(Math.exp(alpha + beta * new_x[i]));
  }
  return new_y;
};

exports.HARMEAN = function() {
  var range = utils.flatten(arguments);
  var n = range.length;
  var den = 0;
  for (var i = 0; i < n; i++) {
    den += 1 / range[i];
  }
  return n / den;
};

exports.HYPGEOM = {};

exports.HYPGEOM.DIST = function(x, n, M, N, cumulative) {
  function pdf(x, n, M, N) {
    return mathTrig.COMBIN(M, x) * mathTrig.COMBIN(N - M, n - x) / mathTrig.COMBIN(N, n);
  }

  function cdf(x, n, M, N) {
    var result = 0;
    for (var i = 0; i <= x; i++) {
      result += pdf(i, n, M, N);
    }
    return result;
  }

  return (cumulative) ? cdf(x, n, M, N) : pdf(x, n, M, N);
};

exports.INTERCEPT = function(known_y, known_x) {
  known_y = utils.flatten(known_y);
  known_x = utils.flatten(known_x);
  if (known_y.length !== known_x.length) {
    return error.na;
  }
  return exports.FORECAST(0, known_y, known_x);
};

exports.KURT = function() {
  var range = utils.flatten(arguments);
  var mean = jStat.mean(range);
  var n = range.length;
  var sigma = 0;
  for (var i = 0; i < n; i++) {
    sigma += Math.pow(range[i] - mean, 4);
  }
  sigma = sigma / Math.pow(jStat.stdev(range, true), 4);
  return ((n * (n + 1)) / ((n - 1) * (n - 2) * (n - 3))) * sigma - 3 * (n - 1) * (n - 1) / ((n - 2) * (n - 3));
};

exports.LARGE = function(array, k) {
  return utils.flatten(array).sort(function(a, b) {
    return b - a;
  })[k - 1];
};

exports.LINEST = function(data_y, data_x) {
  var xmean = jStat.mean(utils.flatten(data_x));
  var ymean = jStat.mean(utils.flatten(data_y));
  var n = data_x.length;
  var num = 0;
  var den = 0;
  for (var i = 0; i < n; i++) {
    num += (data_x[i] - xmean) * (data_y[i] - ymean);
    den += Math.pow(data_x[i] - xmean, 2);
  }
  var m = num / den;
  var b = ymean - m * xmean;
  return [m, b];
};

//TODO
exports.LOGEST = function() {
  return;
};

exports.LOGNORM = {};

exports.LOGNORM.DIST = function(x, mean, sd, cumulative) {
  return (cumulative) ? jStat.lognormal.cdf(x, mean, sd) : jStat.lognormal.pdf(x, mean, sd);
};

exports.LOGNORM.INV = function(probability, mean, sd) {
  return jStat.lognormal.inv(probability, mean, sd);
};

exports.MAX = function() {
  var range = utils.flatten(arguments);
  var n = range.length;
  var max = (n > 0) ? range[0] : 0;
  for (var i = 0; i < n; i++) {
    max = (range[i] > max && (range[i] !== true) && (range[i] !== false)) ? range[i] : max;
  }
  return max;
};

exports.MAXA = function() {
  var range = utils.flatten(arguments);
  return (range.length > 0) ? Math.max.apply(Math, range) : 0;
};

exports.MEDIAN = function() {
  return jStat.median(utils.flatten(arguments));
};

exports.MIN = function() {
  var range = utils.flatten(arguments);
  var n = range.length;
  var min = (n > 0) ? range[0] : 0;
  for (var i = 0; i < n; i++) {
    min = (range[i] < min && (range[i] !== true) && (range[i] !== false)) ? range[i] : min;
  }
  return min;
};

exports.MINA = function() {
  var range = utils.flatten(arguments);
  return (range.length > 0) ? Math.min.apply(Math, range) : 0;
};

exports.MODE = {};

exports.MODE.MULT = function() {
  // Credits: Roönaän
  var range = utils.flatten(arguments),
    n = range.length,
    count = {},
    maxItems = [],
    max = 0,
    currentItem;
  for (var i = 0; i < n; i++) {
    currentItem = range[i];
    count[currentItem] = count[currentItem] ? count[currentItem] + 1 : 1;
    if (count[currentItem] > max) {
      max = count[currentItem];
      maxItems = [];
    }
    if (count[currentItem] === max) {
      maxItems[maxItems.length] = currentItem;
    }
  }
  return maxItems;
};

exports.MODE.SNGL = function() {
  return exports.MODE.MULT(arguments).sort(function(a, b) {
    return a - b;
  })[0];
};

exports.NEGBINOMDIST = function(k, r, p, cumulative) {
  return (cumulative) ? jStat.negbin.cdf(k, r, p) : jStat.negbin.pdf(k, r, p);
};

exports.NORM = {};

exports.NORM.DIST = function(x, mean, sd, cumulative) {
  // Check parameters
  if (isNaN(x) || isNaN(mean) || isNaN(sd)) {
    return error.value;
  }
  if (sd <= 0) {
    return error.num;
  }

  // Return normal distribution computed by jStat [http://jstat.org]
  return (cumulative) ? jStat.normal.cdf(x, mean, sd) : jStat.normal.pdf(x, mean, sd);
};

exports.NORM.INV = function(probability, mean, sd) {
  return jStat.normal.inv(probability, mean, sd);
};

exports.NORM.S = {};

exports.NORM.S.DIST = function(z, cumulative) {
  return (cumulative) ? jStat.normal.cdf(z, 0, 1) : jStat.normal.pdf(z, 0, 1);
};

exports.NORM.S.INV = function(probability) {
  return jStat.normal.inv(probability, 0, 1);
};

exports.PEARSON = function(data_x, data_y) {
  var xmean = jStat.mean(utils.flatten(data_x));
  var ymean = jStat.mean(utils.flatten(data_y));
  var n = data_x.length;
  var num = 0;
  var den1 = 0;
  var den2 = 0;
  for (var i = 0; i < n; i++) {
    num += (data_x[i] - xmean) * (data_y[i] - ymean);
    den1 += Math.pow(data_x[i] - xmean, 2);
    den2 += Math.pow(data_y[i] - ymean, 2);
  }
  return num / Math.sqrt(den1 * den2);
};

exports.PERCENTILEEXC = function(array, k) {
  array = array.sort(function(a, b) {
    {
      return a - b;
    }
  });
  var n = array.length;
  if (k < 1 / (n + 1) || k > 1 - 1 / (n + 1)) {
    return '#NUM!';
  }
  var l = k * (n + 1) - 1;
  var fl = Math.floor(l);
  return utils.cleanFloat((l === fl) ? array[l] : array[fl] + (l - fl) * (array[fl + 1] - array[fl]));
};

exports.PERCENTILEINC = function(array, k) {
  array = array.sort(function(a, b) {
    return a - b;
  });
  var n = array.length;
  var l = k * (n - 1);
  var fl = Math.floor(l);
  return utils.cleanFloat((l === fl) ? array[l] : array[fl] + (l - fl) * (array[fl + 1] - array[fl]));
};

exports.PERCENTRANKEXC = function(array, x, significance) {
  array = array.sort(function(a, b) {
    return a - b;
  });
  var uniques = _.uniq(array);
  var n = array.length;
  var m = uniques.length;
  significance = (typeof significance === 'undefined') ? 3 : significance;
  var power = Math.pow(10, significance);
  var result = 0;
  var match = false;
  var i = 0;
  while (!match && i < m) {
    if (x === uniques[i]) {
      result = (array.indexOf(uniques[i]) + 1) / (n + 1);
      match = true;
    } else if (x >= uniques[i] && (x < uniques[i + 1] || i === m - 1)) {
      result = (array.indexOf(uniques[i]) + 1 + (x - uniques[i]) / (uniques[i + 1] - uniques[i])) / (n + 1);
      match = true;
    }
    i++;
  }
  return Math.floor(result * power) / power;
};

exports.PERCENTRANKINC = function(array, x, significance) {
  array = array.sort(function(a, b) {
    return a - b;
  });
  var uniques = _.uniq(array);
  var n = array.length;
  var m = uniques.length;
  significance = (typeof significance === 'undefined') ? 3 : significance;
  var power = Math.pow(10, significance);
  var result = 0;
  var match = false;
  var i = 0;
  while (!match && i < m) {
    if (x === uniques[i]) {
      result = array.indexOf(uniques[i]) / (n - 1);
      match = true;
    } else if (x >= uniques[i] && (x < uniques[i + 1] || i === m - 1)) {
      result = (array.indexOf(uniques[i]) + (x - uniques[i]) / (uniques[i + 1] - uniques[i])) / (n - 1);
      match = true;
    }
    i++;
  }
  return Math.floor(result * power) / power;
};

exports.PERMUT = function(number, number_chosen) {
  return mathTrig.FACT(number) / mathTrig.FACT(number - number_chosen);
};

exports.PERMUTATIONA = function(number, number_chosen) {
  return Math.pow(number, number_chosen);
};

exports.PHI = function(x) {
  return Math.exp(-0.5 * x * x) / SQRT2PI;
};

exports.POISSONDIST = function(x, mean, cumulative) {
  return (cumulative) ? jStat.poisson.cdf(x, mean) : jStat.poisson.pdf(x, mean);
};

exports.PROB = function(range, probability, lower, upper) {
  if (lower === undefined) {
    return 0;
  }

  range = utils.flatten(range);
  probability = utils.flatten(probability);

  upper = (upper === undefined) ? lower : upper;
  if (lower === upper) {
    return (range.indexOf(lower) >= 0) ? probability[range.indexOf(lower)] : 0;
  }

  var sorted = range.sort(function(a, b) {
    return a - b;
  });
  var n = sorted.length;
  var result = 0;
  for (var i = 0; i < n; i++) {
    if (sorted[i] >= lower && sorted[i] <= upper) {
      result += probability[range.indexOf(sorted[i])];
    }
  }
  return result;
};

exports.QUARTILE = {};

exports.QUARTILE.EXC = function(range, quart) {
  range = utils.flatten(range);
  switch (quart) {
    case 1:
      return exports.PERCENTILEEXC(range, 0.25);
    case 2:
      return exports.PERCENTILEEXC(range, 0.5);
    case 3:
      return exports.PERCENTILEEXC(range, 0.75);
    default:
      return error.num;
  }
};

exports.QUARTILE.INC = function(range, quart) {
  range = utils.flatten(range);
  switch (quart) {
    case 1:
      return exports.PERCENTILEINC(range, 0.25);
    case 2:
      return exports.PERCENTILEINC(range, 0.5);
    case 3:
      return exports.PERCENTILEINC(range, 0.75);
    default:
      return error.num;
  }
};

exports.RANK = {};

exports.RANK.AVG = function(number, range, order) {
  range = utils.flatten(range);
  order = order || false;
  var sort = (order) ? function(a, b) {
    return a - b;
  } : function(a, b) {
    return b - a;
  };
  range = range.sort(sort);

  var length = range.length;
  var count = 0;
  for (var i = 0; i < length; i++) {
    if (range[i] === number) {
      count++;
    }
  }

  return (count > 1) ? (2 * range.indexOf(number) + count + 1) / 2 : range.indexOf(number) + 1;
};

exports.RANK.EQ = function(number, range, order) {
  range = utils.flatten(range);
  order = order || false;
  var sort = (order) ? function(a, b) {
    return a - b;
  } : function(a, b) {
    return b - a;
  };
  range = range.sort(sort);
  return range.indexOf(number) + 1;
};

exports.RSQ = function(data_x, data_y) { // no need to flatten here, PEARSON will take care of that
  return Math.pow(exports.PEARSON(data_x, data_y), 2);
};

exports.SKEW = function() {
  var range = utils.flatten(arguments);
  var mean = jStat.mean(range);
  var n = range.length;
  var sigma = 0;
  for (var i = 0; i < n; i++) {
    sigma += Math.pow(range[i] - mean, 3);
  }
  return n * sigma / ((n - 1) * (n - 2) * Math.pow(jStat.stdev(range, true), 3));
};

exports.SKEW.P = function() {
  var range = utils.flatten(arguments);
  var mean = jStat.mean(range);
  var n = range.length;
  var m2 = 0;
  var m3 = 0;
  for (var i = 0; i < n; i++) {
    m3 += Math.pow(range[i] - mean, 3);
    m2 += Math.pow(range[i] - mean, 2);
  }
  m3 = m3 / n;
  m2 = m2 / n;
  return m3 / Math.pow(m2, 3 / 2);
};

exports.SLOPE = function(data_y, data_x) {
  data_y = utils.flatten(data_y);
  data_x = utils.flatten(data_x);
  var xmean = jStat.mean(data_x);
  var ymean = jStat.mean(data_y);
  var n = data_x.length;
  var num = 0;
  var den = 0;
  for (var i = 0; i < n; i++) {
    num += (data_x[i] - xmean) * (data_y[i] - ymean);
    den += Math.pow(data_x[i] - xmean, 2);
  }
  return num / den;
};

exports.SMALL = function(array, k) {
  return utils.flatten(array).sort(function(a, b) {
    return a - b;
  })[k - 1];
};

exports.STANDARDIZE = function(x, mean, sd) {
  return (x - mean) / sd;
};

exports.STDEV = {};

exports.STDEV.P = function() {
  return Math.sqrt(exports.VAR.P.apply(this, arguments));
};

exports.STDEV.S = function() {
  return Math.sqrt(exports.VAR.S.apply(this, arguments));
};

exports.STDEVA = function() {
  return Math.sqrt(exports.VARA.apply(this, arguments));
};

exports.STDEVPA = function() {
  return Math.sqrt(exports.VARPA.apply(this, arguments));
};


exports.STEYX = function(data_y, data_x) {
  data_y = utils.flatten(data_y);
  data_x = utils.flatten(data_x);
  var xmean = jStat.mean(data_x);
  var ymean = jStat.mean(data_y);
  var n = data_x.length;
  var lft = 0;
  var num = 0;
  var den = 0;
  for (var i = 0; i < n; i++) {
    lft += Math.pow(data_y[i] - ymean, 2);
    num += (data_x[i] - xmean) * (data_y[i] - ymean);
    den += Math.pow(data_x[i] - xmean, 2);
  }
  return Math.sqrt((lft - num * num / den) / (n - 2));
};

exports.T = text.T;

exports.T.DIST = function(x, df, cumulative) {
  return (cumulative) ? jStat.studentt.cdf(x, df) : jStat.studentt.pdf(x, df);
};

//TODO
exports.T.DIST['2T'] = function() {
  return;
};

//TODO
exports.T.DIST.RT = function() {
  return;
};

//TODO
exports.T.INV = function(probability, df) {
  return jStat.studentt.inv(probability, df);
};

//TODO
exports.T.INV['2T'] = function() {
  return;
};

//TODO
exports.T.TEST = function() {
  return;
};

//TODO
exports.TREND = function() {
  return;
};

exports.TRIMMEAN = function(range, percent) {
  range = utils.flatten(range);
  var trim = mathTrig.FLOOR(range.length * percent, 2) / 2;
  return jStat.mean(_.initial(_.rest(range.sort(function(a, b) {
    return a - b;
  }), trim), trim));
};

exports.VAR = {};

exports.VAR.P = function() {
  var range = utils.numbers(utils.flatten(arguments));
  var n = range.length;
  var sigma = 0;
  var mean = exports.AVERAGE(range);
  for (var i = 0; i < n; i++) {
    sigma += Math.pow(range[i] - mean, 2);
  }
  return sigma / n;
};

exports.VAR.S = function() {
  var range = utils.numbers(utils.flatten(arguments));
  var n = range.length;
  var sigma = 0;
  var mean = exports.AVERAGE(range);
  for (var i = 0; i < n; i++) {
    sigma += Math.pow(range[i] - mean, 2);
  }
  return sigma / (n - 1);
};

exports.VARA = function() {
  var range = utils.flatten(arguments);
  var n = range.length;
  var sigma = 0;
  var count = 0;
  var mean = exports.AVERAGEA(range);
  for (var i = 0; i < n; i++) {
    var el = range[i];
    if (typeof el === 'number') {
      sigma += Math.pow(el - mean, 2);
    } else if (el === true) {
      sigma += Math.pow(1 - mean, 2);
    } else {
      sigma += Math.pow(0 - mean, 2);
    }

    if (el !== null) {
      count++;
    }
  }
  return sigma / (count - 1);
};

exports.VARPA = function() {
  var range = utils.flatten(arguments);
  var n = range.length;
  var sigma = 0;
  var count = 0;
  var mean = exports.AVERAGEA(range);
  for (var i = 0; i < n; i++) {
    var el = range[i];
    if (typeof el === 'number') {
      sigma += Math.pow(el - mean, 2);
    } else if (el === true) {
      sigma += Math.pow(1 - mean, 2);
    } else {
      sigma += Math.pow(0 - mean, 2);
    }

    if (el !== null) {
      count++;
    }
  }
  return sigma / count;
};


exports.WEIBULLDIST = function(x, alpha, beta, cumulative) {
  return (cumulative) ? 1 - Math.exp(-Math.pow(x / beta, alpha)) : Math.pow(x, alpha - 1) * Math.exp(-Math.pow(x / beta, alpha)) * alpha / Math.pow(beta, alpha);
};

exports.Z = {};

exports.Z.TEST = function(range, x, sigma) {
  range = utils.flatten(range);
  var n = range.length;
  var sd = (sigma === undefined) ? exports.STDEV.S(range) : sigma;
  return 1 - exports.NORM.S.DIST((exports.AVERAGE(range) - x) / (sd / Math.sqrt(n)), true);
};