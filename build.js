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

function build($scope, $rootScope, $timeout) {
  $scope.code = '';
  mapper(function(tx) {
    var functions = tx.StcFunction.all().each(function(err, record) {
      if (err) {
        console.error("Error in build", err);
      }
      $rootScope.$apply(function() {
        if (record.stc_implementation) {
          var addGist = function(data) {
            $scope.code += data.div;
          };
          $.ajax({
            url: 'https://gist.github.com/' + record.stc_implementation + '.json', 
            dataType: 'jsonp',
            success: addGist
          });
        }
      });
    }, function(err) {
      if (err) {
        console.error("Error in FunctionDetails", err);
      }
    });
  }, function(err) {
    if (err) {
      console.error("Error in FunctionDetails", err);
    }
  });
}