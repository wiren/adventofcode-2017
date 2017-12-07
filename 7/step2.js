"use strict";

var fsx = require('../util/fsx');

function parse(s, map) {
  const parts = s.split(' -> ');
  const self = parts[0].split(' ');
  const next = parts[1] ? parts[1].split(', ') : [];
  map[self[0]] = {
    weight: Number(self[1].slice(1, self[1].length - 1)),
    next: next
  };
}

function sumWt(tree) {
  tree.sum = tree.weight + tree.next.reduce((sum, x) => sum + sumWt(x), 0);
  return tree.sum;
}

function childrenOfSameWt(tree) {
  const wts = tree.next.reduce((sums, x) => sums.includes(x.sum) ? sums : sums.concat(x.sum), []);
  return wts.length === 1;
}

function findImbal(tree) {
  if (childrenOfSameWt(tree)) return;

  for (var i = 0; i < tree.next.length; i++) {
    const res = findImbal(tree.next[i]);
    if (res) return res;
  }

  return tree;
}

function solve(input) {
  const map = {};
  input.map(x => parse(x, map));
  var notRoot = [];
  for (var k in map) {
    var curr = map[k];
    if (curr.next.length == 0) {
      notRoot.push(curr);
    }
    curr.next.forEach((x, ix) => {
      curr.next[ix] = map[x];
      notRoot.push(x);
    });
  }

  const root = Object.keys(map).find(x => !notRoot.includes(x));
  sumWt(map[root]);
  const imbal = findImbal(map[root]);
  const grp = imbal.next.reduce((res, x) => {
    (res[x.sum] = res[x.sum] || []).push(x);
    return res;
  }, {});

  const vals = Object.keys(grp).sort((a, b) => grp[a].length - grp[b].length);

  console.log('result:', grp[vals[0]][0].weight - grp[vals[0]][0].sum + grp[vals[1]][0].sum);
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
