"use strict";

var fsx = require('../util/fsx');

function solve(str) {
  const res = str.split('').reduce((state, x) => {
    if (state.cl) return {lvl: state.lvl, gbg: state.gbg, cl: 0, sc: state.sc, cnt: state.cnt};
    if (x === '!') return {lvl: state.lvl, gbg: state.gbg, cl: 1, sc: state.sc, cnt: state.cnt};
    if (state.gbg) return {lvl: state.lvl, gbg: x !== '>', cl: 0, sc: state.sc, cnt: state.cnt + (x === '>' ? 0 : 1)};
    if (x === '<') return {lvl: state.lvl, gbg: 1, cl: 0, sc: state.sc, cnt: state.cnt};
    if (x === '{') return {lvl: state.lvl + 1, gbg: 0, cl: 0, sc: state.sc + state.lvl + 1, cnt: state.cnt};
    if (x === '}') return {lvl: state.lvl - 1, gbg: 0, cl: 0, sc: state.sc, cnt: state.cnt};
    return state;
  }, {lvl: 0, gbg: 0, cl: 0, sc: 0, cnt: 0});
  console.log("res:", res);
}

solve("{}"); // 1
solve("{{{}}}"); // 6
solve("{{}, {}}"); // 5
solve("{{{}, {}, {{}}}}"); // 16
solve("{<{},{},{{}}>}"); // 1
solve("{<a>,<a>,<a>,<a>}"); // 1
solve("{{<ab>},{<ab>},{<ab>},{<ab>}}"); // 9
solve("{{<!!>},{<!!>},{<!!>},{<!!>}}"); // 9
solve("{{<a!>},{<a!>},{<a!>},{<ab>}}"); // 3
fsx.processFile('input', solve);
