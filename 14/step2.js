"use strict";

var hash = require('./knot.js');

function toBinary(str) {
  return str.split('').map(x => parseInt(x, 16))
    .map(n => [n>>3&1, n>>2&1, n>>1&1, n&1])
    .reduce((arr, x) => arr.concat(x), []);
}

function visitRegion(disk, visited, x, y) {
  if (x < 0 || y < 0 || x > 127 || y > 127) return;
  if (visited[[x,y]] || !disk[y][x]) return;

  visited[[x,y]] = 1;
  visitRegion(disk, visited, x - 1, y);
  visitRegion(disk, visited, x + 1, y);
  visitRegion(disk, visited, x, y - 1);
  visitRegion(disk, visited, x, y + 1);
}

function solve(data) {
  const binDisk = Array.from(Array(128).keys())
    .map(x => hash.knotHash(data + '-' + x))
    .map(toBinary);

  var visited = {};
  var nrRegions = 0;
  for (var i = 0; i < 128; i++) {
    for (var j = 0; j < 128; j++) {
      if (!visited[[j,i]] && binDisk[i][j]) {
        visitRegion(binDisk, visited, j, i);
        nrRegions++;
      }
    }
  }

  console.log(nrRegions);
}

solve('flqrgnkx');
solve('amgozmfv');
