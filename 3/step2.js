"use strict";

// Run with "node --harmony step2.js" to enable tail call optimization

function arrEq(a, b) {
  return a[0] == b[0] && a[1] == b[1];
}

function arrAdd(a, b) {
  return [a[0] + b[0], a[1] + b[1]];
}

function changeDir(dir) {
  if (arrEq(dir, [1, 0])) return [0, 1];
  if (arrEq(dir, [0, 1])) return [-1, 0];
  if (arrEq(dir, [-1, 0])) return [0, -1];
  return [1, 0];
}

function timeToChangeDir(posDir) {
  const nextPos = arrAdd(posDir[0], posDir[1]);
  return (arrEq(posDir[1], [1, 0]) && nextPos[0] - 1 > -nextPos[1])
    || (arrEq(posDir[1], [0, 1]) && nextPos[1] > nextPos[0])
    || (arrEq(posDir[1], [-1, 0]) && -nextPos[0] > nextPos[1])
    || (arrEq(posDir[1], [0, -1]) && -nextPos[1] > -nextPos[0]);
}

function nextPosDir(posDir) {
  const dir = timeToChangeDir(posDir) ? changeDir(posDir[1]) : posDir[1];
  const nextPos = arrAdd(posDir[0], dir);
  storeValue(nextPos);
  return [nextPos, dir];
}

function surrPos(pos) {
  return [[1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1]]
    .map(p => arrAdd(pos, p));
}

function storeValue(pos) {
  values[pos] = surrPos(pos).reduce((sum, p) => {
    return sum + (values[p] ? values[p] : 0);
  }, 0);
}

function step(i, posDir, stopAt) {
  if (values[posDir[0]] > stopAt) return [i, posDir];

  return step(i + 1, nextPosDir(posDir), stopAt);
}

function solve(input) {
  values = {};
  values[[0, 0]] = 1;
  const res = step(1, [[0, 0], [1, 0]], input);
  console.log("Square " + res[0] + " at position " + res[1][0]
    + " has value " + values[res[1][0]] + " which is larger than " + input);
}

var values;

solve(1);
solve(12);
solve(23);
solve(1024);
solve(277678);
