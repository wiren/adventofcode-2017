"use strict";

var fs = require('fs');

fs.readFile('input', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }

  solve(data);
});

function combinations(row) {
  return row.reduce((acc, v, ix) =>
      acc.concat(row.slice(ix + 1).map(x => [ [v, x], [x, v] ]))
    , [])
    .reduce((a, b) => a.concat(b));
}

function solve(input) {
  var res = input.split('\n')
    .filter(s => s != '')
    .map(s => s.split(/[ \t]+/))
    .map(row => combinations(row))
    .map(arr => arr.filter(pair => pair[0] % pair[1] == 0).map(p => p[0] / p[1]))
    .reduce((sum, x) => sum + x[0], 0);

  console.log(res);
}
