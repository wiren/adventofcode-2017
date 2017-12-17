"use strict";

var fsx = require('../util/fsx');

function solve(input, stop) {
  var ix = 0, buf = [0];
  for (var i = 1; i <= stop; i++) {
    ix = 1 + (ix + input) % buf.length;
    buf = buf.slice(0, ix).concat(i, buf.slice(ix));
  }
  console.log('res', buf[ix], buf[ix + 1]);
}

// solve(3, 10);
solve(355, 2017);
