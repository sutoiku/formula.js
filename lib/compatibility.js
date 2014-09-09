var mathTrig = require('./math-trig');
var statistical = require('./statistical');

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
exports.CHIDIST = statistical.CHISQ.DIST;
exports.CHIINV = statistical.CHISQ.INV;
exports.CHITEST = statistical.CHISQ.TEST;
exports.CONFIDENCE = set(statistical.CONFIDENCE.NORM, statistical.CONFIDENCE);
exports.COVAR = statistical.COVARIANCE.P;
exports.CRITBINOM = statistical.BINOM.INV;
exports.EXPONDIST = statistical.EXPON.DIST;
exports.FDIST = statistical.F.DIST;
exports.FINV = statistical.F.INV;
exports.FLOOR = set(mathTrig.FLOOR.MATH, mathTrig.FLOOR);
exports.FTEST = statistical.F.TEST;
exports.GAMMADIST = statistical.GAMMA.DIST;
exports.GAMMAINV = statistical.GAMMA.INV;
exports.HYPGEOMDIST = statistical.HYPGEOM.DIST;
exports.LOGINV = statistical.LOGNORM.INV;
exports.LOGNORMDIST = statistical.LOGNORM.DIST;
exports.MODE = set(statistical.MODE.SNGL, statistical.MODE);
exports.NEGBINOMDIST = statistical.NEGBINOM.DIST;
exports.NORMDIST = statistical.NORM.DIST;
exports.NORMINV = statistical.NORM.INV;
exports.NORMSDIST = statistical.NORM.S.DIST;
exports.NORMSINV = statistical.NORM.S.INV;
exports.PERCENTILE = set(statistical.PERCENTILE.EXC, statistical.PERCENTILE);
exports.PERCENTRANK = set(statistical.PERCENTRANK.INC, statistical.PERCENTRANK);
exports.POISSON = set(statistical.POISSON.DIST, statistical.POISSON);
exports.QUARTILE = set(statistical.QUARTILE.INC, statistical.QUARTILE);
exports.RANK = set(statistical.RANK.EQ, statistical.RANK);
exports.STDEV = set(statistical.STDEV.S, statistical.STDEV);
exports.STDEVP = statistical.STDEV.P;
exports.TDIST = statistical.T.DIST;
exports.TINV = statistical.T.INV;
exports.TTEST = statistical.T.TEST;
exports.VAR = set(statistical.VAR.S, statistical.VAR);
exports.VARP = statistical.VAR.P;
exports.WEIBULL = set(statistical.WEIBULL.DIST, statistical.WEIBULL);
exports.ZTEST = statistical.Z.TEST;
