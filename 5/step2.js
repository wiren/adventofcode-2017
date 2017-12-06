"use strict";

// run with "node --harmony step2.js" to enable tail recursion

var fsx = require('../util/fsx');

function step(n, ix, inst) {
  if (ix >= inst.length) return n;
  const nextIx = ix + inst[ix];
  inst[ix] = inst[ix] + (inst[ix] > 2 ? -1 : 1);
  return step(n + 1, nextIx, inst);
}

function solve(data) {
  const res = step(0, 0, data);
  console.log("It takes " + res + " steps to escape the maze");
}

solve([0, 3, 0, 1, -3]);
fsx.processLines('input', inst => solve(inst.map(x => Number(x))));
