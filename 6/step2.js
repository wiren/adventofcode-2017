// run with node --harmony step1.js
"use strict";

var fsx = require('../util/fsx');

function realloc(bank, states) {
  var ix = bank.reduce((maxIx, x, ix) => bank[maxIx] < x ? ix : maxIx, 0);
  var n = bank[ix];
  bank[ix] = 0;
  for (var i = 1; n > 0; i++) {
    bank[(ix + i) % bank.length]++;
    n--;
  }

  const dupIx = states.findIndex(x => bank.length == x.length && bank.every((v, ix) => v === x[ix]));
  if (dupIx >= 0) {
    return states.length - dupIx;
  }

  states.push(bank);
  return realloc(bank.slice(), states);
}

function solve(bank) {
  console.log(realloc(bank.slice(), [bank]));
}

solve([0, 2, 7, 0]);
fsx.processFile('input', d => solve(d.trim().split('\t').map(x => Number(x))));
