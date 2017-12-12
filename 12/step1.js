"use strict";

var fsx = require('../util/fsx');

function findConnected(pipes, conn, x) {
  conn.push(x);
  for (var i = 0; i < pipes[x].length; i++) {
    if (!conn.includes(pipes[x][i])) {
      findConnected(pipes, conn, pipes[x][i]);
    }
  }
  return conn;
}

function solve(data) {
  const pipes = data.map(x => x.split(' <-> ')).reduce((res, x) => {
    res[x[0]] = x[1].split(', ');
    return res;
  }, {});
  const conn = findConnected(pipes, [], '0');
  console.log(conn.length);
}

fsx.processLines('testinput', solve);
fsx.processLines('input', solve);
