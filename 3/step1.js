"use strict";

// Run with "node --harmony step1.js" to enable tail call optimization

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
  return [arrAdd(posDir[0], dir), dir];
}

function step(i, posDir, stopAt) {
  if (i >= stopAt) return posDir;

  return step(i + 1, nextPosDir(posDir), stopAt);
}

function solve(input) {
  const endPos = step(1, [[0, 0], [1, 0]], input);
  const res = Math.abs(endPos[0][0]) + Math.abs(endPos[0][1]);
  console.log("Manhattan distance for square " + input + " is " + res);
}

solve(1);
solve(12);
solve(23);
solve(1024);
solve(277678);
