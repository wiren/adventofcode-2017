"use strict";

var fs = require('fs');

fs.readFile('input', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }

  var arr = data.split('\n')[0].split("");
  arr.push(arr[0]);

  const res = arr.reduce((sum, curr, ix, array) =>
      sum + (curr == array[ix + 1] ? Number(curr) : 0),
    0);

  console.log("Result: " + res);
});
