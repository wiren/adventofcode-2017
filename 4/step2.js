"use strict";

var fs = require('fs');

fs.readFile('input', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }

  solve(data);
});

function isAna(a, b) {
  return a.split('').sort().join('') == b.split('').sort().join('');
}

function isValid(pwd) {
  const nrEqual = pwd.split(' ').reduce((eq, w, ix, arr) =>
    eq + arr.slice(ix + 1).reduce((nrEq, w2) => nrEq + (w == w2), 0)
  , 0);
  const nrAnagrams = pwd.split(' ').reduce((eq, w, ix, arr) =>
    eq + arr.slice(ix + 1).reduce((nrAn, w2) => nrAn + isAna(w, w2), 0)
  , 0);
  return nrEqual == 0 && nrAnagrams == 0;
}

function solve(data) {
  const nrValid = data.split('\n').filter(x => x != '')
    .reduce((sum, phrase) => sum + (isValid(phrase) ? 1 : 0), 0);
  console.log(nrValid);
}

solve("abcde fghij");               // valid
solve("abcde xyz ecdab");           // not valid
solve("a ab abc abd abf abj");      // valid
solve("iiii oiii ooii oooi oooo");  // valid
solve("oiii ioii iioi iiio");       // not valid
