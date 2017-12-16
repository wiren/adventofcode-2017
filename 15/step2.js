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
  var gens = [generator(16807, pair[0], 4), generator(48271, pair[1], 8)];

  var same = 0;
  for (var i = 0; i < 5000000; i++) {
    var aval = gens[0].next().value & mask;
    var bval = gens[1].next().value & mask;
    if (aval === bval) {
      same++;
    }
  }

  console.log(same);
}

// solve([65, 8921]);
solve([591, 393]);
