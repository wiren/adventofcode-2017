"use strict";

var fsx = require('../util/fsx');

function solve(data) {
  const layers = data.map(x => x.split(': ')).reduce((res, x) => {
    res[x[0]] = Number(x[1]);
    return res;
  }, []);

  const res = layers.map((x, ix) => ix % (x * 2 - 2) ? 0 : x * ix).reduce((res, x) => res + x);

  console.log(res);
}

fsx.processLines('testinput', solve);
fsx.processLines('input', solve);
