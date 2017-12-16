"use strict";

var fsx = require('../util/fsx');

function spin(n, prgs) {
  return prgs.slice(prgs.length - n).concat(prgs.slice(0, prgs.length - n));
}

function swapN(ix, res) {
  return res.map((x, i) => i == ix[0] ? res[ix[1]] : i == ix[1] ? res[ix[0]] : x);
}

function swapX(emnts, res) {
  return swapN([res.indexOf(emnts[0]), res.indexOf(emnts[1])], res);
}

function dance(prgs, moves) {
  return moves.reduce((res, move) => {
    if (move[0] === 's') return spin(move.slice(1), res);
    if (move[0] === 'x') return swapN(move.slice(1).split('/'), res);
    if (move[0] === 'p') return swapX(move.slice(1).split('/'), res);
    return res;
  }, prgs);
}

function solve(prgs, moves) {
  const res = dance(prgs.split(''), moves.split(',')).join('');
  console.log(res);
}

// solve('abcde', 's1,x3/4,pe/b');
fsx.processFile('input', moves => solve('abcdefghijklmnop', moves));
