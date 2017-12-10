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

function test(str, expected) {
  const res = hash(256, toAsciiList(str));
  console.log(res, res === expected);
}

test("", "a2582a3a0e66e6e86e3812dcb672a272");
test("AoC 2017", "33efeb34ea91902bb2f59c9920caa6cd");
test("1,2,3", "3efbe78a8d82f29979031a4aa0b16a9d");
test("1,2,4", "63960835bcdc130f0b66d7ff4f6a5a8e");
test("120,93,0,90,5,80,129,74,1,165,204,255,254,2,50,113", "d067d3f14d07e09c2e7308c3926605c4");
