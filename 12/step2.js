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
  var rem = Object.keys(pipes);
  var connected = [];
  while (rem.length > 0) {
    const conn = findConnected(pipes, [], rem[0]);
    connected.push(conn);
    rem = rem.filter(x => !conn.includes(x));
  }
  console.log(connected.length);
}

fsx.processLines('testinput', solve);
fsx.processLines('input', solve);
