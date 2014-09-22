var mathTrig = require('./math-trig');
var statistical = require('./statistical');
var engineering = require('./engineering');
var dateTime = require('./date-time');

function set(fn, root) {
  if (root) {
    for (var i in root) {
      fn[i] = root[i];
    }
  }
  return fn;
}

exports.BETADIST = statistical.BETA.DIST;
exports.BETAINV = statistical.BETA.INV;
exports.BINOMDIST = statistical.BINOM.DIST;
exports.CEILING = exports.ISOCEILING = set(mathTrig.CEILING.MATH, mathTrig.CEILING);
exports.CEILINGMATH = mathTrig.CEILING.MATH;
exports.CEILINGPRECISE = mathTrig.CEILING.PRECISE;
exports.CHIDIST = statistical.CHISQ.DIST;
exports.CHIDISTRT = statistical.CHISQ.DIST.RT;
exports.CHIINV = statistical.CHISQ.INV;
exports.CHIINVRT = statistical.CHISQ.INV.RT;
exports.CHITEST = statistical.CHISQ.TEST;
exports.CONFIDENCE = set(statistical.CONFIDENCE.NORM, statistical.CONFIDENCE);
exports.COVAR = statistical.COVARIANCE.P;
exports.COVARIANCEP = statistical.COVARIANCE.P;
exports.COVARIANCES = statistical.COVARIANCE.S;
exports.CRITBINOM = statistical.BINOM.INV;
exports.EXPONDIST = statistical.EXPON.DIST;
exports.ERFCPRECISE = engineering.ERFC.PRECISE;
exports.ERFPRECISE = engineering.ERF.PRECISE;
exports.FDIST = statistical.F.DIST;
exports.FDISTRT = statistical.F.DIST.RT;
exports.FINVRT = statistical.F.INV.RT;
exports.FINV = statistical.F.INV;
exports.FLOOR = set(mathTrig.FLOOR.MATH, mathTrig.FLOOR);
exports.FLOORMATH = mathTrig.FLOOR.MATH;
exports.FLOORPRECISE = mathTrig.FLOOR.PRECISE;
exports.FTEST = statistical.F.TEST;
exports.GAMMADIST = statistical.GAMMA.DIST;
exports.GAMMAINV = statistical.GAMMA.INV;
exports.GAMMALNPRECISE = statistical.GAMMALN.PRECISE;
exports.HYPGEOMDIST = statistical.HYPGEOM.DIST;
exports.LOGINV = statistical.LOGNORM.INV;
exports.LOGNORMINV = statistical.LOGNORM.INV;
exports.LOGNORMDIST = statistical.LOGNORM.DIST;
exports.MODE = set(statistical.MODE.SNGL, statistical.MODE);
exports.MODEMULT = statistical.MODE.MULT;
exports.MODESNGL = statistical.MODE.SNGL;
exports.NEGBINOMDIST = statistical.NEGBINOM.DIST;
exports.NETWORKDAYSINTL = dateTime.NETWORKDAYS.INTL;
exports.NORMDIST = statistical.NORM.DIST;
exports.NORMINV = statistical.NORM.INV;
exports.NORMSDIST = statistical.NORM.S.DIST;
exports.NORMSINV = statistical.NORM.S.INV;
exports.PERCENTILE = set(statistical.PERCENTILE.EXC, statistical.PERCENTILE);
exports.PERCENTILEEXC = statistical.PERCENTILE.EXC;
exports.PERCENTILEINC = statistical.PERCENTILE.INC;
exports.PERCENTRANK = set(statistical.PERCENTRANK.INC, statistical.PERCENTRANK);
exports.PERCENTRANKEXC = statistical.PERCENTRANK.EXC;
exports.PERCENTRANKINC = statistical.PERCENTRANK.INC;
exports.POISSON = set(statistical.POISSON.DIST, statistical.POISSON);
exports.POISSONDIST = statistical.POISSON.DIST;
exports.QUARTILE = set(statistical.QUARTILE.INC, statistical.QUARTILE);
exports.QUARTILEEXC = statistical.QUARTILE.EXC;
exports.QUARTILEINC = statistical.QUARTILE.INC;
exports.RANK = set(statistical.RANK.EQ, statistical.RANK);
exports.RANKAVG = statistical.RANK.AVG;
exports.RANKEQ = statistical.RANK.EQ;
exports.SKEWP = statistical.SKEW.P;
exports.STDEV = set(statistical.STDEV.S, statistical.STDEV);
exports.STDEVP = statistical.STDEV.P;
exports.STDEVS = statistical.STDEV.S;
exports.TDIST = statistical.T.DIST;
exports.TDISTRT = statistical.T.DIST.RT;
exports.TINV = statistical.T.INV;
exports.TTEST = statistical.T.TEST;
exports.VAR = set(statistical.VAR.S, statistical.VAR);
exports.VARP = statistical.VAR.P;
exports.VARS = statistical.VAR.S;
exports.WEIBULL = set(statistical.WEIBULL.DIST, statistical.WEIBULL);
exports.WEIBULLDIST = statistical.WEIBULL.DIST;
exports.WORKDAYINTL = dateTime.WORKDAY.INTL;
exports.ZTEST = statistical.Z.TEST;
