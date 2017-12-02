"use strict";

var fs = require('fs');

fs.readFile('input', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }

  solve(data);
});

function solve(input) {
  var res = input.split('\n')
    .filter(s => s != '')
    .map(s => s.split(/[ \t]+/))
    .map(row => minmax(row))
    .reduce((sum, mm) => sum + mm[1] - mm[0], 0);

  console.log(res);
}

function minmax(row) {
  return row.map(c => Number(c))
    .reduce((arr, x) => {
      return [Math.min(x, arr[0]), Math.max(x, arr[1])];
    }, [Number.MAX_SAFE_INTEGER, 0]);
}
