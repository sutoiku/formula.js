var error = require('./error');
var jStat = require('jStat').jStat;
var text = require('./text');
var utils = require('./utils');
var bessel = require('bessel');

function isValidBinaryNumber(number) {
  return (/^[01]{1,10}$/).test(number);
}

exports.BESSELI = function(x, n) {
  x = utils.parseNumber(x);
  n = utils.parseNumber(n);
  if (utils.anyIsError(x, n)) {
    return error.value;
  }
  return bessel.besseli(x, n);
};

exports.BESSELJ = function(x, n) {
  x = utils.parseNumber(x);
  n = utils.parseNumber(n);
  if (utils.anyIsError(x, n)) {
    return error.value;
  }
  return bessel.besselj(x, n);
};

exports.BESSELK = function(x, n) {
  x = utils.parseNumber(x);
  n = utils.parseNumber(n);
  if (utils.anyIsError(x, n)) {
    return error.value;
  }
  return bessel.besselk(x, n);
};

exports.BESSELY = function(x, n) {
  x = utils.parseNumber(x);
  n = utils.parseNumber(n);
  if (utils.anyIsError(x, n)) {
    return error.value;
  }
  return bessel.bessely(x, n);
};

exports.BIN2DEC = function(number) {
  // Return error if number is not binary or contains more than 10 characters (10 digits)
  if (!isValidBinaryNumber(number)) {
    return error.num;
  }

  // Convert binary number to decimal
  var result = parseInt(number, 2);

  // Handle negative numbers
  var stringified = number.toString();
  if (stringified.length === 10 && stringified.substring(0, 1) === '1') {
    return parseInt(stringified.substring(1), 2) - 512;
  } else {
    return result;
  }
};


exports.BIN2HEX = function(number, places) {
  // Return error if number is not binary or contains more than 10 characters (10 digits)
  if (!isValidBinaryNumber(number)) {
    return error.num;
  }

  // Ignore places and return a 10-character hexadecimal number if number is negative
  var stringified = number.toString();
  if (stringified.length === 10 && stringified.substring(0, 1) === '1') {
    return (1099511627264 + parseInt(stringified.substring(1), 2)).toString(16);
  }

  // Convert binary number to hexadecimal
  var result = parseInt(number, 2).toString(16);

  // Return hexadecimal number using the minimum number of characters necessary if places is undefined
  if (places === undefined) {
    return result;
  } else {
    // Return error if places is nonnumeric
    if (isNaN(places)) {
      return error.value;
    }

    // Return error if places is negative
    if (places < 0) {
      return error.num;
    }

    // Truncate places in case it is not an integer
    places = Math.floor(places);

    // Pad return value with leading 0s (zeros) if necessary (using Underscore.string)
    return (places >= result.length) ? text.REPT('0', places - result.length) + result : error.num;
  }
};

exports.BIN2OCT = function(number, places) {
  // Return error if number is not binary or contains more than 10 characters (10 digits)
  if (!isValidBinaryNumber(number)) {
    return error.num;
  }

  // Ignore places and return a 10-character octal number if number is negative
  var stringified = number.toString();
  if (stringified.length === 10 && stringified.substring(0, 1) === '1') {
    return (1073741312 + parseInt(stringified.substring(1), 2)).toString(8);
  }

  // Convert binary number to octal
  var result = parseInt(number, 2).toString(8);

  // Return octal number using the minimum number of characters necessary if places is undefined
  if (places === undefined) {
    return result;
  } else {
    // Return error if places is nonnumeric
    if (isNaN(places)) {
      return error.value;
    }

    // Return error if places is negative
    if (places < 0) {
      return error.num;
    }

    // Truncate places in case it is not an integer
    places = Math.floor(places);

    // Pad return value with leading 0s (zeros) if necessary (using Underscore.string)
    return (places >= result.length) ? text.REPT('0', places - result.length) + result : error.num;
  }
};

exports.BITAND = function(number1, number2) {
  // Return error if either number is a non-numeric value
  number1 = utils.parseNumber(number1);
  number2 = utils.parseNumber(number2);
  if (utils.anyIsError(number1, number2)) {
    return error.value;
  }

  // Return error if either number is less than 0
  if (number1 < 0 || number2 < 0) {
    return error.num;
  }

  // Return error if either number is a non-integer
  if (Math.floor(number1) !== number1 || Math.floor(number2) !== number2) {
    return error.num;
  }

  // Return error if either number is greater than (2^48)-1
  if (number1 > 281474976710655 || number2 > 281474976710655) {
    return error.num;
  }

  // Return bitwise AND of two numbers
  return number1 & number2;
};

exports.BITLSHIFT = function(number, shift) {
  number = utils.parseNumber(number);
  shift = utils.parseNumber(shift);
  if (utils.anyIsError(number, shift)) {
    return error.value;
  }

  // Return error if number is less than 0
  if (number < 0) {
    return error.num;
  }

  // Return error if number is a non-integer
  if (Math.floor(number) !== number) {
    return error.num;
  }

  // Return error if number is greater than (2^48)-1
  if (number > 281474976710655) {
    return error.num;
  }

  // Return error if the absolute value of shift is greater than 53
  if (Math.abs(shift) > 53) {
    return error.num;
  }

  // Return number shifted by shift bits to the left or to the right if shift is negative
  return (shift >= 0) ? number << shift : number >> -shift;
};

exports.BITOR = function(number1, number2) {
  number1 = utils.parseNumber(number1);
  number2 = utils.parseNumber(number2);
  if (utils.anyIsError(number1, number2)) {
    return error.value;
  }

  // Return error if either number is less than 0
  if (number1 < 0 || number2 < 0) {
    return error.num;
  }

  // Return error if either number is a non-integer
  if (Math.floor(number1) !== number1 || Math.floor(number2) !== number2) {
    return error.num;
  }

  // Return error if either number is greater than (2^48)-1
  if (number1 > 281474976710655 || number2 > 281474976710655) {
    return error.num;
  }

  // Return bitwise OR of two numbers
  return number1 | number2;
};

exports.BITRSHIFT = function(number, shift) {
  number = utils.parseNumber(number);
  shift = utils.parseNumber(shift);
  if (utils.anyIsError(number, shift)) {
    return error.value;
  }

  // Return error if number is less than 0
  if (number < 0) {
    return error.num;
  }

  // Return error if number is a non-integer
  if (Math.floor(number) !== number) {
    return error.num;
  }

  // Return error if number is greater than (2^48)-1
  if (number > 281474976710655) {
    return error.num;
  }

  // Return error if the absolute value of shift is greater than 53
  if (Math.abs(shift) > 53) {
    return error.num;
  }

  // Return number shifted by shift bits to the right or to the left if shift is negative
  return (shift >= 0) ? number >> shift : number << -shift;
};

exports.BITXOR = function(number1, number2) {
  number1 = utils.parseNumber(number1);
  number2 = utils.parseNumber(number2);
  if (utils.anyIsError(number1, number2)) {
    return error.value;
  }

  // Return error if either number is less than 0
  if (number1 < 0 || number2 < 0) {
    return error.num;
  }

  // Return error if either number is a non-integer
  if (Math.floor(number1) !== number1 || Math.floor(number2) !== number2) {
    return error.num;
  }

  // Return error if either number is greater than (2^48)-1
  if (number1 > 281474976710655 || number2 > 281474976710655) {
    return error.num;
  }

  // Return bitwise XOR of two numbers
  return number1 ^ number2;
};

exports.COMPLEX = function(real, imaginary, suffix) {
  real = utils.parseNumber(real);
  imaginary = utils.parseNumber(imaginary);
  if (utils.anyIsError(real, imaginary)) {
    return real;
  }

  // Set suffix
  suffix = (suffix === undefined) ? 'i' : suffix;

  // Return error if suffix is neither "i" nor "j"
  if (suffix !== 'i' && suffix !== 'j') {
    return error.value;
  }

  // Return complex number
  if (real === 0 && imaginary === 0) {
    return 0;
  } else if (real === 0) {
    return (imaginary === 1) ? suffix : imaginary.toString() + suffix;
  } else if (imaginary === 0) {
    return real.toString();
  } else {
    var sign = (imaginary > 0) ? '+' : '';
    return real.toString() + sign + ((imaginary === 1) ? suffix : imaginary.toString() + suffix);
  }
};

exports.CONVERT = function(number, from_unit, to_unit) {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }

  // List of units supported by CONVERT and units defined by the International System of Units
  // [Name, Symbol, Alternate symbols, Quantity, ISU, CONVERT, Conversion ratio]
  var units = [
    ["a.u. of action", "?", null, "action", false, false, 1.05457168181818e-34],
    ["a.u. of charge", "e", null, "electric_charge", false, false, 1.60217653141414e-19],
    ["a.u. of energy", "Eh", null, "energy", false, false, 4.35974417757576e-18],
    ["a.u. of length", "a?", null, "length", false, false, 5.29177210818182e-11],
    ["a.u. of mass", "m?", null, "mass", false, false, 9.10938261616162e-31],
    ["a.u. of time", "?/Eh", null, "time", false, false, 2.41888432650516e-17],
    ["admiralty knot", "admkn", null, "speed", false, true, 0.514773333],
    ["ampere", "A", null, "electric_current", true, false, 1],
    ["ampere per meter", "A/m", null, "magnetic_field_intensity", true, false, 1],
    ["ångström", "Å", ["ang"], "length", false, true, 1e-10],
    ["are", "ar", null, "area", false, true, 100],
    ["astronomical unit", "ua", null, "length", false, false, 1.49597870691667e-11],
    ["bar", "bar", null, "pressure", false, false, 100000],
    ["barn", "b", null, "area", false, false, 1e-28],
    ["becquerel", "Bq", null, "radioactivity", true, false, 1],
    ["bit", "bit", ["b"], "information", false, true, 1],
    ["btu", "BTU", ["btu"], "energy", false, true, 1055.05585262],
    ["byte", "byte", null, "information", false, true, 8],
    ["candela", "cd", null, "luminous_intensity", true, false, 1],
    ["candela per square metre", "cd/m?", null, "luminance", true, false, 1],
    ["coulomb", "C", null, "electric_charge", true, false, 1],
    ["cubic ångström", "ang3", ["ang^3"], "volume", false, true, 1e-30],
    ["cubic foot", "ft3", ["ft^3"], "volume", false, true, 0.028316846592],
    ["cubic inch", "in3", ["in^3"], "volume", false, true, 0.000016387064],
    ["cubic light-year", "ly3", ["ly^3"], "volume", false, true, 8.46786664623715e-47],
    ["cubic metre", "m?", null, "volume", true, true, 1],
    ["cubic mile", "mi3", ["mi^3"], "volume", false, true, 4168181825.44058],
    ["cubic nautical mile", "Nmi3", ["Nmi^3"], "volume", false, true, 6352182208],
    ["cubic Pica", "Pica3", ["Picapt3", "Pica^3", "Picapt^3"], "volume", false, true, 7.58660370370369e-8],
    ["cubic yard", "yd3", ["yd^3"], "volume", false, true, 0.764554857984],
    ["cup", "cup", null, "volume", false, true, 0.0002365882365],
    ["dalton", "Da", ["u"], "mass", false, false, 1.66053886282828e-27],
    ["day", "d", ["day"], "time", false, true, 86400],
    ["degree", "°", null, "angle", false, false, 0.0174532925199433],
    ["degrees Rankine", "Rank", null, "temperature", false, true, 0.555555555555556],
    ["dyne", "dyn", ["dy"], "force", false, true, 0.00001],
    ["electronvolt", "eV", ["ev"], "energy", false, true, 1.60217656514141],
    ["ell", "ell", null, "length", false, true, 1.143],
    ["erg", "erg", ["e"], "energy", false, true, 1e-7],
    ["farad", "F", null, "electric_capacitance", true, false, 1],
    ["fluid ounce", "oz", null, "volume", false, true, 0.0000295735295625],
    ["foot", "ft", null, "length", false, true, 0.3048],
    ["foot-pound", "flb", null, "energy", false, true, 1.3558179483314],
    ["gal", "Gal", null, "acceleration", false, false, 0.01],
    ["gallon", "gal", null, "volume", false, true, 0.003785411784],
    ["gauss", "G", ["ga"], "magnetic_flux_density", false, true, 1],
    ["grain", "grain", null, "mass", false, true, 0.0000647989],
    ["gram", "g", null, "mass", false, true, 0.001],
    ["gray", "Gy", null, "absorbed_dose", true, false, 1],
    ["gross registered ton", "GRT", ["regton"], "volume", false, true, 2.8316846592],
    ["hectare", "ha", null, "area", false, true, 10000],
    ["henry", "H", null, "inductance", true, false, 1],
    ["hertz", "Hz", null, "frequency", true, false, 1],
    ["horsepower", "HP", ["h"], "power", false, true, 745.69987158227],
    ["horsepower-hour", "HPh", ["hh", "hph"], "energy", false, true, 2684519.538],
    ["hour", "h", ["hr"], "time", false, true, 3600],
    ["imperial gallon (U.K.)", "uk_gal", null, "volume", false, true, 0.00454609],
    ["imperial hundredweight", "lcwt", ["uk_cwt", "hweight"], "mass", false, true, 50.802345],
    ["imperial quart (U.K)", "uk_qt", null, "volume", false, true, 0.0011365225],
    ["imperial ton", "brton", ["uk_ton", "LTON"], "mass", false, true, 1016.046909],
    ["inch", "in", null, "length", false, true, 0.0254],
    ["international acre", "uk_acre", null, "area", false, true, 4046.8564224],
    ["IT calorie", "cal", null, "energy", false, true, 4.1868],
    ["joule", "J", null, "energy", true, true, 1],
    ["katal", "kat", null, "catalytic_activity", true, false, 1],
    ["kelvin", "K", ["kel"], "temperature", true, true, 1],
    ["kilogram", "kg", null, "mass", true, true, 1],
    ["knot", "kn", null, "speed", false, true, 0.514444444444444],
    ["light-year", "ly", null, "length", false, true, 9460730472580800],
    ["litre", "L", ["l", "lt"], "volume", false, true, 0.001],
    ["lumen", "lm", null, "luminous_flux", true, false, 1],
    ["lux", "lx", null, "illuminance", true, false, 1],
    ["maxwell", "Mx", null, "magnetic_flux", false, false, 1e-18],
    ["measurement ton", "MTON", null, "volume", false, true, 1.13267386368],
    ["meter per hour", "m/h", ["m/hr"], "speed", false, true, 0.00027777777777778],
    ["meter per second", "m/s", ["m/sec"], "speed", true, true, 1],
    ["meter per second squared", "m?s??", null, "acceleration", true, false, 1],
    ["parsec", "pc", ["parsec"], "length", false, true, 30856775814671900],
    ["meter squared per second", "m?/s", null, "kinematic_viscosity", true, false, 1],
    ["metre", "m", null, "length", true, true, 1],
    ["miles per hour", "mph", null, "speed", false, true, 0.44704],
    ["millimetre of mercury", "mmHg", null, "pressure", false, false, 133.322],
    ["minute", "?", null, "angle", false, false, 0.000290888208665722],
    ["minute", "min", ["mn"], "time", false, true, 60],
    ["modern teaspoon", "tspm", null, "volume", false, true, 0.000005],
    ["mole", "mol", null, "amount_of_substance", true, false, 1],
    ["morgen", "Morgen", null, "area", false, true, 2500],
    ["n.u. of action", "?", null, "action", false, false, 1.05457168181818e-34],
    ["n.u. of mass", "m?", null, "mass", false, false, 9.10938261616162e-31],
    ["n.u. of speed", "c?", null, "speed", false, false, 299792458],
    ["n.u. of time", "?/(me?c??)", null, "time", false, false, 1.28808866778687e-21],
    ["nautical mile", "M", ["Nmi"], "length", false, true, 1852],
    ["newton", "N", null, "force", true, true, 1],
    ["œrsted", "Oe ", null, "magnetic_field_intensity", false, false, 79.5774715459477],
    ["ohm", "Ω", null, "electric_resistance", true, false, 1],
    ["ounce mass", "ozm", null, "mass", false, true, 0.028349523125],
    ["pascal", "Pa", null, "pressure", true, false, 1],
    ["pascal second", "Pa?s", null, "dynamic_viscosity", true, false, 1],
    ["pferdestärke", "PS", null, "power", false, true, 735.49875],
    ["phot", "ph", null, "illuminance", false, false, 0.0001],
    ["pica (1/6 inch)", "pica", null, "length", false, true, 0.00035277777777778],
    ["pica (1/72 inch)", "Pica", ["Picapt"], "length", false, true, 0.00423333333333333],
    ["poise", "P", null, "dynamic_viscosity", false, false, 0.1],
    ["pond", "pond", null, "force", false, true, 0.00980665],
    ["pound force", "lbf", null, "force", false, true, 4.4482216152605],
    ["pound mass", "lbm", null, "mass", false, true, 0.45359237],
    ["quart", "qt", null, "volume", false, true, 0.000946352946],
    ["radian", "rad", null, "angle", true, false, 1],
    ["second", "?", null, "angle", false, false, 0.00000484813681109536],
    ["second", "s", ["sec"], "time", true, true, 1],
    ["short hundredweight", "cwt", ["shweight"], "mass", false, true, 45.359237],
    ["siemens", "S", null, "electrical_conductance", true, false, 1],
    ["sievert", "Sv", null, "equivalent_dose", true, false, 1],
    ["slug", "sg", null, "mass", false, true, 14.59390294],
    ["square ångström", "ang2", ["ang^2"], "area", false, true, 1e-20],
    ["square foot", "ft2", ["ft^2"], "area", false, true, 0.09290304],
    ["square inch", "in2", ["in^2"], "area", false, true, 0.00064516],
    ["square light-year", "ly2", ["ly^2"], "area", false, true, 8.95054210748189e+31],
    ["square meter", "m?", null, "area", true, true, 1],
    ["square mile", "mi2", ["mi^2"], "area", false, true, 2589988.110336],
    ["square nautical mile", "Nmi2", ["Nmi^2"], "area", false, true, 3429904],
    ["square Pica", "Pica2", ["Picapt2", "Pica^2", "Picapt^2"], "area", false, true, 0.00001792111111111],
    ["square yard", "yd2", ["yd^2"], "area", false, true, 0.83612736],
    ["statute mile", "mi", null, "length", false, true, 1609.344],
    ["steradian", "sr", null, "solid_angle", true, false, 1],
    ["stilb", "sb", null, "luminance", false, false, 0.0001],
    ["stokes", "St", null, "kinematic_viscosity", false, false, 0.0001],
    ["stone", "stone", null, "mass", false, true, 6.35029318],
    ["tablespoon", "tbs", null, "volume", false, true, 0.0000147868],
    ["teaspoon", "tsp", null, "volume", false, true, 0.00000492892],
    ["tesla", "T", null, "magnetic_flux_density", true, true, 1],
    ["thermodynamic calorie", "c", null, "energy", false, true, 4.184],
    ["ton", "ton", null, "mass", false, true, 907.18474],
    ["tonne", "t", null, "mass", false, false, 1000],
    ["U.K. pint", "uk_pt", null, "volume", false, true, 0.00056826125],
    ["U.S. bushel", "bushel", null, "volume", false, true, 0.03523907],
    ["U.S. oil barrel", "barrel", null, "volume", false, true, 0.158987295],
    ["U.S. pint", "pt", ["us_pt"], "volume", false, true, 0.000473176473],
    ["U.S. survey mile", "survey_mi", null, "length", false, true, 1609.347219],
    ["U.S. survey/statute acre", "us_acre", null, "area", false, true, 4046.87261],
    ["volt", "V", null, "voltage", true, false, 1],
    ["watt", "W", null, "power", true, true, 1],
    ["watt-hour", "Wh", ["wh"], "energy", false, true, 3600],
    ["weber", "Wb", null, "magnetic_flux", true, false, 1],
    ["yard", "yd", null, "length", false, true, 0.9144],
    ["year", "yr", null, "time", false, true, 31557600]
  ];

  // Binary prefixes
  // [Name, Prefix power of 2 value, Previx value, Abbreviation, Derived from]
  var binary_prefixes = {
    Yi: ["yobi", 80, 1208925819614629174706176, "Yi", "yotta"],
    Zi: ["zebi", 70, 1180591620717411303424, "Zi", "zetta"],
    Ei: ["exbi", 60, 1152921504606846976, "Ei", "exa"],
    Pi: ["pebi", 50, 1125899906842624, "Pi", "peta"],
    Ti: ["tebi", 40, 1099511627776, "Ti", "tera"],
    Gi: ["gibi", 30, 1073741824, "Gi", "giga"],
    Mi: ["mebi", 20, 1048576, "Mi", "mega"],
    ki: ["kibi", 10, 1024, "ki", "kilo"]
  };

  // Unit prefixes
  // [Name, Multiplier, Abbreviation]
  var unit_prefixes = {
    Y: ["yotta", 1e+24, "Y"],
    Z: ["zetta", 1e+21, "Z"],
    E: ["exa", 1e+18, "E"],
    P: ["peta", 1e+15, "P"],
    T: ["tera", 1e+12, "T"],
    G: ["giga", 1e+09, "G"],
    M: ["mega", 1e+06, "M"],
    k: ["kilo", 1e+03, "k"],
    h: ["hecto", 1e+02, "h"],
    e: ["dekao", 1e+01, "e"],
    d: ["deci", 1e-01, "d"],
    c: ["centi", 1e-02, "c"],
    m: ["milli", 1e-03, "m"],
    u: ["micro", 1e-06, "u"],
    n: ["nano", 1e-09, "n"],
    p: ["pico", 1e-12, "p"],
    f: ["femto", 1e-15, "f"],
    a: ["atto", 1e-18, "a"],
    z: ["zepto", 1e-21, "z"],
    y: ["yocto", 1e-24, "y"]
  };

  // Initialize units and multipliers
  var from = null;
  var to = null;
  var base_from_unit = from_unit;
  var base_to_unit = to_unit;
  var from_multiplier = 1;
  var to_multiplier = 1;
  var alt;

  // Lookup from and to units
  for (var i = 0; i < units.length; i++) {
    alt = (units[i][2] === null) ? [] : units[i][2];
    if (units[i][1] === base_from_unit || alt.indexOf(base_from_unit) >= 0) {
      from = units[i];
    }
    if (units[i][1] === base_to_unit || alt.indexOf(base_to_unit) >= 0) {
      to = units[i];
    }
  }

  // Lookup from prefix
  if (from === null) {
    var from_binary_prefix = binary_prefixes[from_unit.substring(0, 2)];
    var from_unit_prefix = unit_prefixes[from_unit.substring(0, 1)];

    // Handle dekao unit prefix (only unit prefix with two characters)
    if (from_unit.substring(0, 2) === 'da') {
      from_unit_prefix = ["dekao", 1e+01, "da"];
    }

    // Handle binary prefixes first (so that 'Yi' is processed before 'Y')
    if (from_binary_prefix) {
      from_multiplier = from_binary_prefix[2];
      base_from_unit = from_unit.substring(2);
    } else if (from_unit_prefix) {
      from_multiplier = from_unit_prefix[1];
      base_from_unit = from_unit.substring(from_unit_prefix[2].length);
    }

    // Lookup from unit
    for (var j = 0; j < units.length; j++) {
      alt = (units[j][2] === null) ? [] : units[j][2];
      if (units[j][1] === base_from_unit || alt.indexOf(base_from_unit) >= 0) {
        from = units[j];
      }
    }
  }

  // Lookup to prefix
  if (to === null) {
    var to_binary_prefix = binary_prefixes[to_unit.substring(0, 2)];
    var to_unit_prefix = unit_prefixes[to_unit.substring(0, 1)];

    // Handle dekao unit prefix (only unit prefix with two characters)
    if (to_unit.substring(0, 2) === 'da') {
      to_unit_prefix = ["dekao", 1e+01, "da"];
    }

    // Handle binary prefixes first (so that 'Yi' is processed before 'Y')
    if (to_binary_prefix) {
      to_multiplier = to_binary_prefix[2];
      base_to_unit = to_unit.substring(2);
    } else if (to_unit_prefix) {
      to_multiplier = to_unit_prefix[1];
      base_to_unit = to_unit.substring(to_unit_prefix[2].length);
    }

    // Lookup to unit
    for (var k = 0; k < units.length; k++) {
      alt = (units[k][2] === null) ? [] : units[k][2];
      if (units[k][1] === base_to_unit || alt.indexOf(base_to_unit) >= 0) {
        to = units[k];
      }
    }
  }

  // Return error if a unit does not exist
  if (from === null || to === null) {
    return error.na;
  }

  // Return error if units represent different quantities
  if (from[3] !== to[3]) {
    return error.na;
  }

  // Return converted number
  return number * from[6] * from_multiplier / (to[6] * to_multiplier);
};

exports.DEC2BIN = function(number, places) {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }

  // Return error if number is not decimal, is lower than -512, or is greater than 511
  if (!/^-?[0-9]{1,3}$/.test(number) || number < -512 || number > 511) {
    return error.num;
  }

  // Ignore places and return a 10-character binary number if number is negative
  if (number < 0) {
    return '1' + text.REPT('0', 9 - (512 + number).toString(2).length) + (512 + number).toString(2);
  }

  // Convert decimal number to binary
  var result = parseInt(number, 10).toString(2);

  // Return binary number using the minimum number of characters necessary if places is undefined
  if (typeof places === 'undefined') {
    return result;
  } else {
    // Return error if places is nonnumeric
    if (isNaN(places)) {
      return error.value;
    }

    // Return error if places is negative
    if (places < 0) {
      return error.num;
    }

    // Truncate places in case it is not an integer
    places = Math.floor(places);

    // Pad return value with leading 0s (zeros) if necessary (using Underscore.string)
    return (places >= result.length) ? text.REPT('0', places - result.length) + result : error.num;
  }
};

exports.DEC2HEX = function(number, places) {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }

  // Return error if number is not decimal, is lower than -549755813888, or is greater than 549755813887
  if (!/^-?[0-9]{1,12}$/.test(number) || number < -549755813888 || number > 549755813887) {
    return error.num;
  }

  // Ignore places and return a 10-character hexadecimal number if number is negative
  if (number < 0) {
    return (1099511627776 + number).toString(16);
  }

  // Convert decimal number to hexadecimal
  var result = parseInt(number, 10).toString(16);

  // Return hexadecimal number using the minimum number of characters necessary if places is undefined
  if (typeof places === 'undefined') {
    return result;
  } else {
    // Return error if places is nonnumeric
    if (isNaN(places)) {
      return error.value;
    }

    // Return error if places is negative
    if (places < 0) {
      return error.num;
    }

    // Truncate places in case it is not an integer
    places = Math.floor(places);

    // Pad return value with leading 0s (zeros) if necessary (using Underscore.string)
    return (places >= result.length) ? text.REPT('0', places - result.length) + result : error.num;
  }
};

exports.DEC2OCT = function(number, places) {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }

  // Return error if number is not decimal, is lower than -549755813888, or is greater than 549755813887
  if (!/^-?[0-9]{1,9}$/.test(number) || number < -536870912 || number > 536870911) {
    return error.num;
  }

  // Ignore places and return a 10-character octal number if number is negative
  if (number < 0) {
    return (1073741824 + number).toString(8);
  }

  // Convert decimal number to octal
  var result = parseInt(number, 10).toString(8);

  // Return octal number using the minimum number of characters necessary if places is undefined
  if (typeof places === 'undefined') {
    return result;
  } else {
    // Return error if places is nonnumeric
    if (isNaN(places)) {
      return error.value;
    }

    // Return error if places is negative
    if (places < 0) {
      return error.num;
    }

    // Truncate places in case it is not an integer
    places = Math.floor(places);

    // Pad return value with leading 0s (zeros) if necessary (using Underscore.string)
    return (places >= result.length) ? text.REPT('0', places - result.length) + result : error.num;
  }
};

exports.DELTA = function(number1, number2) {
  // Set number2 to zero if undefined
  number2 = (number2 === undefined) ? 0 : number2;
  number1 = utils.parseNumber(number1);
  number2 = utils.parseNumber(number2);
  if (utils.anyIsError(number1, number2)) {
    return error.value;
  }

  // Return delta
  return (number1 === number2) ? 1 : 0;
};

// TODO: why is upper_bound not used ? The excel documentation has no examples with upper_bound
exports.ERF = function(lower_bound, upper_bound) {
  // Set number2 to zero if undefined
  upper_bound = (upper_bound === undefined) ? 0 : upper_bound;

  lower_bound = utils.parseNumber(lower_bound);
  upper_bound = utils.parseNumber(upper_bound);
  if (utils.anyIsError(lower_bound, upper_bound)) {
    return error.value;
  }

  return jStat.erf(lower_bound);
};

// TODO
exports.ERF.PRECISE = function() {
 throw new Error('ERF.PRECISE is not implemented');
};

exports.ERFC = function(x) {
  // Return error if x is not a number
  if (isNaN(x)) {
    return error.value;
  }

  return jStat.erfc(x);
};

// TODO
exports.ERFC.PRECISE = function() {
 throw new Error('ERFC.PRECISE is not implemented');
};

exports.GESTEP = function(number, step) {
  step = step || 0;
  number = utils.parseNumber(number);
  if (utils.anyIsError(step, number)) {
    return number;
  }

  // Return delta
  return (number >= step) ? 1 : 0;
};

exports.HEX2BIN = function(number, places) {
  // Return error if number is not hexadecimal or contains more than ten characters (10 digits)
  if (!/^[0-9A-Fa-f]{1,10}$/.test(number)) {
    return error.num;
  }

  // Check if number is negative
  var negative = (number.length === 10 && number.substring(0, 1).toLowerCase() === 'f') ? true : false;

  // Convert hexadecimal number to decimal
  var decimal = (negative) ? parseInt(number, 16) - 1099511627776 : parseInt(number, 16);

  // Return error if number is lower than -512 or greater than 511
  if (decimal < -512 || decimal > 511) {
    return error.num;
  }

  // Ignore places and return a 10-character binary number if number is negative
  if (negative) {
    return '1' + text.REPT('0', 9 - (512 + decimal).toString(2).length) + (512 + decimal).toString(2);
  }

  // Convert decimal number to binary
  var result = decimal.toString(2);

  // Return binary number using the minimum number of characters necessary if places is undefined
  if (places === undefined) {
    return result;
  } else {
    // Return error if places is nonnumeric
    if (isNaN(places)) {
      return error.value;
    }

    // Return error if places is negative
    if (places < 0) {
      return error.num;
    }

    // Truncate places in case it is not an integer
    places = Math.floor(places);

    // Pad return value with leading 0s (zeros) if necessary (using Underscore.string)
    return (places >= result.length) ? text.REPT('0', places - result.length) + result : error.num;
  }
};

exports.HEX2DEC = function(number) {
  // Return error if number is not hexadecimal or contains more than ten characters (10 digits)
  if (!/^[0-9A-Fa-f]{1,10}$/.test(number)) {
    return error.num;
  }

  // Convert hexadecimal number to decimal
  var decimal = parseInt(number, 16);

  // Return decimal number
  return (decimal >= 549755813888) ? decimal - 1099511627776 : decimal;
};

exports.HEX2OCT = function(number, places) {
  // Return error if number is not hexadecimal or contains more than ten characters (10 digits)
  if (!/^[0-9A-Fa-f]{1,10}$/.test(number)) {
    return error.num;
  }

  // Convert hexadecimal number to decimal
  var decimal = parseInt(number, 16);

  // Return error if number is positive and greater than 0x1fffffff (536870911)
  if (decimal > 536870911 && decimal < 1098974756864) {
    return error.num;
  }

  // Ignore places and return a 10-character octal number if number is negative
  if (decimal >= 1098974756864) {
    return (decimal - 1098437885952).toString(8);
  }

  // Convert decimal number to octal
  var result = decimal.toString(8);

  // Return octal number using the minimum number of characters necessary if places is undefined
  if (places === undefined) {
    return result;
  } else {
    // Return error if places is nonnumeric
    if (isNaN(places)) {
      return error.value;
    }

    // Return error if places is negative
    if (places < 0) {
      return error.num;
    }

    // Truncate places in case it is not an integer
    places = Math.floor(places);

    // Pad return value with leading 0s (zeros) if necessary (using Underscore.string)
    return (places >= result.length) ? text.REPT('0', places - result.length) + result : error.num;
  }
};

exports.IMABS = function(inumber) {
  // Lookup real and imaginary coefficients using exports.js [http://formulajs.org]
  var x = exports.IMREAL(inumber);
  var y = exports.IMAGINARY(inumber);

  // Return error if either coefficient is not a number
  if (utils.anyIsError(x, y)) {
    return error.value;
  }

  // Return absolute value of complex number
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};

exports.IMAGINARY = function(inumber) {
  if (inumber === undefined || inumber === true || inumber === false) {
    return error.value;
  }

  // Return 0 if inumber is equal to 0
  if (inumber === 0 || inumber === '0') {
    return 0;
  }

  // Handle special cases
  if (['i', 'j'].indexOf(inumber) >= 0) {
    return 1;
  }

  // Normalize imaginary coefficient
  inumber = inumber.replace('+i', '+1i').replace('-i', '-1i').replace('+j', '+1j').replace('-j', '-1j');

  // Lookup sign
  var plus = inumber.indexOf('+');
  var minus = inumber.indexOf('-');
  if (plus === 0) {
    plus = inumber.indexOf('+', 1);
  }

  if (minus === 0) {
    minus = inumber.indexOf('-', 1);
  }

  // Lookup imaginary unit
  var last = inumber.substring(inumber.length - 1, inumber.length);
  var unit = (last === 'i' || last === 'j');

  if (plus >= 0 || minus >= 0) {
    // Return error if imaginary unit is neither i nor j
    if (!unit) {
      return error.num;
    }

    // Return imaginary coefficient of complex number
    if (plus >= 0) {
      return (isNaN(inumber.substring(0, plus)) || isNaN(inumber.substring(plus + 1, inumber.length - 1))) ?
        error.num :
        Number(inumber.substring(plus + 1, inumber.length - 1));
    } else {
      return (isNaN(inumber.substring(0, minus)) || isNaN(inumber.substring(minus + 1, inumber.length - 1))) ?
        error.num :
        -Number(inumber.substring(minus + 1, inumber.length - 1));
    }
  } else {
    if (unit) {
      return (isNaN(inumber.substring(0, inumber.length - 1))) ? error.num : inumber.substring(0, inumber.length - 1);
    } else {
      return (isNaN(inumber)) ? error.num : 0;
    }
  }
};

exports.IMARGUMENT = function(inumber) {
  // Lookup real and imaginary coefficients using exports.js [http://formulajs.org]
  var x = exports.IMREAL(inumber);
  var y = exports.IMAGINARY(inumber);

  // Return error if either coefficient is not a number
  if (utils.anyIsError(x, y)) {
    return error.value;
  }

  // Return error if inumber is equal to zero
  if (x === 0 && y === 0) {
    return error.div0;
  }

  // Return PI/2 if x is equal to zero and y is positive
  if (x === 0 && y > 0) {
    return Math.PI / 2;
  }

  // Return -PI/2 if x is equal to zero and y is negative
  if (x === 0 && y < 0) {
    return -Math.PI / 2;
  }

  // Return zero if x is negative and y is equal to zero
  if (y === 0 && x > 0) {
    return 0;
  }

  // Return zero if x is negative and y is equal to zero
  if (y === 0 && x < 0) {
    return -Math.PI;
  }

  // Return argument of complex number
  if (x > 0) {
    return Math.atan(y / x);
  } else if (x < 0 && y >= 0) {
    return Math.atan(y / x) + Math.PI;
  } else {
    return Math.atan(y / x) - Math.PI;
  }
};

exports.IMCONJUGATE = function(inumber) {
  // Lookup real and imaginary coefficients using exports.js [http://formulajs.org]
  var x = exports.IMREAL(inumber);
  var y = exports.IMAGINARY(inumber);

  if (utils.anyIsError(x, y)) {
    return error.value;
  }

  // Lookup imaginary unit
  var unit = inumber.substring(inumber.length - 1);
  unit = (unit === 'i' || unit === 'j') ? unit : 'i';

  // Return conjugate of complex number
  return (y !== 0) ? exports.COMPLEX(x, -y, unit) : inumber;
};

exports.IMCOS = function(inumber) {
  // Lookup real and imaginary coefficients using exports.js [http://formulajs.org]
  var x = exports.IMREAL(inumber);
  var y = exports.IMAGINARY(inumber);

  if (utils.anyIsError(x, y)) {
    return error.value;
  }

  // Lookup imaginary unit
  var unit = inumber.substring(inumber.length - 1);
  unit = (unit === 'i' || unit === 'j') ? unit : 'i';

  // Return cosine of complex number
  return exports.COMPLEX(Math.cos(x) * (Math.exp(y) + Math.exp(-y)) / 2, -Math.sin(x) * (Math.exp(y) - Math.exp(-y)) / 2, unit);
};

exports.IMCOSH = function(inumber) {
  // Lookup real and imaginary coefficients using exports.js [http://formulajs.org]
  var x = exports.IMREAL(inumber);
  var y = exports.IMAGINARY(inumber);

  if (utils.anyIsError(x, y)) {
    return error.value;
  }

  // Lookup imaginary unit
  var unit = inumber.substring(inumber.length - 1);
  unit = (unit === 'i' || unit === 'j') ? unit : 'i';

  // Return hyperbolic cosine of complex number
  return exports.COMPLEX(Math.cos(y) * (Math.exp(x) + Math.exp(-x)) / 2, Math.sin(y) * (Math.exp(x) - Math.exp(-x)) / 2, unit);
};

exports.IMCOT = function(inumber) {
  // Lookup real and imaginary coefficients using Formula.js [http://formulajs.org]
  var x = exports.IMREAL(inumber);
  var y = exports.IMAGINARY(inumber);

  if (utils.anyIsError(x, y)) {
    return error.value;
  }

  // Return cotangent of complex number
  return exports.IMDIV(exports.IMCOS(inumber), exports.IMSIN(inumber));
};

exports.IMDIV = function(inumber1, inumber2) {
  // Lookup real and imaginary coefficients using Formula.js [http://formulajs.org]
  var a = exports.IMREAL(inumber1);
  var b = exports.IMAGINARY(inumber1);
  var c = exports.IMREAL(inumber2);
  var d = exports.IMAGINARY(inumber2);

  if (utils.anyIsError(a, b, c, d)) {
    return error.value;
  }

  // Lookup imaginary unit
  var unit1 = inumber1.substring(inumber1.length - 1);
  var unit2 = inumber2.substring(inumber2.length - 1);
  var unit = 'i';
  if (unit1 === 'j') {
    unit = 'j';
  } else if (unit2 === 'j') {
    unit = 'j';
  }

  // Return error if inumber2 is null
  if (c === 0 && d === 0) {
    return error.num;
  }

  // Return exponential of complex number
  var den = c * c + d * d;
  return exports.COMPLEX((a * c + b * d) / den, (b * c - a * d) / den, unit);
};

exports.IMEXP = function(inumber) {
  // Lookup real and imaginary coefficients using Formula.js [http://formulajs.org]
  var x = exports.IMREAL(inumber);
  var y = exports.IMAGINARY(inumber);

  if (utils.anyIsError(x, y)) {
    return error.value;
  }

  // Lookup imaginary unit
  var unit = inumber.substring(inumber.length - 1);
  unit = (unit === 'i' || unit === 'j') ? unit : 'i';

  // Return exponential of complex number
  var e = Math.exp(x);
  return exports.COMPLEX(e * Math.cos(y), e * Math.sin(y), unit);
};

exports.IMLN = function(inumber) {
  // Lookup real and imaginary coefficients using Formula.js [http://formulajs.org]
  var x = exports.IMREAL(inumber);
  var y = exports.IMAGINARY(inumber);

  if (utils.anyIsError(x, y)) {
    return error.value;
  }

  // Lookup imaginary unit
  var unit = inumber.substring(inumber.length - 1);
  unit = (unit === 'i' || unit === 'j') ? unit : 'i';

  // Return exponential of complex number
  return exports.COMPLEX(Math.log(Math.sqrt(x * x + y * y)), Math.atan(y / x), unit);
};

exports.IMLOG10 = function(inumber) {
  // Lookup real and imaginary coefficients using Formula.js [http://formulajs.org]
  var x = exports.IMREAL(inumber);
  var y = exports.IMAGINARY(inumber);

  if (utils.anyIsError(x, y)) {
    return error.value;
  }

  // Lookup imaginary unit
  var unit = inumber.substring(inumber.length - 1);
  unit = (unit === 'i' || unit === 'j') ? unit : 'i';

  // Return exponential of complex number
  return exports.COMPLEX(Math.log(Math.sqrt(x * x + y * y)) / Math.log(10), Math.atan(y / x) / Math.log(10), unit);
};

exports.IMLOG2 = function(inumber) {
  // Lookup real and imaginary coefficients using Formula.js [http://formulajs.org]
  var x = exports.IMREAL(inumber);
  var y = exports.IMAGINARY(inumber);

  if (utils.anyIsError(x, y)) {
    return error.value;
  }

  // Lookup imaginary unit
  var unit = inumber.substring(inumber.length - 1);
  unit = (unit === 'i' || unit === 'j') ? unit : 'i';

  // Return exponential of complex number
  return exports.COMPLEX(Math.log(Math.sqrt(x * x + y * y)) / Math.log(2), Math.atan(y / x) / Math.log(2), unit);
};

exports.IMPOWER = function(inumber, number) {
  number = utils.parseNumber(number);
  var x = exports.IMREAL(inumber);
  var y = exports.IMAGINARY(inumber);
  if (utils.anyIsError(number, x, y)) {
    return error.value;
  }

  // Lookup imaginary unit
  var unit = inumber.substring(inumber.length - 1);
  unit = (unit === 'i' || unit === 'j') ? unit : 'i';

  // Calculate power of modulus
  var p = Math.pow(exports.IMABS(inumber), number);

  // Calculate argument
  var t = exports.IMARGUMENT(inumber);

  // Return exponential of complex number
  return exports.COMPLEX(p * Math.cos(number * t), p * Math.sin(number * t), unit);
};

exports.IMPRODUCT = function() {
  // Initialize result
  var result = arguments[0];

  // Loop on all numbers
  for (var i = 1; i < arguments.length; i++) {
    // Lookup coefficients of two complex numbers
    var a = exports.IMREAL(result);
    var b = exports.IMAGINARY(result);
    var c = exports.IMREAL(arguments[i]);
    var d = exports.IMAGINARY(arguments[i]);

    if (utils.anyIsError(a, b, c, d)) {
      return error.value;
    }

    // Complute product of two complex numbers
    result = exports.COMPLEX(a * c - b * d, a * d + b * c);
  }

  // Return product of complex numbers
  return result;
};

exports.IMREAL = function(inumber) {
  if (inumber === undefined || inumber === true || inumber === false) {
    return error.value;
  }

  // Return 0 if inumber is equal to 0
  if (inumber === 0 || inumber === '0') {
    return 0;
  }

  // Handle special cases
  if (['i', '+i', '1i', '+1i', '-i', '-1i', 'j', '+j', '1j', '+1j', '-j', '-1j'].indexOf(inumber) >= 0) {
    return 0;
  }

  // Lookup sign
  var plus = inumber.indexOf('+');
  var minus = inumber.indexOf('-');
  if (plus === 0) {
    plus = inumber.indexOf('+', 1);
  }
  if (minus === 0) {
    minus = inumber.indexOf('-', 1);
  }

  // Lookup imaginary unit
  var last = inumber.substring(inumber.length - 1, inumber.length);
  var unit = (last === 'i' || last === 'j');

  if (plus >= 0 || minus >= 0) {
    // Return error if imaginary unit is neither i nor j
    if (!unit) {
      return error.num;
    }

    // Return real coefficient of complex number
    if (plus >= 0) {
      return (isNaN(inumber.substring(0, plus)) || isNaN(inumber.substring(plus + 1, inumber.length - 1))) ?
        error.num :
        Number(inumber.substring(0, plus));
    } else {
      return (isNaN(inumber.substring(0, minus)) || isNaN(inumber.substring(minus + 1, inumber.length - 1))) ?
        error.num :
        Number(inumber.substring(0, minus));
    }
  } else {
    if (unit) {
      return (isNaN(inumber.substring(0, inumber.length - 1))) ? error.num : 0;
    } else {
      return (isNaN(inumber)) ? error.num : inumber;
    }
  }
};

exports.IMSEC = function(inumber) {
  // Return error if inumber is a logical value
  if (inumber === true || inumber === false) {
    return error.value;
  }

  // Lookup real and imaginary coefficients using Formula.js [http://formulajs.org]
  var x = exports.IMREAL(inumber);
  var y = exports.IMAGINARY(inumber);

  if (utils.anyIsError(x, y)) {
    return error.value;
  }

  // Return secant of complex number
  return exports.IMDIV('1', exports.IMCOS(inumber));
};

exports.IMSECH = function(inumber) {
  // Lookup real and imaginary coefficients using Formula.js [http://formulajs.org]
  var x = exports.IMREAL(inumber);
  var y = exports.IMAGINARY(inumber);

  if (utils.anyIsError(x, y)) {
    return error.value;
  }

  // Return hyperbolic secant of complex number
  return exports.IMDIV('1', exports.IMCOSH(inumber));
};

exports.IMSIN = function(inumber) {
  // Lookup real and imaginary coefficients using Formula.js [http://formulajs.org]
  var x = exports.IMREAL(inumber);
  var y = exports.IMAGINARY(inumber);

  if (utils.anyIsError(x, y)) {
    return error.value;
  }

  // Lookup imaginary unit
  var unit = inumber.substring(inumber.length - 1);
  unit = (unit === 'i' || unit === 'j') ? unit : 'i';

  // Return sine of complex number
  return exports.COMPLEX(Math.sin(x) * (Math.exp(y) + Math.exp(-y)) / 2, Math.cos(x) * (Math.exp(y) - Math.exp(-y)) / 2, unit);
};

exports.IMSINH = function(inumber) {
  // Lookup real and imaginary coefficients using Formula.js [http://formulajs.org]
  var x = exports.IMREAL(inumber);
  var y = exports.IMAGINARY(inumber);

  if (utils.anyIsError(x, y)) {
    return error.value;
  }

  // Lookup imaginary unit
  var unit = inumber.substring(inumber.length - 1);
  unit = (unit === 'i' || unit === 'j') ? unit : 'i';

  // Return hyperbolic sine of complex number
  return exports.COMPLEX(Math.cos(y) * (Math.exp(x) - Math.exp(-x)) / 2, Math.sin(y) * (Math.exp(x) + Math.exp(-x)) / 2, unit);
};

exports.IMSQRT = function(inumber) {
  // Lookup real and imaginary coefficients using Formula.js [http://formulajs.org]
  var x = exports.IMREAL(inumber);
  var y = exports.IMAGINARY(inumber);

  if (utils.anyIsError(x, y)) {
    return error.value;
  }

  // Lookup imaginary unit
  var unit = inumber.substring(inumber.length - 1);
  unit = (unit === 'i' || unit === 'j') ? unit : 'i';

  // Calculate power of modulus
  var s = Math.sqrt(exports.IMABS(inumber));

  // Calculate argument
  var t = exports.IMARGUMENT(inumber);

  // Return exponential of complex number
  return exports.COMPLEX(s * Math.cos(t / 2), s * Math.sin(t / 2), unit);
};

exports.IMCSC = function (inumber) {
  // Return error if inumber is a logical value
  if (inumber === true || inumber === false) {
    return error.value;
  }

  // Lookup real and imaginary coefficients using Formula.js [http://formulajs.org]
  var x = exports.IMREAL(inumber);
  var y = exports.IMAGINARY(inumber);

  // Return error if either coefficient is not a number
  if (utils.anyIsError(x, y)) {
    return error.num;
  }

  // Return cosecant of complex number
  return exports.IMDIV('1', exports.IMSIN(inumber));
};

exports.IMCSCH = function (inumber) {
  // Return error if inumber is a logical value
  if (inumber === true || inumber === false) {
    return error.value;
  }

  // Lookup real and imaginary coefficients using Formula.js [http://formulajs.org]
  var x = exports.IMREAL(inumber);
  var y = exports.IMAGINARY(inumber);

  // Return error if either coefficient is not a number
  if (utils.anyIsError(x, y)) {
    return error.num;
  }

  // Return hyperbolic cosecant of complex number
  return exports.IMDIV('1', exports.IMSINH(inumber));
};

exports.IMSUB = function(inumber1, inumber2) {
  // Lookup real and imaginary coefficients using Formula.js [http://formulajs.org]
  var a = this.IMREAL(inumber1);
  var b = this.IMAGINARY(inumber1);
  var c = this.IMREAL(inumber2);
  var d = this.IMAGINARY(inumber2);

  if (utils.anyIsError(a, b, c, d)) {
    return error.value;
  }

  // Lookup imaginary unit
  var unit1 = inumber1.substring(inumber1.length - 1);
  var unit2 = inumber2.substring(inumber2.length - 1);
  var unit = 'i';
  if (unit1 === 'j') {
    unit = 'j';
  } else if (unit2 === 'j') {
    unit = 'j';
  }

  // Return _ of two complex numbers
  return this.COMPLEX(a - c, b - d, unit);
};

exports.IMSUM = function() {
  var args = utils.flatten(arguments);

  // Initialize result
  var result = args[0];

  // Loop on all numbers
  for (var i = 1; i < args.length; i++) {
    // Lookup coefficients of two complex numbers
    var a = this.IMREAL(result);
    var b = this.IMAGINARY(result);
    var c = this.IMREAL(args[i]);
    var d = this.IMAGINARY(args[i]);

    if (utils.anyIsError(a, b, c, d)) {
      return error.value;
    }

    // Complute product of two complex numbers
    result = this.COMPLEX(a + c, b + d);
  }

  // Return sum of complex numbers
  return result;
};

exports.IMTAN = function(inumber) {
  // Return error if inumber is a logical value
  if (inumber === true || inumber === false) {
    return error.value;
  }

  // Lookup real and imaginary coefficients using Formula.js [http://formulajs.org]
  var x = exports.IMREAL(inumber);
  var y = exports.IMAGINARY(inumber);

  if (utils.anyIsError(x, y)) {
    return error.value;
  }

  // Return tangent of complex number
  return this.IMDIV(this.IMSIN(inumber), this.IMCOS(inumber));
};

exports.OCT2BIN = function(number, places) {
  // Return error if number is not hexadecimal or contains more than ten characters (10 digits)
  if (!/^[0-7]{1,10}$/.test(number)) {
    return error.num;
  }

  // Check if number is negative
  var negative = (number.length === 10 && number.substring(0, 1) === '7') ? true : false;

  // Convert octal number to decimal
  var decimal = (negative) ? parseInt(number, 8) - 1073741824 : parseInt(number, 8);

  // Return error if number is lower than -512 or greater than 511
  if (decimal < -512 || decimal > 511) {
    return error.num;
  }

  // Ignore places and return a 10-character binary number if number is negative
  if (negative) {
    return '1' + text.REPT('0', 9 - (512 + decimal).toString(2).length) + (512 + decimal).toString(2);
  }

  // Convert decimal number to binary
  var result = decimal.toString(2);

  // Return binary number using the minimum number of characters necessary if places is undefined
  if (typeof places === 'undefined') {
    return result;
  } else {
    // Return error if places is nonnumeric
    if (isNaN(places)) {
      return error.value;
    }

    // Return error if places is negative
    if (places < 0) {
      return error.num;
    }

    // Truncate places in case it is not an integer
    places = Math.floor(places);

    // Pad return value with leading 0s (zeros) if necessary (using Underscore.string)
    return (places >= result.length) ? text.REPT('0', places - result.length) + result : error.num;
  }
};

exports.OCT2DEC = function(number) {
  // Return error if number is not octal or contains more than ten characters (10 digits)
  if (!/^[0-7]{1,10}$/.test(number)) {
    return error.num;
  }

  // Convert octal number to decimal
  var decimal = parseInt(number, 8);

  // Return decimal number
  return (decimal >= 536870912) ? decimal - 1073741824 : decimal;
};

exports.OCT2HEX = function(number, places) {
  // Return error if number is not octal or contains more than ten characters (10 digits)
  if (!/^[0-7]{1,10}$/.test(number)) {
    return error.num;
  }

  // Convert octal number to decimal
  var decimal = parseInt(number, 8);

  // Ignore places and return a 10-character octal number if number is negative
  if (decimal >= 536870912) {
    return 'ff' + (decimal + 3221225472).toString(16);
  }

  // Convert decimal number to hexadecimal
  var result = decimal.toString(16);

  // Return hexadecimal number using the minimum number of characters necessary if places is undefined
  if (places === undefined) {
    return result;
  } else {
    // Return error if places is nonnumeric
    if (isNaN(places)) {
      return error.value;
    }

    // Return error if places is negative
    if (places < 0) {
      return error.num;
    }

    // Truncate places in case it is not an integer
    places = Math.floor(places);

    // Pad return value with leading 0s (zeros) if necessary (using Underscore.string)
    return (places >= result.length) ? text.REPT('0', places - result.length) + result : error.num;
  }
};