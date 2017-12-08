"use strict";

var fsx = require('../util/fsx');

function solve(instr) {
  var maxVal = 0;
  const reg = instr.map(x => x.split(' ')).reduce((reg, x) => {
    if (eval((reg[x[4]] || 0) + x[5] + x[6])) {
      reg[x[0]] = (reg[x[0]] || 0) + (x[1] === 'inc' ? 1 : -1) * x[2];
      maxVal = Math.max(reg[x[0]], maxVal);
    }
    return reg;
  }, {});
  console.log('largest:', Object.keys(reg)
      .reduce((max, x) => Math.max(max, reg[x]), reg[Object.keys(reg)[0]]),
    ', max:', maxVal);
}

const test = [
  "b inc 5 if a > 1",
  "a inc 1 if b < 5",
  "c dec -10 if a >= 1",
  "c inc -20 if c == 10"
];
solve(test);
fsx.processLines('input', solve);
