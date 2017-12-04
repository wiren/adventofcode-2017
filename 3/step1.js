"use strict";

const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];

function arrAdd(a, b) {
  return [a[0] + b[0], a[1] + b[1]];
}

function newDir(pos, dir) {
  return Math.abs(pos[0]) == Math.abs(pos[1]) + (dir == 0 ? 1 : 0) ? (dir + 1) % 4 : dir;
}

function nextState(state) {
  const dir = newDir(state.pos, state.dir);
  return { pos: arrAdd(state.pos, dirs[dir]), dir: dir };
}

function solve(n) {
  var state = { pos: [0, 0], dir: 0 };
  for (var i = 1; i < n; i++) {
    state = nextState(state);
  }

  const res = Math.abs(state.pos[0]) + Math.abs(state.pos[1]);
  console.log("Manhattan distance for square " + n + " is " + res);
}

solve(1);
solve(12);
solve(23);
solve(1024);
solve(277678);
