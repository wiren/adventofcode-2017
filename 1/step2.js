"use strict";

var fs = require('fs');

fs.readFile('input', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }

  solve(data);
});

function solve(data) {
  const res = data.split('\n')[0].split("")
    .filter((curr, ix, arr) => curr == arr[(ix + arr.length / 2) % arr.length])
    .reduce((sum, x) => sum + Number(x), 0);

    console.log("Result: " + res);
}
