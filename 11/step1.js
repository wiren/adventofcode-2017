"use strict";

var fsx = require('../util/fsx');

var dir = {'n': [0,2], 'ne': [1,1], 'se': [1,-1], 's': [0,-2], 'sw': [-1,-1], 'nw': [-1,1]};

function distance(v) {
  const x = Math.abs(v[0]), y = Math.abs(v[1]);
  return y > x ? (x + y) / 2 : x;
}

function solve(data, expected) {
  const res = data.split(',').reduce((pos, x) => [pos[0] + dir[x][0], pos[1] + dir[x][1]], [0,0]);
  const dist = distance(res);
  console.log(dist, dist === expected);
}

solve("ne,ne,ne", 3);
solve("ne,ne,sw,sw", 0);
solve("ne,ne,s,s", 2);
solve("se,sw,se,sw,sw", 3);
solve("n,se,s,sw,nw,n,ne,s", 0)
solve("se,ne", 2);
fsx.processFile('input', data => solve(data, 687));
