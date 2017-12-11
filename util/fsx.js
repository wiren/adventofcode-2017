"use strict";

var fs = require('fs');

exports.processFile = function(file, fn) {
  fs.readFile(file, 'utf8', function(err, data) {
    if (err) console.log(err);
    fn(data.trim());
  });
}

exports.processLines = function(file, fn) {
  fs.readFile(file, 'utf8', function(err, data) {
    if (err) console.log(err);
    fn(data.trim().split('\n'));
  });
}
