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

function solve(len, input) {
  var str = [];
  for (var i = 0; i < len; i++) {
    str[i] = i;
  }

  var ix = 0;
  for (var n = 0; n < input.length; n++) {
    const x = input[n];
    step(str, x, ix, n);
    ix = (ix + x + n) % str.length;
  }
  // console.log("res", str);
  console.log(str[0] * str[1]);
}


solve(5, "3,4,1,5".split(',').map(x => Number(x)));
solve(256, "120,93,0,90,5,80,129,74,1,165,204,255,254,2,50,113".split(',').map(x => Number(x)));
