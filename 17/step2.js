"use strict";

var fsx = require('../util/fsx');

function solve(input, stop) {
  var ix = 0, n = 0;
  for (var i = 1; i <= stop; i++) {
    ix = 1 + (ix + input) % i;
    if (ix === 1) n = i;
  }
  console.log(n);
}

// solve(3, 10);
solve(355, 50000000);
