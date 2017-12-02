"use strict";

var fs = require('fs');

fs.readFile('input', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }

  solve(data.split('\n').filter(s => s != ''));
});

function solve(input) {
  const res = input.map(s => s.split(/[ \t]+/))
    .map(row => row.reduce((acc, v, ix) =>
        acc.concat(row.slice(ix + 1).map(x => [[v, x], [x, v]])), [])
      .reduce((a, b) => a.concat(b))
      .filter(p => p[0] % p[1] == 0)
      .map(p => p[0] / p[1])[0])
    .reduce((sum, x) => sum + x, 0);

  console.log(res);
}
