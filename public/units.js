var _ = require("lodash");
var _s = require("underscore.string");
var mapperjs = require("mapperjs");
var $mapper = null;

mapperjs.configure({
  origin: "http://stoic.cloudfoundry.com",
  stores: {
    server: new mapperjs.Server('server')
  }
  }, function(err) {
    mapperjs("", function(err, m) {
    $mapper = m;
  });
});

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

function units($scope, $rootScope, $timeout) {
  $scope.list = [];
  mapper(function(tx) {
    var units = tx.StcUnit.all().prefetch("stc_quantity").each(function(err, unit) {
      if (err) {
        console.error("Error in units", err);
      }
      $rootScope.$apply(function() {
        $scope.list.push([
          unit.stc_name,
          unit.stc_symbol,
          unit.stc_alternative_symbols,
          unit.stc_quantity.stc_identifier.substring(4),
          unit.stc_international_system,
          unit.stc_formula,
          unit.stc_conversion_ratio
        ]);
      });
    }, function(err) {
      if (err) {
        console.error("Error in units", err);
      }
      $scope.list = JSON.stringify($scope.list, null, "  ");
    });
  }, function(err) {
    if (err) {
      console.error("Error in units", err);
    }
  });
}