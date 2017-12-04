"use strict";

var fs = require('fs');

fs.readFile('input', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }

  solve(data);
});

function isValid(pwd) {
  return pwd.split(' ').reduce((eq, w, ix, arr) =>
    eq + arr.slice(ix + 1).reduce((nrEq, w2) => nrEq + (w == w2), 0)
  , 0) == 0;
}

function solve(data) {
  const nrValid = data.split('\n').filter(x => x != '')
    .reduce((sum, phrase) => sum + (isValid(phrase) ? 1 : 0), 0);
  console.log(nrValid);
}

solve("aa bb cc dd ee");
solve("aa bb cc dd aa bb");
solve("aa bb cc dd aaa");
