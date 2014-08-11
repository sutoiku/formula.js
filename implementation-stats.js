var Table = require('cli-table');

var categories = [
  //'compatibility',
  //'database',
  'engineering',
  'logical',
  'math-trig',
  'text',
  //'cube',
  'date-time',
  'financial',
  'information',
  //'lookup-reference',
  'statistical',
  //'web'
];

var table = new Table({
  head: ['Category', 'Total', 'Not Implemented'],
});

var aggregateTotal = 0;
var aggregateNotImplemented = 0;

for (var c in categories) {
  var categoryName = categories[c];
  var category = require('./lib/' + categoryName);
  var total = 0;
  var notImplemented = 0;
  for (var f in category) {
    if (typeof category[f] === 'function') {
      total++;
      if (category[f]() === undefined) {
        notImplemented++;
      }
    }
    if (typeof category[f] === 'object') {
      for (var s in category[f]) {
        total++;
        if (category[f][s] === undefined) {
          notImplemented++;
        }
      }
    }
  }
  aggregateTotal += total;
  aggregateNotImplemented += notImplemented;

  table.push([categoryName, total, notImplemented]);
}

table.push(['Totals', aggregateTotal, aggregateNotImplemented]);

console.log(table.toString());