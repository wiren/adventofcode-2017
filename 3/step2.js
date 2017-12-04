"use strict";

const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];

function arrAdd(a, b) {
  return [a[0] + b[0], a[1] + b[1]];
}

function newDir(pos, dir) {
  return Math.abs(pos[0]) == Math.abs(pos[1]) + (dir == 0 ? 1 : 0) ? (dir + 1) % 4 : dir;
}

function getValue(values, pos) {
  return [[1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1]]
    .map(p => arrAdd(pos, p))
    .reduce((sum, p) => sum + (values[p] ? values[p] : 0), 0);
}

function nextState(state) {
  const dir = newDir(state.pos, state.dir);
  const newPos = arrAdd(state.pos, dirs[dir]);
  state.values[newPos] = getValue(state.values, newPos);
  return { pos: newPos, dir: dir, values: state.values };
}

function solve(n) {
  var values = {};
  values[[0, 0]] = 1;
  var state = { pos: [0, 0], dir: 0, values: values };
  while (state.values[state.pos] <= n) {
    state = nextState(state);
  }

  console.log("Square at position " + state.pos
    + " has value " + state.values[state.pos] + " which is larger than " + n);
}

solve(1);
solve(12);
solve(23);
solve(1024);
solve(277678);
