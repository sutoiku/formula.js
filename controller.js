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
  $scope.DATE = DATE;
  $scope.DATEVALUE = DATEVALUE;
  $scope.DAY = DAY;
  $scope.DAYS = DAYS;
  $scope.DAYS360 = DAYS360;
  $scope.EDATE = EDATE;
  $scope.EOMONTH = EOMONTH;
  $scope.HOUR = HOUR;
  $scope.ISOWEEKNUM = ISOWEEKNUM;
  $scope.MINUTE = MINUTE;
  $scope.MONTH = MONTH;
  $scope.NETWORKDAYS = NETWORKDAYS;
  $scope.NETWORKDAYSINTL = NETWORKDAYSINTL;
  $scope.NOW = NOW;
  $scope.SECOND = SECOND;
  $scope.TIME = TIME;
  $scope.TIMEVALUE = TIMEVALUE;
  $scope.TODAY = TODAY;
  $scope.WEEKDAY = WEEKDAY;
  $scope.WEEKNUM = WEEKNUM;
  $scope.WORKDAY = WORKDAY;
  $scope.WORKDAYINTL = WORKDAYINTL; 
  $scope.YEAR = YEAR;
  $scope.YEARFRAC = YEARFRAC;

  // Engineering functions
  $scope.BESSELI = BESSELI;
  $scope.BESSELJ = BESSELJ;
  $scope.BESSELK = BESSELK;
  $scope.BESSELY = BESSELY;
  $scope.BIN2DEC = BIN2DEC;
  $scope.BIN2HEX = BIN2HEX;
  $scope.BIN2OCT = BIN2OCT;
  $scope.BITAND = BITAND;
  $scope.BITLSHIFT = BITLSHIFT;
  $scope.BITOR = BITOR;
  $scope.BITRSHIFT = BITRSHIFT;
  $scope.BITXOR = BITXOR;
  $scope.COMPLEX = COMPLEX;
  $scope.CONVERT = CONVERT;
  $scope.DEC2BIN = DEC2BIN;
  $scope.DEC2HEX = DEC2HEX;
  $scope.DEC2OCT = DEC2OCT;
  $scope.DELTA = DELTA;
  $scope.ERF = ERF;
  $scope.ERFPRECISE = ERF.PRECISE;
  $scope.ERFC = ERFC;
  $scope.ERFCPRECISE = ERFC.PRECISE;
  $scope.GESTEP = GESTEP;
  $scope.HEX2BIN = HEX2BIN;
  $scope.HEX2DEC = HEX2DEC;
  $scope.HEX2OCT = HEX2OCT;
  $scope.IMABS = IMABS;
  $scope.IMAGINARY = IMAGINARY;
  $scope.IMARGUMENT = IMARGUMENT;
  $scope.IMCONJUGATE = IMCONJUGATE;
  $scope.IMCOS = IMCOS;
  $scope.IMCOSH = IMCOSH;
  $scope.IMCOT = IMCOT;
  $scope.IMCSC = IMCSC;
  $scope.IMCSCH = IMCSCH;
  $scope.IMDIV = IMDIV;
  $scope.IMEXP = IMEXP;
  $scope.IMLN = IMLN;
  $scope.IMLOG10 = IMLOG10;
  $scope.IMLOG2 = IMLOG2;
  $scope.IMPOWER = IMPOWER;
  $scope.IMPRODUCT = IMPRODUCT;
  $scope.IMREAL = IMREAL;
  $scope.IMSEC = IMSEC;
  $scope.IMSECH = IMSECH;
  $scope.IMSIN = IMSIN;
  $scope.IMSINH = IMSINH;
  $scope.IMSQRT = IMSQRT;
  $scope.IMSUB = IMSUB;
  $scope.IMSUM = IMSUM;
  $scope.IMTAN = IMTAN;
  $scope.OCT2BIN = OCT2BIN;
  $scope.OCT2DEC = OCT2DEC;
  $scope.OCT2HEX = OCT2HEX;

  // Financial functions
  $scope.ACCRINT = ACCRINT;
  $scope.ACCRINTM = ACCRINTM;
  $scope.AMORDEGRC = AMORDEGRC;
  $scope.AMORLINC = AMORLINC;
  $scope.COUPDAYBS = COUPDAYBS;
  $scope.COUPDAYS = COUPDAYS;
  $scope.COUPDAYSNC = COUPDAYSNC;
  $scope.COUPNCD = COUPNCD;
  $scope.COUPNUM = COUPNUM;
  $scope.COUPPCD = COUPPCD;
  $scope.CUMIPMT = CUMIPMT;
  $scope.CUMPRINC = CUMPRINC;
  $scope.DB = DB;
  $scope.DDB = DDB;
  $scope.DISC = DISC;
  $scope.DOLLARDE = DOLLARDE;
  $scope.DOLLARFR = DOLLARFR;
  $scope.DURATION = DURATION;
  $scope.EFFECT = EFFECT;
  $scope.FV = FV;
  $scope.FVSCHEDULE = FVSCHEDULE;
  $scope.INTRATE = INTRATE;
  $scope.IPMT = IPMT;
  $scope.IRR = IRR;
  $scope.ISPMT = ISPMT;
  $scope.MDURATION = MDURATION;
  $scope.MIRR = MIRR;
  $scope.NOMINAL = NOMINAL;
  $scope.NPER = NPER;
  $scope.NPV = NPV;
  $scope.ODDFPRICE = ODDFPRICE;
  $scope.ODDFYIELD = ODDFYIELD;
  $scope.ODDLPRICE = ODDLPRICE;
  $scope.ODDLYIELD = ODDLYIELD;
  $scope.PDURATION = PDURATION;
  $scope.PMT = PMT;
  $scope.PPMT = PPMT;
  $scope.PRICE = PRICE;
  $scope.PRICEDISC = PRICEDISC;
  $scope.PRICEMAT = PRICEMAT;
  $scope.PV = PV;
  $scope.RATE = RATE;
  $scope.RECEIVED = RECEIVED;
  $scope.RRI = RRI;
  $scope.SLN = SLN;
  $scope.SYD = SYD;
  $scope.TBILLEQ = TBILLEQ;
  $scope.TBILLPRICE = TBILLPRICE;
  $scope.TBILLYIELD = TBILLYIELD;
  $scope.VDB = VDB;
  $scope.XIRR = XIRR;
  $scope.XNPV = XNPV;
  $scope.YIELD = YIELD;
  $scope.YIELDDISC = YIELDDISC;
  $scope.YIELDMAT = YIELDMAT;

  // Logical functions
  $scope.AND = AND;
  $scope.FALSE = FALSE;
  $scope.IF = IF;
  $scope.IFERROR = IFERROR;
  $scope.IFNA = IFNA;
  $scope.NOT = NOT;
  $scope.OR = OR;
  $scope.TRUE = TRUE;
  $scope.XOR = XOR;

  // Math functions
  $scope.ABS = ABS;
  $scope.ACOS = ACOS;
  $scope.ACOSH = ACOSH;
  $scope.ACOT = ACOT;
  $scope.ACOTH = ACOTH;
  $scope.AGGREGATE = AGGREGATE;
  $scope.ARABIC = ARABIC;
  $scope.ASIN = ASIN;
  $scope.ASINH = ASINH;
  $scope.ATAN = ATAN;
  $scope.ATAN2 = ATAN2;
  $scope.ATANH = ATANH;
  $scope.BASE = BASE;
  $scope.CEILING = CEILING;
  $scope.CEILINGMATH = CEILINGMATH
  $scope.CEILINGPRECISE = CEILINGPRECISE;
  $scope.COMBIN = COMBIN;
  $scope.COMBINA = COMBINA;
  $scope.COS = COS;
  $scope.COSH = COSH;
  $scope.COT = COT;
  $scope.COTH = COTH;
  $scope.CSC = CSC;
  $scope.CSCH = CSCH;
  $scope.COUNTBLANK = COUNTBLANK;
  $scope.COUNTIF = COUNTIF;
  $scope.COUNTUNIQUE = COUNTUNIQUE;
  $scope.DECIMAL = DECIMAL;
  $scope.DEGREES = DEGREES;
  $scope.EVEN = EVEN;
  $scope.EXP = EXP;
  $scope.FACT = FACT;
  $scope.FACTDOUBLE = FACTDOUBLE;
  $scope.FLOOR = FLOOR;
  $scope.FLOORMATH = FLOORMATH;
  $scope.FLOORPRECISE = FLOORPRECISE;
  $scope.GCD = GCD;
  $scope.INT = INT;
  $scope.ISEVEN = ISEVEN;
  $scope.ISOCEILING = ISOCEILING;
  $scope.ISODD = ISODD;
  $scope.LCM = LCM;
  $scope.LN = LN;
  $scope.LOG = LOG;
  $scope.LOG10 = LOG10;
  $scope.MDETERM = MDETERM;
  $scope.MINVERSE = MINVERSE;
  $scope.MMULT = MMULT;
  $scope.MOD = MOD;
  $scope.MROUND = MROUND;
  $scope.MULTINOMIAL = MULTINOMIAL;
  $scope.MUNIT = MUNIT;
  $scope.ODD = ODD;
  $scope.PI = PI;
  $scope.POWER = POWER;
  $scope.PRODUCT = PRODUCT;
  $scope.QUOTIENT = QUOTIENT;
  $scope.RADIANS = RADIANS;
  $scope.RAND = RAND;
  $scope.RANDBETWEEN = RANDBETWEEN;
  $scope.ROUND = ROUND;
  $scope.ROUNDDOWN = ROUNDDOWN;
  $scope.ROUNDUP = ROUNDUP;
  $scope.SEC = SEC;
  $scope.SECH = SECH;
  $scope.SERIESSUM = SERIESSUM;
  $scope.SIGN = SIGN;
  $scope.SIN = SIN;
  $scope.SINH = SINH;
  $scope.SQRT = SQRT;
  $scope.SQRTPI = SQRTPI;
  $scope.SUBTOTAL = SUBTOTAL;
  $scope.SUM = SUM;
  $scope.SUMIF = SUMIF;
  $scope.SUMIFS = SUMIFS;
  $scope.SUMPRODUCT = SUMPRODUCT;
  $scope.SUMSQ = SUMSQ;
  $scope.SUMX2MY2 = SUMX2MY2;
  $scope.SUMX2PY2 = SUMX2PY2;
  $scope.SUMXMY2 = SUMXMY2;
  $scope.TAN = TAN;
  $scope.TANH = TANH;
  $scope.TRUNC = TRUNC;

  // Statistical functions
  $scope.AVEDEV = AVEDEV;
  $scope.AVERAGE = AVERAGE;
  $scope.AVERAGEA = AVERAGEA;
  $scope.AVERAGEIF = AVERAGEIF;
  $scope.AVERAGEIFS = AVERAGEIFS;
  $scope.BETADIST = BETADIST;
  $scope.BETAINV = BETAINV;
  $scope.BINOMDIST = BINOMDIST;
  $scope.BINOMDISTRANGE = BINOMDISTRANGE;
  $scope.BINOMINV = BINOMINV;
  $scope.CHISQDIST = CHISQDIST;
  $scope.CHISQDISTRT = CHISQDISTRT;
  $scope.CHISQINV = CHISQINV;
  $scope.CHISQINVRT = CHISQINVRT;
  $scope.CHISQTEST = CHISQTEST;
  $scope.CONFIDENCENORM = CONFIDENCENORM;
  $scope.CONFIDENCET = CONFIDENCET;
  $scope.CORREL = CORREL;
  $scope.COUNT = COUNT;
  $scope.COUNTA = COUNTA;
  $scope.COUNTBLANK = COUNTBLANK;
  $scope.COUNTIF = COUNTIF;
  $scope.COUNTIFS = COUNTIFS;
  $scope.COVARIANCEP = COVARIANCEP;
  $scope.COVARIANCES = COVARIANCES;
  $scope.DEVSQ = DEVSQ;
  $scope.EXPONDIST = EXPONDIST;
  $scope.FDIST = FDIST;
  $scope.FDISTRT = FDISTRT;
  $scope.FINV = FINV;
  $scope.FINVRT = FINVRT;
  $scope.FTEST = FTEST;
  $scope.FISHER = FISHER;
  $scope.FISHERINV = FISHERINV;
  $scope.FORECAST = FORECAST;
  $scope.FREQUENCY = FREQUENCY;
  $scope.GAMMA = GAMMA;
  $scope.GAMMADIST = GAMMADIST;
  $scope.GAMMAINV = GAMMAINV;
  $scope.GAMMALN = GAMMALN;
  $scope.GAMMALNPRECISE = GAMMALNPRECISE;
  $scope.GAUSS = GAUSS;
  $scope.GEOMEAN = GEOMEAN;
  $scope.GROWTH = GROWTH;
  $scope.HARMEAN = HARMEAN;
  $scope.HYPGEOMDIST = HYPGEOMDIST;
  $scope.INTERCEPT = INTERCEPT;
  $scope.KURT = KURT;
  $scope.LARGE = LARGE;
  $scope.LINEST = LINEST;
  $scope.LOGEST = LOGEST;
  $scope.LOGNORMDIST = LOGNORMDIST;
  $scope.LOGNORMINV = LOGNORMINV;
  $scope.MAX = MAX;
  $scope.MAXA = MAXA;
  $scope.MEDIAN = MEDIAN;
  $scope.MIN = MIN;
  $scope.MINA = MINA;
  $scope.MODEMULT = MODEMULT;
  $scope.MODESNGL = MODESNGL;
  $scope.NEGBINOMDIST = NEGBINOMDIST;
  $scope.NORMDIST = NORMDIST;
  $scope.NORMINV = NORMINV;
  $scope.NORMSDIST = NORMSDIST;
  $scope.NORMSINV = NORMSINV;
  $scope.PEARSON = PEARSON;
  $scope.PERCENTILEEXC = PERCENTILEEXC;
  $scope.PERCENTILEINC = PERCENTILEINC;
  $scope.PERCENTRANKEXC = PERCENTRANKEXC;
  $scope.PERCENTRANKINC = PERCENTRANKINC;
  $scope.PERMUT = PERMUT;
  $scope.PERMUTATIONA = PERMUTATIONA;
  $scope.PHI = PHI;
  $scope.POISSONDIST = POISSONDIST;
  $scope.PROB = PROB;
  $scope.QUARTILEEXC = QUARTILEEXC;
  $scope.QUARTILEINC = QUARTILEINC;
  $scope.RANKAVG = RANKAVG;
  $scope.RANKEQ = RANKEQ;
  $scope.RSQ = RSQ;
  $scope.SKEW = SKEW;
  $scope.SKEWP = SKEWP;
  $scope.SLOPE = SLOPE;
  $scope.SMALL = SMALL;
  $scope.STANDARDIZE = STANDARDIZE;
  $scope.STDEVP = STDEVP;
  $scope.STDEVS = STDEVS;
  $scope.STDEVA = STDEVA;
  $scope.STDEVPA = STDEVPA;
  $scope.STEYX = STEYX;
  $scope.TDIST = TDIST;
  $scope.TDIST2T = TDIST2T;
  $scope.TDISTRT = TDISTRT;
  $scope.TINV = TINV;
  $scope.TINV2T = TINV2T;
  $scope.TTEST = TTEST;
  $scope.TREND = TREND;
  $scope.TRIMMEAN = TRIMMEAN;
  $scope.VARP = VARP;
  $scope.VARS = VARS;
  $scope.VARA = VARA;
  $scope.VARPA = VARPA;
  $scope.WEIBULLDIST = WEIBULLDIST;
  $scope.ZTEST = ZTEST;

  // Text functions
  $scope.CHAR = CHAR;
  $scope.CLEAN = CLEAN;
  $scope.CODE = CODE;
  $scope.CONCATENATE = CONCATENATE;
  $scope.DOLLAR = DOLLAR;
  $scope.EXACT = EXACT;
  $scope.FIND = FIND;
  $scope.FIXED = FIXED;
  $scope.JOIN = JOIN;
  $scope.LEFT = LEFT;
  $scope.LEN = LEN;
  $scope.LOWER = LOWER;
  $scope.MID = MID;
  $scope.NUMBERVALUE = NUMBERVALUE;
  $scope.PROPER = PROPER;
  $scope.REGEXEXTRACT = REGEXEXTRACT;
  $scope.REGEXMATCH = REGEXMATCH;
  $scope.REGEXREPLACE = REGEXREPLACE;
  $scope.REPLACE = REPLACE;
  $scope.REPT = REPT;
  $scope.RIGHT = RIGHT;
  $scope.ROMAN = ROMAN;
  $scope.SEARCH = SEARCH;
  $scope.SPLIT = SPLIT;
  $scope.SUBSTITUTE = SUBSTITUTE;
  $scope.T = T;
  $scope.TEXT = TEXT;
  $scope.TRIM = TRIM;
  $scope.UNICHAR = UNICHAR;
  $scope.UNICODE = UNICODE;
  $scope.UPPER = UPPER;
  $scope.VALUE = VALUE;

}