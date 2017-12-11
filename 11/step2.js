"use strict";

var fsx = require('../util/fsx');

var dir = {'n': [0,2], 'ne': [1,1], 'se': [1,-1], 's': [0,-2], 'sw': [-1,-1], 'nw': [-1,1]};

function distance(v) {
  const x = Math.abs(v.x), y = Math.abs(v.y);
  return y > x ? (x + y) / 2 : x;
}

function solve(data) {
  const res = data.split(',').reduce((pos, v) => {
    const newPos = {x: pos.x + dir[v][0], y: pos.y + dir[v][1]}
    return {x: newPos.x, y: newPos.y, max: Math.max(distance(newPos), pos.max)};
  }, {x: 0, y: 0, max: 0})
  console.log(distance(res).max);
}

fsx.processFile('input', data => solve(data));
