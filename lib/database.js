

exports.FINDFIELD = function(database, title) {
  var index = null;
  for (var i = 0; i < database.length; i++) {
    if (database[i][0] === title) {
      index = i;
      break;
    }
  }

  // Return error if the input field title is incorrect
  if (index == null) {
    return '#VALUE!';
  }
  return index;
};

exports.FINDRESULTINDEX = function(database, criteria) {
  var maxCriteriaLength = criteria[0].length;
  for (var i = 1; i < criteria.length; i++) {
    if (criteria[i].length > maxCriteriaLength) {
      maxCriteriaLength = criteria[i].length;
    }
  }
  var columnResultIndexes = [];
  for (i = 1; i < maxCriteriaLength; i++) {
    var rowResultIndexes = [];
    for (var j = 0; j < criteria.length; j++) {
      if (criteria[j].length < maxCriteriaLength) {
        continue;
      }
      var criteriaTitle = criteria[j][0];
      var criteriaIndex = exports.FINDFIELD(database, criteriaTitle);
      var criteriaValues = _.rest(database[criteriaIndex]);
      var count = 0;
      var singleResultIndexes = [];
      for (var k = 0; k < criteriaValues.length; k++) {
        if (eval(criteriaValues[k] + criteria[j][i])) {
          singleResultIndexes[count++] = k;
        }
      }
      rowResultIndexes[j] = singleResultIndexes;
    }
    columnResultIndexes[i - 1] = _.intersection.apply(_, rowResultIndexes);
  }

  var resultIndexes = _.union.apply(_, columnResultIndexes);
  return resultIndexes;
};

// Database functions
exports.DAVERAGE = function(database, field, criteria) {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== "string")) {
    return '#VALUE!';
  }

  var resultIndexes = exports.FINDRESULTINDEX(database, criteria);
  var targetFields = [];
  if (typeof field === "string") {
    var index = exports.FINDFIELD(database, field);
    targetFields = _.rest(database[index]);
  } else {
    targetFields = _.rest(database[field]);
  }
  var sum = 0;
  for (var i = 0; i < resultIndexes.length; i++) {
    sum += targetFields[resultIndexes[i]];
  }
  var average = exports.IF(resultIndexes.length === 0, "#DIV/0!", sum / resultIndexes.length);
  return average;
};

exports.DCOUNT = function(database, field, criteria) {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== "string")) {
    return '#VALUE!';
  }
  var resultIndexes = exports.FINDRESULTINDEX(database, criteria);
  var targetFields = [];
  if (typeof field === "string") {
    var index = exports.FINDFIELD(database, field);
    targetFields = _.rest(database[index]);
  } else {
    targetFields = _.rest(database[field]);
  }
  var targetValues = [];
  for (var i = 0; i < resultIndexes.length; i++) {
    targetValues[i] = targetFields[resultIndexes[i]];
  }
  return exports.COUNT(targetValues);
};

exports.DCOUNTA = function(database, field, criteria) {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== "string")) {
    return '#VALUE!';
  }
  var resultIndexes = exports.FINDRESULTINDEX(database, criteria);
  var targetFields = [];
  if (typeof field === "string") {
    var index = exports.FINDFIELD(database, field);
    targetFields = _.rest(database[index]);
  } else {
    targetFields = _.rest(database[field]);
  }
  var targetValues = [];
  for (var i = 0; i < resultIndexes.length; i++) {
    targetValues[i] = targetFields[resultIndexes[i]];
  }
  return exports.COUNTA(targetValues);
};

exports.DGET = function(database, field, criteria) {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== "string")) {
    return '#VALUE!';
  }
  var resultIndexes = exports.FINDRESULTINDEX(database, criteria);
  var targetFields = [];
  if (typeof field === "string") {
    var index = exports.FINDFIELD(database, field);
    targetFields = _.rest(database[index]);
  } else {
    targetFields = _.rest(database[field]);
  }
  // Return error if no record meets the criteria
  if (resultIndexes.length === 0) {
    return '#VALUE!';
  }
  // Returns the #NUM! error value because more than one record meets the
  // criteria
  if (resultIndexes.length > 1) {
    return '#NUM!';
  }

  return targetFields[resultIndexes[0]];
};

exports.DMAX = function(database, field, criteria) {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== "string")) {
    return '#VALUE!';
  }
  var resultIndexes = exports.FINDRESULTINDEX(database, criteria);
  var targetFields = [];
  if (typeof field === "string") {
    var index = exports.FINDFIELD(database, field);
    targetFields = _.rest(database[index]);
  } else {
    targetFields = _.rest(database[field]);
  }
  var maxValue = targetFields[resultIndexes[0]];
  for (var i = 1; i < resultIndexes.length; i++) {
    if (maxValue < targetFields[resultIndexes[i]]) {
      maxValue = targetFields[resultIndexes[i]];
    }
  }
  return maxValue;
};

exports.DMIN = function(database, field, criteria) {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== "string")) {
    return '#VALUE!';
  }
  var resultIndexes = exports.FINDRESULTINDEX(database, criteria);
  var targetFields = [];
  if (typeof field === "string") {
    var index = exports.FINDFIELD(database, field);
    targetFields = _.rest(database[index]);
  } else {
    targetFields = _.rest(database[field]);
  }
  var minValue = targetFields[resultIndexes[0]];
  for (var i = 1; i < resultIndexes.length; i++) {
    if (minValue > targetFields[resultIndexes[i]]) {
      minValue = targetFields[resultIndexes[i]];
    }
  }
  return minValue;
};

exports.DPRODUCT = function(database, field, criteria) {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== "string")) {
    return '#VALUE!';
  }
  var resultIndexes = exports.FINDRESULTINDEX(database, criteria);
  var targetFields = [];
  if (typeof field === "string") {
    var index = exports.FINDFIELD(database, field);
    targetFields = _.rest(database[index]);
  } else {
    targetFields = _.rest(database[field]);
  }
  var targetValues = [];
  for (var i = 0; i < resultIndexes.length; i++) {
    targetValues[i] = targetFields[resultIndexes[i]];
  }
  targetValues = _.compact(targetValues);
  var result = 1;
  for (i = 0; i < targetValues.length; i++) {
    result *= targetValues[i];
  }
  return result;
};

exports.DSTDEV = function(database, field, criteria) {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== "string")) {
    return '#VALUE!';
  }
  var resultIndexes = exports.FINDRESULTINDEX(database, criteria);
  var targetFields = [];
  if (typeof field === "string") {
    var index = exports.FINDFIELD(database, field);
    targetFields = _.rest(database[index]);
  } else {
    targetFields = _.rest(database[field]);
  }
  var targetValues = [];
  for (var i = 0; i < resultIndexes.length; i++) {
    targetValues[i] = targetFields[resultIndexes[i]];
  }
  targetValues = _.compact(targetValues);
  return exports.STDEVS(targetValues);
};

exports.DSTDEVP = function(database, field, criteria) {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== "string")) {
    return '#VALUE!';
  }
  var resultIndexes = exports.FINDRESULTINDEX(database, criteria);
  var targetFields = [];
  if (typeof field === "string") {
    var index = exports.FINDFIELD(database, field);
    targetFields = _.rest(database[index]);
  } else {
    targetFields = _.rest(database[field]);
  }
  var targetValues = [];
  for (var i = 0; i < resultIndexes.length; i++) {
    targetValues[i] = targetFields[resultIndexes[i]];
  }
  targetValues = _.compact(targetValues);
  return exports.STDEVP(targetValues);
};

exports.DSUM = function(database, field, criteria) {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== "string")) {
    return '#VALUE!';
  }
  var resultIndexes = exports.FINDRESULTINDEX(database, criteria);
  var targetFields = [];
  if (typeof field === "string") {
    var index = exports.FINDFIELD(database, field);
    targetFields = _.rest(database[index]);
  } else {
    targetFields = _.rest(database[field]);
  }
  var targetValues = [];
  for (var i = 0; i < resultIndexes.length; i++) {
    targetValues[i] = targetFields[resultIndexes[i]];
  }
  return exports.SUM(targetValues);
};

exports.DVAR = function(database, field, criteria) {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== "string")) {
    return '#VALUE!';
  }
  var resultIndexes = exports.FINDRESULTINDEX(database, criteria);
  var targetFields = [];
  if (typeof field === "string") {
    var index = exports.FINDFIELD(database, field);
    targetFields = _.rest(database[index]);
  } else {
    targetFields = _.rest(database[field]);
  }
  var targetValues = [];
  for (var i = 0; i < resultIndexes.length; i++) {
    targetValues[i] = targetFields[resultIndexes[i]];
  }
  return exports.VARS(targetValues);
};

exports.DVARP = function(database, field, criteria) {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== "string")) {
    return '#VALUE!';
  }
  var resultIndexes = exports.FINDRESULTINDEX(database, criteria);
  var targetFields = [];
  if (typeof field === "string") {
    var index = exports.FINDFIELD(database, field);
    targetFields = _.rest(database[index]);
  } else {
    targetFields = _.rest(database[field]);
  }
  var targetValues = [];
  for (var i = 0; i < resultIndexes.length; i++) {
    targetValues[i] = targetFields[resultIndexes[i]];
  }
  return exports.VARP(targetValues);
};
