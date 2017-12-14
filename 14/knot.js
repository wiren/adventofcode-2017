"use strict";

var fsx = require('../util/fsx');

function select(str, x, ix, step) {
  var res = [];
  var i = ix;
  for (var j = 0; j < x; j++) {
    res[j] = str[i];
    i = (i + 1) % str.length;
  }
  return res;
}

function insert(str, sel, ix) {
  var i = ix;
  for (var j = 0; j < sel.length; j++) {
    str[i] = sel[j];
    i = (i + 1) % str.length;
  }
}

function step(str, x, ix, step) {
  var sel = select(str, x, ix, step).reverse();
  insert(str, sel, ix);
}

function toDense(str) {
  var arrs = [];
  var foo = str.slice();
  while (foo.length > 0) {
    arrs.push(foo.splice(0, 16));
  }
  return arrs.map(x => x.reduce((res, y) => res ^ y, 0));
}

function hash(len, input) {
  var str = [];
  for (var i = 0; i < len; i++) {
    str[i] = i;
  }

  var ix = 0;
  for (var n = 0; n < input.length * 64; n++) {
    const x = input[n % input.length];
    step(str, x, ix, n);
    ix = (ix + x + n) % str.length;
  }

  var res = toDense(str);

  return res.map(x => x.toString(16)).map(x => x.length < 2 ? '0' + x : x).join('');
}

function toAsciiList(str) {
  return str.split('').map(x => x.charCodeAt()).concat([17, 31, 73, 47, 23]);
}

module.exports = {
  knotHash: function(str) {
    return hash(256, toAsciiList(str));
  }
}
