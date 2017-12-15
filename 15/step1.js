"use strict";

function* generator(factor, start) {
  const div = 2147483647;
  var prev = start;
  while (true) {
    prev = (prev * factor) % div;
    yield prev;
  }
}

const mask = 65535;
function solve(pair) {
  var a = generator(16807, pair[0]);
  var b = generator(48271, pair[1]);

  var same = 0;
  for (var i = 0; i < 40000000; i++) {
    var aval = a.next().value & mask;
    var bval = b.next().value & mask;
    if (aval === bval) {
      same++;
    }
  }

  console.log(same);
}

// solve([65, 8921]);
solve([591, 393]);
