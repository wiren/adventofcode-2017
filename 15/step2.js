"use strict";

function* generator(factor, start, mult) {
  const div = 2147483647;
  var prev = start;
  while (true) {
    prev = (prev * factor) % div;
    if (prev % mult === 0) yield prev;
  }
}

const mask = 65535;
function solve(pair) {
  var a = generator(16807, pair[0], 4);
  var b = generator(48271, pair[1], 8);

  var same = 0;
  for (var i = 0; i < 5000000; i++) {
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
