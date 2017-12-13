"use strict";

var fsx = require('../util/fsx');

function nrCaught(layers, delay) {
  // concise but crazy slow
  // return layers.map((x, ix) => (ix + delay) % (x * 2 - 2) ? 0 : 1).reduce((res, x) => res + x, 0);

  var res = 0;
  for (var i = 0; i < layers.length; i++) {
    res += layers[i] && (i + delay) % (layers[i] * 2 - 2) === 0 ? 1 : 0;
  }

  return res;
}

function solve(data) {
  const layers = data.map(x => x.split(': ')).reduce((res, x) => {
    res[x[0]] = Number(x[1]);
    return res;
  }, []);

  var i = 0;
  while (nrCaught(layers, i) > 0) {
    i++;
  }
  console.log(i);
}

fsx.processLines('testinput', solve);
fsx.processLines('input', solve);
