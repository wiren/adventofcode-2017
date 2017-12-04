"use strict";

const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];

function move(s, dir) {
  return { x: s.x + dirs[dir][0], y: s.y + dirs[dir][1], dir: dir };
}

function nextDir(s) {
  return Math.abs(s.x) == Math.abs(s.y) + (s.dir == 0 ? 1 : 0) ? (s.dir + 1) % 4 : s.dir;
}

function solve(n) {
  var state = { x: 0, y: 0, dir: 0 };
  for (var i = 1; i < n; i++) {
    state = move(state, nextDir(state));
  }

  const res = Math.abs(state.x) + Math.abs(state.y);
  console.log("Manhattan distance for square " + n + " is " + res);
}

solve(1);
solve(12);
solve(23);
solve(1024);
solve(277678);
