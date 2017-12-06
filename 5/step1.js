"use strict";

// run with node --harmony step1.js

var fsx = require('../util/fsx');

function step(n, ix, inst) {
  if (ix >= inst.length) return n;
  return step(n + 1, ix + inst[ix]++, inst);
}

function solve(data) {
  const res = step(0, 0, data);
  console.log("It takes " + res + " steps to escape the maze");
}

solve([0, 3, 0, 1, -3]);
fsx.processLines('input', solve);
