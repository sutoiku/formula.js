// Copyright © Sutoiku, Inc. All rights reserved.

function arraysIdentical(a, b) {
  var i = a.length;
  if (i != b.length || typeof i == 'undefined') return false;
  while (i--) {
    if (a[i] instanceof Array) {
      if (!arraysIdentical(a[i], b[i])) return false;
    } else {
      if (a[i] !== b[i]) return false;
    }
  }
  return true;
};

var QUERYSTRING = function() {
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  } 
  return query_string;
} ();

function TestCases($scope) {

  $scope.demos = FORMULA_DEMOS;

  $scope.libraries = REQUIRED_LIBRARIES;

  $scope.myFormula = "=BIN2DEC('101010')";

  $scope.tests = FORMULA_TESTS;

  $scope.unsupported = UNSUPPORTED_FUNCTIONS;

  $scope.PLANNED = function(planned) {
    return (planned) ? 'Yes' : 'No';
  }

  $scope.TEST = function(actual, expected, bypass) {
    return (actual == expected || arraysIdentical(actual, expected) || bypass) ? 'icon-ok-sign text-success' : 'icon-warning-sign text-error';
  }

  // Date functions
  $scope.DATE = Formula.DATE;
  $scope.DATEVALUE = Formula.DATEVALUE;
  $scope.DAY = Formula.DAY;
  $scope.DAYS = Formula.DAYS;
  $scope.DAYS360 = Formula.DAYS360;
  $scope.EDATE = Formula.EDATE;
  $scope.EOMONTH = Formula.EOMONTH;
  $scope.HOUR = Formula.HOUR;
  $scope.ISOWEEKNUM = Formula.ISOWEEKNUM;
  $scope.MINUTE = Formula.MINUTE;
  $scope.MONTH = Formula.MONTH;
  $scope.NETWORKDAYS = Formula.NETWORKDAYS;
  $scope.NETWORKDAYSINTL = Formula.NETWORKDAYSINTL;
  $scope.NOW = Formula.NOW;
  $scope.SECOND = Formula.SECOND;
  $scope.TIME = Formula.TIME;
  $scope.TIMEVALUE = Formula.TIMEVALUE;
  $scope.TODAY = Formula.TODAY;
  $scope.WEEKDAY = Formula.WEEKDAY;
  $scope.WEEKNUM = Formula.WEEKNUM;
  $scope.WORKDAY = Formula.WORKDAY;
  $scope.WORKDAYINTL = Formula.WORKDAYINTL; 
  $scope.YEAR = Formula.YEAR;
  $scope.YEARFRAC = Formula.YEARFRAC;

  // Engineering functions
  $scope.BESSELI = Formula.BESSELI;
  $scope.BESSELJ = Formula.BESSELJ;
  $scope.BESSELK = Formula.BESSELK;
  $scope.BESSELY = Formula.BESSELY;
  $scope.BIN2DEC = Formula.BIN2DEC;
  $scope.BIN2HEX = Formula.BIN2HEX;
  $scope.BIN2OCT = Formula.BIN2OCT;
  $scope.BITAND = Formula.BITAND;
  $scope.BITLSHIFT = Formula.BITLSHIFT;
  $scope.BITOR = Formula.BITOR;
  $scope.BITRSHIFT = Formula.BITRSHIFT;
  $scope.BITXOR = Formula.BITXOR;
  $scope.COMPLEX = Formula.COMPLEX;
  $scope.CONVERT = Formula.CONVERT;
  $scope.DEC2BIN = Formula.DEC2BIN;
  $scope.DEC2HEX = Formula.DEC2HEX;
  $scope.DEC2OCT = Formula.DEC2OCT;
  $scope.DELTA = Formula.DELTA;
  $scope.ERF = Formula.ERF;
  $scope.ERFPRECISE = Formula.ERF.PRECISE;
  $scope.ERFC = Formula.ERFC;
  $scope.ERFCPRECISE = Formula.ERFC.PRECISE;
  $scope.GESTEP = Formula.GESTEP;
  $scope.HEX2BIN = Formula.HEX2BIN;
  $scope.HEX2DEC = Formula.HEX2DEC;
  $scope.HEX2OCT = Formula.HEX2OCT;
  $scope.IMABS = Formula.IMABS;
  $scope.IMAGINARY = Formula.IMAGINARY;
  $scope.IMARGUMENT = Formula.IMARGUMENT;
  $scope.IMCONJUGATE = Formula.IMCONJUGATE;
  $scope.IMCOS = Formula.IMCOS;
  $scope.IMCOSH = Formula.IMCOSH;
  $scope.IMCOT = Formula.IMCOT;
  $scope.IMCSC = Formula.IMCSC;
  $scope.IMCSCH = Formula.IMCSCH;
  $scope.IMDIV = Formula.IMDIV;
  $scope.IMEXP = Formula.IMEXP;
  $scope.IMLN = Formula.IMLN;
  $scope.IMLOG10 = Formula.IMLOG10;
  $scope.IMLOG2 = Formula.IMLOG2;
  $scope.IMPOWER = Formula.IMPOWER;
  $scope.IMPRODUCT = Formula.IMPRODUCT;
  $scope.IMREAL = Formula.IMREAL;
  $scope.IMSEC = Formula.IMSEC;
  $scope.IMSECH = Formula.IMSECH;
  $scope.IMSIN = Formula.IMSIN;
  $scope.IMSINH = Formula.IMSINH;
  $scope.IMSQRT = Formula.IMSQRT;
  $scope.IMSUB = Formula.IMSUB;
  $scope.IMSUM = Formula.IMSUM;
  $scope.IMTAN = Formula.IMTAN;
  $scope.OCT2BIN = Formula.OCT2BIN;
  $scope.OCT2DEC = Formula.OCT2DEC;
  $scope.OCT2HEX = Formula.OCT2HEX;

  // Financial functions
  $scope.ACCRINT = Formula.ACCRINT;
  $scope.ACCRINTM = Formula.ACCRINTM;
  $scope.AMORDEGRC = Formula.AMORDEGRC;
  $scope.AMORLINC = Formula.AMORLINC;
  $scope.COUPDAYBS = Formula.COUPDAYBS;
  $scope.COUPDAYS = Formula.COUPDAYS;
  $scope.COUPDAYSNC = Formula.COUPDAYSNC;
  $scope.COUPNCD = Formula.COUPNCD;
  $scope.COUPNUM = Formula.COUPNUM;
  $scope.COUPPCD = Formula.COUPPCD;
  $scope.CUMIPMT = Formula.CUMIPMT;
  $scope.CUMPRINC = Formula.CUMPRINC;
  $scope.DB = Formula.DB;
  $scope.DDB = Formula.DDB;
  $scope.DISC = Formula.DISC;
  $scope.DOLLARDE = Formula.DOLLARDE;
  $scope.DOLLARFR = Formula.DOLLARFR;
  $scope.DURATION = Formula.DURATION;
  $scope.EFFECT = Formula.EFFECT;
  $scope.FV = Formula.FV;
  $scope.FVSCHEDULE = Formula.FVSCHEDULE;
  $scope.INTRATE = Formula.INTRATE;
  $scope.IPMT = Formula.IPMT;
  $scope.IRR = Formula.IRR;
  $scope.ISPMT = Formula.ISPMT;
  $scope.MDURATION = Formula.MDURATION;
  $scope.MIRR = Formula.MIRR;
  $scope.NOMINAL = Formula.NOMINAL;
  $scope.NPER = Formula.NPER;
  $scope.NPV = Formula.NPV;
  $scope.ODDFPRICE = Formula.ODDFPRICE;
  $scope.ODDFYIELD = Formula.ODDFYIELD;
  $scope.ODDLPRICE = Formula.ODDLPRICE;
  $scope.ODDLYIELD = Formula.ODDLYIELD;
  $scope.PDURATION = Formula.PDURATION;
  $scope.PMT = Formula.PMT;
  $scope.PPMT = Formula.PPMT;
  $scope.PRICE = Formula.PRICE;
  $scope.PRICEDISC = Formula.PRICEDISC;
  $scope.PRICEMAT = Formula.PRICEMAT;
  $scope.PV = Formula.PV;
  $scope.RATE = Formula.RATE;
  $scope.RECEIVED = Formula.RECEIVED;
  $scope.RRI = Formula.RRI;
  $scope.SLN = Formula.SLN;
  $scope.SYD = Formula.SYD;
  $scope.TBILLEQ = Formula.TBILLEQ;
  $scope.TBILLPRICE = Formula.TBILLPRICE;
  $scope.TBILLYIELD = Formula.TBILLYIELD;
  $scope.VDB = Formula.VDB;
  $scope.XIRR = Formula.XIRR;
  $scope.XNPV = Formula.XNPV;
  $scope.YIELD = Formula.YIELD;
  $scope.YIELDDISC = Formula.YIELDDISC;
  $scope.YIELDMAT = Formula.YIELDMAT;

  // Logical functions
  $scope.AND = Formula.AND;
  $scope.FALSE = Formula.FALSE;
  $scope.IF = Formula.IF;
  $scope.IFERROR = Formula.IFERROR;
  $scope.IFNA = Formula.IFNA;
  $scope.NOT = Formula.NOT;
  $scope.OR = Formula.OR;
  $scope.TRUE = Formula.TRUE;
  $scope.XOR = Formula.XOR;

  // Math functions
  $scope.ABS = Formula.ABS;
  $scope.ACOS = Formula.ACOS;
  $scope.ACOSH = Formula.ACOSH;
  $scope.ACOT = Formula.ACOT;
  $scope.ACOTH = Formula.ACOTH;
  $scope.AGGREGATE = Formula.AGGREGATE;
  $scope.ARABIC = Formula.ARABIC;
  $scope.ASIN = Formula.ASIN;
  $scope.ASINH = Formula.ASINH;
  $scope.ATAN = Formula.ATAN;
  $scope.ATAN2 = Formula.ATAN2;
  $scope.ATANH = Formula.ATANH;
  $scope.BASE = Formula.BASE;
  $scope.CEILING = Formula.CEILING;
  $scope.CEILINGMATH = Formula.CEILINGMATH
  $scope.CEILINGPRECISE = Formula.CEILINGPRECISE;
  $scope.COMBIN = Formula.COMBIN;
  $scope.COMBINA = Formula.COMBINA;
  $scope.COS = Formula.COS;
  $scope.COSH = Formula.COSH;
  $scope.COT = Formula.COT;
  $scope.COTH = Formula.COTH;
  $scope.CSC = Formula.CSC;
  $scope.CSCH = Formula.CSCH;
  $scope.COUNTBLANK = Formula.COUNTBLANK;
  $scope.COUNTIF = Formula.COUNTIF;
  $scope.COUNTUNIQUE = Formula.COUNTUNIQUE;
  $scope.DECIMAL = Formula.DECIMAL;
  $scope.DEGREES = Formula.DEGREES;
  $scope.EVEN = Formula.EVEN;
  $scope.EXP = Formula.EXP;
  $scope.FACT = Formula.FACT;
  $scope.FACTDOUBLE = Formula.FACTDOUBLE;
  $scope.FLOOR = Formula.FLOOR;
  $scope.FLOORMATH = Formula.FLOORMATH;
  $scope.FLOORPRECISE = Formula.FLOORPRECISE;
  $scope.GCD = Formula.GCD;
  $scope.INT = Formula.INT;
  $scope.ISEVEN = Formula.ISEVEN;
  $scope.ISOCEILING = Formula.ISOCEILING;
  $scope.ISODD = Formula.ISODD;
  $scope.LCM = Formula.LCM;
  $scope.LN = Formula.LN;
  $scope.LOG = Formula.LOG;
  $scope.LOG10 = Formula.LOG10;
  $scope.MDETERM = Formula.MDETERM;
  $scope.MINVERSE = Formula.MINVERSE;
  $scope.MMULT = Formula.MMULT;
  $scope.MOD = Formula.MOD;
  $scope.MROUND = Formula.MROUND;
  $scope.MULTINOMIAL = Formula.MULTINOMIAL;
  $scope.MUNIT = Formula.MUNIT;
  $scope.ODD = Formula.ODD;
  $scope.PI = Formula.PI;
  $scope.POWER = Formula.POWER;
  $scope.PRODUCT = Formula.PRODUCT;
  $scope.QUOTIENT = Formula.QUOTIENT;
  $scope.RADIANS = Formula.RADIANS;
  $scope.RAND = Formula.RAND;
  $scope.RANDBETWEEN = Formula.RANDBETWEEN;
  $scope.ROUND = Formula.ROUND;
  $scope.ROUNDDOWN = Formula.ROUNDDOWN;
  $scope.ROUNDUP = Formula.ROUNDUP;
  $scope.SEC = Formula.SEC;
  $scope.SECH = Formula.SECH;
  $scope.SERIESSUM = Formula.SERIESSUM;
  $scope.SIGN = Formula.SIGN;
  $scope.SIN = Formula.SIN;
  $scope.SINH = Formula.SINH;
  $scope.SQRT = Formula.SQRT;
  $scope.SQRTPI = Formula.SQRTPI;
  $scope.SUBTOTAL = Formula.SUBTOTAL;
  $scope.SUM = Formula.SUM;
  $scope.SUMIF = Formula.SUMIF;
  $scope.SUMIFS = Formula.SUMIFS;
  $scope.SUMPRODUCT = Formula.SUMPRODUCT;
  $scope.SUMSQ = Formula.SUMSQ;
  $scope.SUMX2MY2 = Formula.SUMX2MY2;
  $scope.SUMX2PY2 = Formula.SUMX2PY2;
  $scope.SUMXMY2 = Formula.SUMXMY2;
  $scope.TAN = Formula.TAN;
  $scope.TANH = Formula.TANH;
  $scope.TRUNC = Formula.TRUNC;

  // Statistical functions
  $scope.AVEDEV = Formula.AVEDEV;
  $scope.AVERAGE = Formula.AVERAGE;
  $scope.AVERAGEA = Formula.AVERAGEA;
  $scope.AVERAGEIF = Formula.AVERAGEIF;
  $scope.AVERAGEIFS = Formula.AVERAGEIFS;
  $scope.BETADIST = Formula.BETADIST;
  $scope.BETAINV = Formula.BETAINV;
  $scope.BINOMDIST = Formula.BINOMDIST;
  $scope.BINOMDISTRANGE = Formula.BINOMDISTRANGE;
  $scope.BINOMINV = Formula.BINOMINV;
  $scope.CHISQDIST = Formula.CHISQDIST;
  $scope.CHISQDISTRT = Formula.CHISQDISTRT;
  $scope.CHISQINV = Formula.CHISQINV;
  $scope.CHISQINVRT = Formula.CHISQINVRT;
  $scope.CHISQTEST = Formula.CHISQTEST;
  $scope.CONFIDENCENORM = Formula.CONFIDENCENORM;
  $scope.CONFIDENCET = Formula.CONFIDENCET;
  $scope.CORREL = Formula.CORREL;
  $scope.COUNT = Formula.COUNT;
  $scope.COUNTA = Formula.COUNTA;
  $scope.COUNTBLANK = Formula.COUNTBLANK;
  $scope.COUNTIF = Formula.COUNTIF;
  $scope.COUNTIFS = Formula.COUNTIFS;
  $scope.COVARIANCEP = Formula.COVARIANCEP;
  $scope.COVARIANCES = Formula.COVARIANCES;
  $scope.DEVSQ = Formula.DEVSQ;
  $scope.EXPONDIST = Formula.EXPONDIST;
  $scope.FDIST = Formula.FDIST;
  $scope.FDISTRT = Formula.FDISTRT;
  $scope.FINV = Formula.FINV;
  $scope.FINVRT = Formula.FINVRT;
  $scope.FTEST = Formula.FTEST;
  $scope.FISHER = Formula.FISHER;
  $scope.FISHERINV = Formula.FISHERINV;
  $scope.FORECAST = Formula.FORECAST;
  $scope.FREQUENCY = Formula.FREQUENCY;
  $scope.GAMMA = Formula.GAMMA;
  $scope.GAMMADIST = Formula.GAMMADIST;
  $scope.GAMMAINV = Formula.GAMMAINV;
  $scope.GAMMALN = Formula.GAMMALN;
  $scope.GAMMALNPRECISE = Formula.GAMMALNPRECISE;
  $scope.GAUSS = Formula.GAUSS;
  $scope.GEOMEAN = Formula.GEOMEAN;
  $scope.GROWTH = Formula.GROWTH;
  $scope.HARMEAN = Formula.HARMEAN;
  $scope.HYPGEOMDIST = Formula.HYPGEOMDIST;
  $scope.INTERCEPT = Formula.INTERCEPT;
  $scope.KURT = Formula.KURT;
  $scope.LARGE = Formula.LARGE;
  $scope.LINEST = Formula.LINEST;
  $scope.LOGEST = Formula.LOGEST;
  $scope.LOGNORMDIST = Formula.LOGNORMDIST;
  $scope.LOGNORMINV = Formula.LOGNORMINV;
  $scope.MAX = Formula.MAX;
  $scope.MAXA = Formula.MAXA;
  $scope.MEDIAN = Formula.MEDIAN;
  $scope.MIN = Formula.MIN;
  $scope.MINA = Formula.MINA;
  $scope.MODEMULT = Formula.MODEMULT;
  $scope.MODESNGL = Formula.MODESNGL;
  $scope.NEGBINOMDIST = Formula.NEGBINOMDIST;
  $scope.NORMDIST = Formula.NORMDIST;
  $scope.NORMINV = Formula.NORMINV;
  $scope.NORMSDIST = Formula.NORMSDIST;
  $scope.NORMSINV = Formula.NORMSINV;
  $scope.PEARSON = Formula.PEARSON;
  $scope.PERCENTILEEXC = Formula.PERCENTILEEXC;
  $scope.PERCENTILEINC = Formula.PERCENTILEINC;
  $scope.PERCENTRANKEXC = Formula.PERCENTRANKEXC;
  $scope.PERCENTRANKINC = Formula.PERCENTRANKINC;
  $scope.PERMUT = Formula.PERMUT;
  $scope.PERMUTATIONA = Formula.PERMUTATIONA;
  $scope.PHI = Formula.PHI;
  $scope.POISSONDIST = Formula.POISSONDIST;
  $scope.PROB = Formula.PROB;
  $scope.QUARTILEEXC = Formula.QUARTILEEXC;
  $scope.QUARTILEINC = Formula.QUARTILEINC;
  $scope.RANKAVG = Formula.RANKAVG;
  $scope.RANKEQ = Formula.RANKEQ;
  $scope.RSQ = Formula.RSQ;
  $scope.SKEW = Formula.SKEW;
  $scope.SKEWP = Formula.SKEWP;
  $scope.SLOPE = Formula.SLOPE;
  $scope.SMALL = Formula.SMALL;
  $scope.STANDARDIZE = Formula.STANDARDIZE;
  $scope.STDEVP = Formula.STDEVP;
  $scope.STDEVS = Formula.STDEVS;
  $scope.STDEVA = Formula.STDEVA;
  $scope.STDEVPA = Formula.STDEVPA;
  $scope.STEYX = Formula.STEYX;
  $scope.TDIST = Formula.TDIST;
  $scope.TDIST2T = Formula.TDIST2T;
  $scope.TDISTRT = Formula.TDISTRT;
  $scope.TINV = Formula.TINV;
  $scope.TINV2T = Formula.TINV2T;
  $scope.TTEST = Formula.TTEST;
  $scope.TREND = Formula.TREND;
  $scope.TRIMMEAN = Formula.TRIMMEAN;
  $scope.VARP = Formula.VARP;
  $scope.VARS = Formula.VARS;
  $scope.VARA = Formula.VARA;
  $scope.VARPA = Formula.VARPA;
  $scope.WEIBULLDIST = Formula.WEIBULLDIST;
  $scope.ZTEST = Formula.ZTEST;

  // Text functions
  $scope.CHAR = Formula.CHAR;
  $scope.CLEAN = Formula.CLEAN;
  $scope.CODE = Formula.CODE;
  $scope.CONCATENATE = Formula.CONCATENATE;
  $scope.DOLLAR = Formula.DOLLAR;
  $scope.EXACT = Formula.EXACT;
  $scope.FIND = Formula.FIND;
  $scope.FIXED = Formula.FIXED;
  $scope.JOIN = Formula.JOIN;
  $scope.LEFT = Formula.LEFT;
  $scope.LEN = Formula.LEN;
  $scope.LOWER = Formula.LOWER;
  $scope.MID = Formula.MID;
  $scope.NUMBERVALUE = Formula.NUMBERVALUE;
  $scope.PROPER = Formula.PROPER;
  $scope.REGEXEXTRACT = Formula.REGEXEXTRACT;
  $scope.REGEXMATCH = Formula.REGEXMATCH;
  $scope.REGEXREPLACE = Formula.REGEXREPLACE;
  $scope.REPLACE = Formula.REPLACE;
  $scope.REPT = Formula.REPT;
  $scope.RIGHT = Formula.RIGHT;
  $scope.ROMAN = Formula.ROMAN;
  $scope.SEARCH = Formula.SEARCH;
  $scope.SPLIT = Formula.SPLIT;
  $scope.SUBSTITUTE = Formula.SUBSTITUTE;
  $scope.T = Formula.T;
  $scope.TEXT = Formula.TEXT;
  $scope.TRIM = Formula.TRIM;
  $scope.UNICHAR = Formula.UNICHAR;
  $scope.UNICODE = Formula.UNICODE;
  $scope.UPPER = Formula.UPPER;
  $scope.VALUE = Formula.VALUE;

}