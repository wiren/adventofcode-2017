"use strict";

var fsx = require('../util/fsx');

function solve(data) {
  const res = data.reduce((prgs, line) => {
    const children = line.split(' -> ')[1];
    return [prgs[0].concat(line.split(' ')[0]),
      children ? prgs[1].concat(children.split(', ')) : prgs[1]
    ];
  }, [[], []])
  console.log('answer:', res[0].filter(x => !res[1].includes(x)));
}

const test = [
  "pbga (66)",
  "xhth (57)",
  "ebii (61)",
  "havc (66)",
  "ktlj (57)",
  "fwft (72) -> ktlj, cntj, xhth",
  "qoyq (66)",
  "padx (45) -> pbga, havc, qoyq",
  "tknk (41) -> ugml, padx, fwft",
  "jptl (61)",
  "ugml (68) -> gyxo, ebii, jptl",
  "gyxo (61)",
  "cntj (57)",
];

solve(test);
fsx.processLines('input', solve);
