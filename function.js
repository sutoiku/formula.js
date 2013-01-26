var _ = require("lodash");
var _s = require("underscore.string");
var mapperjs = require("mapperjs");
var $mapper = null;

mapperjs.configure(
  {
    origin: "http://stoic.cloudfoundry.com",
    stores: {
      server: new mapperjs.Server('server')
    }
  }, function(err) {
    mapperjs("", function(err, m) {
      $mapper = m;
    });
  }
);

function mapper() {
  if ($mapper) {
    $mapper.apply(mapperjs, Array.prototype.slice.call(arguments));
  } else {
    var args = arguments;
    mapperjs.on("ready", function(m, done) {
      $mapper = m;
      done();
      $mapper.apply(mapperjs, Array.prototype.slice.call(args));
    });
  }
}

function safeResolve($timeout, deferred, value) {
  deferred.resolve();
  $timeout(function() {}, 1);  // Force start of new digest 
}

function buildCondition(tx, field, array) {
  if (array.length === 1) {
    return tx.filter(field, '=', array[0]);
  } else  if (array.length === 2) {
    return tx.or(
      tx.filter(field, '=', array[0]),
      tx.filter(field, '=', array[1])
    );
  } else {
    var last = array.pop();
    return tx.or(
      buildCondition(tx, field, array),
      tx.filter(field, '=', last)
    );
  }
}

function plotChart(definition, parameters, name, type, range, points, duration, id) {
  nv.addGraph(function() {
    var chart;
    chart = nv.models.lineChart();
    chart
      .x(function(d, i) {return i * range / points - range / 2})
    chart.xAxis
      .tickFormat(d3.format(',.0f'));
    chart.yAxis
      .tickFormat(d3.format(',.1f'));
    d3.select(id + ' svg')
      .datum(plotDensity(definition, parameters, name, type, range, points))
      .transition().duration(duration)
      .call(chart);
    nv.utils.windowResize(chart.update);
    chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
    return chart;
  });
}

function plotDensity(definition, parameters, name, type, range, points) {
  var values = [];
  var coordinates = [];
  for (var i = 0; i < definition.stc_plots.stc_lines.length; i++) {
    var key = '';
    values[i] = [];
    for (var j = definition.stc_plots.stc_x_min; j <= definition.stc_plots.stc_x_max; j += range / points) {
      var call = name + '(j';
      for (var m = 0; m < definition.stc_distribution.stc_parameters.length; m++) {
        call += ', ' + definition.stc_plots.stc_lines[i][m];
      }
      call += ', ' + type + ')';
      values[i].push({x: j, y: eval(call)});
    }
    for (var k = 0; k < definition.stc_distribution.stc_parameters.length; k++) {
      key += parameters[definition.stc_distribution.stc_parameters[k]].symbol + '=' + definition.stc_plots.stc_lines[i][k] + ' ';
    }
    coordinates[i] = {
      values: values[i],
      key: key
    };
  }
  return coordinates;
}

function wikipediaTitle(url) {
  return url.substring(29).replace(/_/g, ' ').replace(/#/g, ' / ');
}

function FunctionDetails($scope, $timeout, $q) {
  var related_done = $q.defer();
  var function_type_done = $q.defer();
  var datatypes_done = $q.defer();
  var units_done = $q.defer();
  var all_done = $q.defer();
  $scope.binary_prefixes = [];
  $scope.datatypes = [];
  $scope.equations = false;
  $scope.equations_left = [];
  $scope.equations_right = [];
  $scope.excel = false;
  $scope.gist = '';
  $scope.google = false;
  $scope.implementation = false;
  $scope.input_parameters = '';
  $scope.notes = '';
  $scope.output_datatype = '';
  $scope.parameters = [];
  $scope.plots = false;
  $scope.related = false;
  $scope.related_functions = [];
  $scope.reveal = false;
  $scope.spreadsheets = false;
  $scope.tests = false;
  $scope.tests_list = [];
  $scope.quantities_list = {};
  $scope.unit_prefixes = [];
  $scope.units = false;
  $scope.units_list = [];
  
  var details = null;
  
  mapper(function(tx, done) {
  
    // Functions
    var functions = tx.StcFunction.first("stc_name", "=", QUERYSTRING.name).prefetch("stc_library").get(function(err, ffunction) {
      if (err) {
        console.error("Error in functions lookup", err);
      }

      // Details
      if (ffunction.stc_details) {
        details = JSON.parse(ffunction.stc_details.replace(/\\/g, '&#92;'));
      }

      // Related functions
      if (ffunction.stc_related_functions) {
        $scope.related = true;
        tx.StcFunction.all(buildCondition(tx, "id", ffunction.stc_related_functions)).each(function(err, related) {
          $scope.related_functions.push({
            name: related.stc_name
          });
        }, function(err) {
          if (err) {
            console.error("Error in related functions lookup", err);
          }
          safeResolve($timeout, related_done);
        });
      } else {
        safeResolve($timeout, related_done);
      }

      // Input
      $scope.ffunction = ffunction;
      for (var i = 0; i < FORMULA_DEMOS.length; i++) {
        if (FORMULA_DEMOS[i].type === ffunction.stc_type.substring(4)) {
          for (var j = 0; j < FORMULA_DEMOS[i].tests.length; j++) {
            if (FORMULA_DEMOS[i].tests[j]["function"] === ffunction.stc_name) {
              $scope.myFormula = FORMULA_DEMOS[i].tests[j].call;
            }
          }
        }
      }
        
      // Output
      $scope.myOutput = eval($scope.myFormula);
      $scope.output_datatype = ffunction.stc_output.datatype;

      // Parameters
      for (var k = 0; k < ffunction.stc_input.length; k++) {
        var parameter = (ffunction.stc_input[k].required) ? ffunction.stc_input[k].id : '[' + ffunction.stc_input[k].id + ']';
        var separator = (k === ffunction.stc_input.length - 1) ? '' : ', ';
        $scope.input_parameters += parameter + separator;
        $scope.parameters[ffunction.stc_input[k].id] = ffunction.stc_input[k];
        $scope.parameters[ffunction.stc_input[k].id].required_label = (ffunction.stc_input[k].required) ? 'Required' : 'Optional';
      }

      // Syntax
      $scope.syntax = ffunction.stc_name + '(' + $scope.input_parameters + ')';

      // Notes
      $scope.notes = ffunction.stc_documentation;

      // Units
      if (ffunction.stc_name === 'CONVERT') {
        $scope.units = true;
        $scope.binary_prefixes = [
          ["yobi",80,1208925819614629174706176,"Yi","yotta"],
          ["zebi",70,1180591620717411303424,"Zi","zetta"],
          ["exbi",60,1152921504606846976,"Ei","exa"],
          ["pebi",50,1125899906842624,"Pi","peta"],
          ["tebi",40,1099511627776,"Ti","tera"],
          ["gibi",30,1073741824,"Gi","giga"],
          ["mebi",20,1048576,"Mi","mega"],
          ["kibi",10,1024,"ki","kilo"]
        ];
        $scope.unit_prefixes = [
          ["yotta","1e+24","Y"],
          ["zetta","1e+21","Z"],
          ["exa","1e+18","E"],
          ["peta","1e+15","P"],
          ["tera","1e+12","T"],
          ["giga","1e+09","G"],
          ["mega","1e+06","M"],
          ["kilo","1e+03","k"],
          ["hecto","1e+02","h"],
          ["dekao","1e+01","e", "da"],
          ["deci","1e-01","d"],
          ["centi","1e-02","c"],
          ["milli","1e-03","m"],
          ["micro","1e-06","u"],
          ["nano","1e-09","n"],
          ["pico","1e-12","p"],
          ["femto","1e-15","f"],
          ["atto","1e-18","a"],
          ["zepto","1e-21","z"],
          ["yocto","1e-24","y"]
        ];
      }

      // Equations
      if (ffunction.stc_type === 'stc_statistical' && ffunction.stc_details) {
        $scope.equations = true;
        var rows = Math.ceil(details.stc_equations.length / 2);
        for (var l = 0; l < rows; l++) {
          $scope.equations_left[l] = {
            "name": details.stc_equations[l].stc_name,
            "equation": details.stc_equations[l].stc_equation.replace(/&#92;/g, '\\')
          };
        }
        for (var r = rows; r < details.stc_equations.length; r++) {
          $scope.equations_right[r - rows] = {
            "name": details.stc_equations[r].stc_name,
            "equation": details.stc_equations[r].stc_equation.replace(/&#92;/g, '\\')
          };
        }
      }

      // Spreadsheets
      if (ffunction.stc_google_sample || ffunction.stc_excel_sample) {
        $scope.spreadsheets = true;
      }
        
      // Tests
      for (var t = 0; t < FORMULA_TESTS.length; t++) {
        if (FORMULA_TESTS[t].function === ffunction.stc_name) {
          $scope.tests = true;
          $scope.tests_list = FORMULA_TESTS[t].tests;
        }
      }

      // Excel
      if (ffunction.stc_excel_name) $scope.excel = true;

      // Google
      if (ffunction.stc_google_name) $scope.google = true;

      // Wikipedia
      if (ffunction.stc_wikipedia) {
        $scope.wikipedia = true;
        $scope.wikipedia_title = wikipediaTitle(ffunction.stc_wikipedia);
        // $scope.notes = $scope.notes.replace('Wikipedia', '<a href="' + ffunction.stc_wikipedia + '">Wikipedia</a>');
      } else {
        $scope.wikipedia = false;
      }

      // Implementation
      if (ffunction.stc_implementation) {
        $scope.implementation = true;
        $scope.gist = 'https://gist.github.com/' + ffunction.stc_implementation + '.json';
        var printGist = function(gist) {
          $('#gist').replaceWith('<link rel="stylesheet" type="text/css" href="'+ gist.stylesheet +'" />' + gist.div);
        };
        $.ajax({ 
          url: $scope.gist, 
          dataType: 'jsonp', success: printGist 
        });
      }

      // Function types
      var functionTypes = tx.StcField.first("id", "=", "3cb7794d-abf8-4f2a-907d-f31b162b164d").get(function(err, functionTypes) {
        if (err) {
          console.error("Error in function types lookup", err);
        }
        for (var i = 0; i < functionTypes.stc_options.stc_categories.length; i++) {
          if (functionTypes.stc_options.stc_categories[i].stc_identifier === $scope.ffunction.stc_type) {
            $scope.type = functionTypes.stc_options.stc_categories[i];
          }
        }
        safeResolve($timeout, function_type_done);
      });
    
      // Datatypes
      var used_datatypes = [ffunction.stc_output.datatype];
      _(ffunction.stc_input).each(function(input) {
        used_datatypes.push(input.datatype);
      });
      var datatypes = tx.StcDatatype.all(buildCondition(tx, "stc_identifier", used_datatypes)).each(function(err, record) {
        if (err) {
          console.error("Error in datatypes lookup", err);
        }
        $scope.datatypes[record.stc_identifier] = {"stc_name": record.stc_name, "stc_icon": record.stc_icon};
      }, function(err) {
        if (err) {
          console.error("Error in datatypes lookup", err);
        }
        safeResolve($timeout, datatypes_done);
      });

      // Units
      if (QUERYSTRING.name === 'CONVERT') {
        var units = tx.StcUnit.all().prefetch("stc_quantity").each(function(err, unit) {
          if (err) {
            console.error("Error in units lookup", err);
          }
          $scope.units_list.push(unit);
          safeResolve($timeout, units_done);
        }, function(err) {
          if (err) {
            console.error("Error in units lookup", err);
          }
        });
      } else {
        safeResolve($timeout, units_done);
      }

      $q.all([related_done.promise, function_type_done.promise, datatypes_done.promise, units_done.promise]).then(function() {
        done();
      });

    });
    
  }, function(err) {
    if (err) {
      console.error("Error in FunctionDetails", err);
    }
    safeResolve($timeout, all_done);
  });

  $scope.checkTest = function(test, expected, bypass) {
    return ($scope.evaluateTest(test) == expected || arraysIdentical($scope.evaluateTest(test), expected) || bypass) ?
      'icon-ok-sign text-success' :
      'icon-warning-sign text-error';
  }

  $scope.evaluateTest = function(test){
    return eval(test);
  };

  $scope.refreshOutput = function() {
    $scope.myOutput = eval($scope.myFormula);
  };
  
  $scope.wikipediaTitle = wikipediaTitle;

  $q.all([all_done.promise]).then(function() {
    $scope.reveal = true;

    // Plots
    if ($scope.ffunction.stc_type === 'stc_statistical' && $scope.ffunction.stc_details) {
      $scope.plots = true;
    }

    $timeout(function() {

      // Quantities
      if (QUERYSTRING.name === 'CONVERT') {
        for (var q = 0; q < $scope.units_list.length; q++) {
          var quantity_identifier = $scope.units_list[q].stc_quantity.stc_identifier;
          if (!$scope.quantities_list[quantity_identifier]) {
            $scope.quantities_list[quantity_identifier] = {};
            $scope.quantities_list[quantity_identifier].units = [];
            $scope.quantities_list[quantity_identifier].name = $scope.units_list[q].stc_quantity.stc_name;
            $scope.quantities_list[quantity_identifier].wikipedia = $scope.units_list[q].stc_quantity.stc_wikipedia;
          }
          $scope.quantities_list[quantity_identifier].units.push($scope.units_list[q]);
        }
      }

      // Plots
      if ($scope.ffunction.stc_type === 'stc_statistical' && $scope.ffunction.stc_details) {
        var plot_duration = 250;
        var plot_points = 500;
        var plot_range = details.stc_plots.stc_x_max - details.stc_plots.stc_x_min;
        plotChart(details, $scope.parameters, $scope.ffunction.stc_name, false, plot_range, plot_points, plot_duration, '#chart-pdf');
        plotChart(details, $scope.parameters, $scope.ffunction.stc_name, true, plot_range, plot_points, plot_duration, '#chart-cdf');
      }

      // MathJax typset action
      MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
  
      // DISQUS
      var disqus_shortname = 'stoics';
      if (window.location.protocol !== 'file:') {
        (function() {
          var dsq = document.createElement('script');
          dsq.type = 'text/javascript';
          dsq.async = true;
          dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
      }

    }, 1);
  })
}