var categories = [
  require('./lib/compatibility'),
  require('./lib/database'),
  require('./lib/engineering'),
  require('./lib/logical'),
  require('./lib/math-trig'),
  require('./lib/text'),
  require('./lib/cube'),
  require('./lib/date-time'),
  require('./lib/financial'),
  require('./lib/information'),
  require('./lib/lookup-reference'),
  require('./lib/statistical'),
  require('./lib/web'),
];

for (var c in categories) {
  var category = categories[c];
  for (var f in category) {
    exports[f] = category[f];
  }
}