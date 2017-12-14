"use strict";

var hash = require('./knot.js');

function toBinary(str) {
  return str.split('').map(x => parseInt(x, 16))
    .map(n => [n>>3&1, n>>2&1, n>>1&1, n&1])
    .reduce((arr, x) => arr.concat(x), []);
}

function solve(data) {
  const res = Array.from(Array(128).keys())
    .map(x => hash.knotHash(data + '-' + x))
    .map(toBinary)
    .map(row => row.reduce((sum, c) => sum + Number(c), 0))
    .reduce((sum, n) => sum + n, 0);

  console.log(res);
}

solve('flqrgnkx');
solve('amgozmfv');
